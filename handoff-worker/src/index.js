/**
 * Handoff de Marketing · Spun
 * Worker que protege os arquivos estáticos com senha compartilhada.
 *
 * Depende de `run_worker_first: true` no wrangler.jsonc. Sem isso, a Cloudflare
 * serve o HTML direto e o Worker nunca roda.
 *
 * Variáveis (Settings > Variables and Secrets, tipo Secret):
 *   SITE_PASSWORD  a senha compartilhada
 *   AUTH_SECRET    string longa e aleatória, usada só para assinar o cookie
 */

const COOKIE = "spun_handoff_auth";
const MAX_AGE = 60 * 60 * 12; // 12 horas

const enc = new TextEncoder();

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// comparação em tempo constante
function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function makeToken(secret, exp) {
  return `${exp}.${await hmac(secret, String(exp))}`;
}

async function tokenIsValid(secret, token) {
  if (!token) return false;
  const dot = token.lastIndexOf(".");
  if (dot < 1) return false;
  const exp = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!/^\d+$/.test(exp)) return false;
  if (Number(exp) < Date.now()) return false;
  return safeEqual(sig, await hmac(secret, exp));
}

function readCookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return null;
}

function loginPage(error) {
  const msg = error
    ? `<p class="err">Senha incorreta. Tenta de novo.</p>`
    : `<p class="hint">Conteúdo interno da Spun. Pede a senha para a Mariana ou para a liderança de Marketing.</p>`;
  return `<!DOCTYPE html><html lang="pt-BR"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Handoff de Marketing · Spun</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;
background:#101014;color:#fff;font-family:Inter,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif;
-webkit-font-smoothing:antialiased;position:relative;overflow:hidden}
body::after{content:"";position:absolute;right:-160px;top:-160px;width:460px;height:460px;border-radius:50%;
background:radial-gradient(circle at 30% 30%, rgba(232,53,10,.5), rgba(232,53,10,0) 62%);pointer-events:none}
.box{width:100%;max-width:400px;position:relative;z-index:2}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;
color:#ff7a55;font-weight:600;margin:0 0 18px}
h1{font-family:Archivo,sans-serif;font-size:34px;font-weight:800;letter-spacing:-.028em;line-height:1.06;
text-transform:uppercase;margin:0 0 14px}
.hint,.err{font-size:14px;line-height:1.55;margin:0 0 22px}
.hint{color:#9A9A93}
.err{color:#ff7a55}
label{display:block;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.16em;
text-transform:uppercase;color:#9A9A93;margin-bottom:8px}
input{width:100%;padding:14px 16px;border-radius:10px;border:1px solid #2f3038;background:#1b1b21;color:#fff;
font-size:16px;font-family:inherit}
input:focus{outline:none;border-color:#E8350A}
button{width:100%;margin-top:12px;padding:14px 16px;border:0;border-radius:10px;background:#E8350A;color:#fff;
font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;
font-weight:600;cursor:pointer}
button:hover{background:#fff;color:#101014}
button:focus-visible,input:focus-visible{outline:2px solid #39FF14;outline-offset:2px}
.fine{margin-top:26px;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.12em;
text-transform:uppercase;color:#5c5c5c;line-height:1.9}
</style></head><body>
<div class="box">
  <p class="eyebrow">Spun · Marketing</p>
  <h1>Transição da gestão de Marketing</h1>
  ${msg}
  <form method="POST" action="/__auth">
    <label for="p">Senha de acesso</label>
    <input id="p" name="password" type="password" autocomplete="current-password" autofocus required>
    <button type="submit">Entrar</button>
  </form>
  <p class="fine">Confidencial · uso interno</p>
</div>
</body></html>`;
}

function htmlResponse(body, status) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const password = env.SITE_PASSWORD;
    const secret = env.AUTH_SECRET;

    // Sem configuração, bloqueia em vez de expor o conteúdo.
    if (!password || !secret) {
      return new Response(
        "Configuração incompleta: defina SITE_PASSWORD e AUTH_SECRET nas variáveis do Worker.",
        { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8" } }
      );
    }

    const base = `Path=/; HttpOnly; SameSite=Lax${url.protocol === "https:" ? "; Secure" : ""}`;

    // sair
    if (url.pathname === "/__logout") {
      return new Response(null, {
        status: 302,
        headers: { Location: "/", "Set-Cookie": `${COOKIE}=; Max-Age=0; ${base}` },
      });
    }

    // envio do formulário
    if (url.pathname === "/__auth") {
      if (request.method !== "POST") {
        return new Response(null, { status: 302, headers: { Location: "/" } });
      }
      const form = await request.formData();
      const sent = String(form.get("password") || "");
      if (!safeEqual(sent, password)) {
        return htmlResponse(loginPage(true), 401);
      }
      const token = await makeToken(secret, Date.now() + MAX_AGE * 1000);
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
          "Set-Cookie": `${COOKIE}=${token}; Max-Age=${MAX_AGE}; ${base}`,
          "Cache-Control": "no-store",
        },
      });
    }

    // autenticado: serve o arquivo estático
    if (await tokenIsValid(secret, readCookie(request, COOKIE))) {
      const asset = await env.ASSETS.fetch(request);
      const out = new Response(asset.body, asset);
      out.headers.set("Cache-Control", "no-store");
      out.headers.set("X-Robots-Tag", "noindex, nofollow");
      return out;
    }

    return htmlResponse(loginPage(false), 401);
  },
};
