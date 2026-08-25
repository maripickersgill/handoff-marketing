# Handoff de Marketing · deploy no Cloudflare Workers

Estrutura do repositório:

```
wrangler.jsonc        configuração do Worker
public/index.html     a página do handoff
src/index.js          a camada de senha
```

O `run_worker_first: true` no `wrangler.jsonc` é o que faz a proteção existir.
Ele obriga o Worker a rodar antes de qualquer arquivo estático. Sem essa linha,
a Cloudflare entrega o HTML direto e o Worker nunca é chamado, ou seja, o site
sobe aberto.

---

## 1. Ajustes na tela "Set up your application"

| Campo | O que deixar |
|---|---|
| Project name | `handoff-marketing` |
| Build command | vazio |
| Deploy command | `npx wrangler deploy` |
| Builds for non-production branches | **desmarcar** |
| Protect with Cloudflare Access | deixar desligado |

**Por que desmarcar builds de branches não-produção:** cada branch gera uma URL
de preview própria. Como as variáveis abaixo são definidas no ambiente de
produção, uma preview pode subir sem senha configurada. Com o `wrangler.jsonc`
deste repositório ela retorna erro 500 em vez de abrir, mas é uma porta a menos.

**Sobre o toggle do Access:** ele é uma alternativa completa ao que está aqui.
Ver o final deste arquivo.

## 2. Estrutura do repositório

O repositório precisa ter os três arquivos acima, nesses caminhos. Se você já
subiu a versão anterior em formato Pages, é preciso:

- mover `index.html` para dentro de `public/`
- apagar a pasta `functions/`
- adicionar `wrangler.jsonc` e `src/index.js`

Mantém o repositório **privado**. A senha não vai para o código, mas os links
internos e os telefones estão dentro do `index.html`.

## 3. Definir a senha

Depois do primeiro deploy, em **Settings → Variables and Secrets**, adiciona duas
variáveis do tipo **Secret**:

| Nome | Valor |
|---|---|
| `SITE_PASSWORD` | a senha que você distribui para o time |
| `AUTH_SECRET` | string longa e aleatória, que ninguém precisa saber |

Para gerar o `AUTH_SECRET`:

```bash
openssl rand -hex 32
```

## 4. Redeploy

Em **Deployments**, refaz o último deploy para ele pegar as variáveis. O primeiro
deploy vai responder 500 até isso ser feito, o que é proposital: falha fechando,
não abrindo.

Sai em `handoff-marketing.<sua-conta>.workers.dev`.

---

## Detalhes que valem saber

**Sair da sessão:** acessar `/__logout` limpa o cookie.

**Trocar a senha:** muda `SITE_PASSWORD` e redeploy. Para derrubar todas as
sessões abertas de uma vez, troca também o `AUTH_SECRET`.

**Duração da sessão:** 12 horas. Dá para mudar em `MAX_AGE`, no topo do
`src/index.js`.

**Indexação:** todas as respostas vão com `X-Robots-Tag: noindex, nofollow` e
`Cache-Control: no-store`. A página não entra em buscador nem fica em cache
compartilhado.

**Atualizar o conteúdo:** é só commitar um novo `public/index.html`. O deploy
roda sozinho e a camada de senha não muda.

---

## Alternativa: o toggle "Protect with Cloudflare Access"

Aquele botão na tela de setup resolve o mesmo problema por outro caminho, e é
gratuito até 50 usuários. A diferença:

|  | Senha compartilhada (este repositório) | Cloudflare Access |
|---|---|---|
| Como entra | uma senha, igual para todos | e-mail da pessoa e código enviado |
| Distribuição | manda a senha no Discord e pronto | precisa cadastrar cada e-mail na política |
| Rastreabilidade | nenhuma, você não sabe quem abriu | log de quem acessou e quando |
| Se vazar | precisa trocar a senha e avisar todo mundo | remove a pessoa da política |

Para um documento de transição que vai circular por algumas semanas, a senha
compartilhada dá conta. Se o material for ficar no ar por mais tempo ou se
importar saber quem consultou, o Access é melhor.

Os dois não se atrapalham: dá para começar pela senha e ligar o Access depois,
sem tocar no `public/index.html`.
