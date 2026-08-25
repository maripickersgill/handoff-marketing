<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Handoff de Marketing · Spun</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --ink:#101014; --ice:#F4F4F0; --paper:#fff; --line:#E2E2DB; --line-soft:#EDEDE7;
  --red:#E8350A; --red-tint:#FDEDE8; --purple:#7B2FBE; --purple-tint:#F3ECFB;
  --green:#39FF14; --mute:#6E6E68; --mute-2:#9A9A93; --r:14px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:118px}
body{margin:0;background:var(--ice);color:var(--ink);font-family:Inter,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif;font-size:16px;line-height:1.62;-webkit-font-smoothing:antialiased}
.wrap{max-width:1080px;margin:0 auto;padding:0 22px}
h1,h2,h3,h4{font-family:Archivo,Inter,Helvetica,sans-serif;margin:0;line-height:1.08;letter-spacing:-.022em}
p{margin:0 0 14px}
a{color:var(--purple)}
strong{font-weight:650}
code{font-family:"IBM Plex Mono",monospace;font-size:.92em;background:var(--line-soft);padding:1px 5px;border-radius:4px}

.bar{position:sticky;top:0;z-index:60;background:var(--ink);color:#fff}
.bar .wrap{display:flex;align-items:center;gap:14px;height:52px}
.brand{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:600}
.brand span{color:var(--mute-2)}
.bar .tag{margin-left:auto;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--green);border:1px solid #2f3038;border-radius:99px;padding:5px 11px;display:inline-flex;align-items:center;gap:7px;white-space:nowrap}
.bar .tag::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--green)}

.hero{background:var(--ink);color:#fff;padding:64px 0 58px;position:relative;overflow:hidden}
.hero::after{content:"";position:absolute;right:-140px;top:-140px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle at 30% 30%, rgba(232,53,10,.55), rgba(232,53,10,0) 62%);pointer-events:none}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--red);font-weight:600;margin:0 0 20px}
.hero .eyebrow{color:#ff7a55}
.hero h1{font-size:clamp(28px,4.6vw,46px);font-weight:800;text-transform:uppercase;letter-spacing:-.028em;max-width:22ch;position:relative;z-index:2}
.hero h1 em{font-style:normal;color:var(--red)}
.hero .lede{max-width:58ch;color:#C7C7C0;font-size:17px;margin:26px 0 0;position:relative;z-index:2}
.hero .sig{margin:32px 0 0;font-family:"IBM Plex Mono",monospace;font-size:12px;color:var(--mute-2);position:relative;z-index:2}

.subnav{position:sticky;top:52px;z-index:50;background:rgba(244,244,240,.94);backdrop-filter:blur(9px);border-bottom:1px solid var(--line)}
.subnav .inner{display:flex;gap:6px;overflow-x:auto;padding:11px 0;scrollbar-width:none}
.subnav .inner::-webkit-scrollbar{display:none}
.subnav a{flex:0 0 auto;font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--mute);text-decoration:none;padding:7px 13px;border-radius:99px;border:1px solid transparent;white-space:nowrap}
.subnav a:hover{color:var(--ink);border-color:var(--line)}
.subnav a.active{background:var(--ink);color:#fff;border-color:var(--ink)}

section.step{padding:52px 0 6px;border-top:1px solid var(--line-soft)}
section.step:first-of-type{border-top:0;padding-top:56px}
.stephead{display:flex;align-items:baseline;gap:14px;margin-bottom:8px}
.num{font-family:"IBM Plex Mono",monospace;font-size:12px;font-weight:600;color:#fff;background:var(--ink);border-radius:6px;padding:4px 8px;flex:0 0 auto;position:relative;top:-4px}
.stephead h3{font-size:clamp(22px,3.2vw,30px);font-weight:800}
.kicker{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--mute-2);margin-bottom:14px}
.step>p,.step>ul{max-width:76ch}
.step ul{padding-left:18px;margin:0 0 16px}
.step li{margin-bottom:8px}
.step li::marker{color:var(--red)}
h4.sub{font-size:16px;font-weight:700;margin:28px 0 10px}

.filters{display:flex;gap:7px;flex-wrap:wrap;margin:18px 0 16px}
.filters button{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;background:var(--paper);border:1px solid var(--line);color:var(--mute);padding:7px 13px;border-radius:99px;cursor:pointer}
.filters button[aria-pressed="true"]{background:var(--ink);color:#fff;border-color:var(--ink)}
.filters button:focus-visible{outline:2px solid var(--red);outline-offset:2px}
.ledger{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:var(--paper)}
.row{display:grid;grid-template-columns:1fr 1fr auto;gap:14px;align-items:center;padding:15px 18px;border-top:1px solid var(--line-soft)}
.row:first-child{border-top:0}
.row.hide{display:none}
.row .what{font-weight:600;font-size:14.6px;line-height:1.4}
.row .what small{display:block;font-weight:400;color:var(--mute);font-size:12.6px;margin-top:3px;line-height:1.45}
.row .who{font-size:14px;display:flex;align-items:center;gap:9px}
.row .who .arrow{font-family:"IBM Plex Mono",monospace;color:var(--red);font-size:13px}
.row .who.open{color:var(--mute-2)}
.chip{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;padding:5px 9px;border-radius:99px;font-weight:600;white-space:nowrap}
.chip.ok{background:var(--ink);color:var(--green)}
.chip.mid{background:var(--purple-tint);color:var(--purple)}
.chip.open{background:var(--red-tint);color:var(--red);display:inline-flex;align-items:center;gap:6px}
.chip.open::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--red);animation:blip 1.9s infinite}
@keyframes blip{0%,100%{opacity:1}50%{opacity:.25}}

.note{background:var(--paper);border:1px solid var(--line);border-left:3px solid var(--red);border-radius:0 var(--r) var(--r) 0;padding:18px 20px;margin:20px 0;max-width:78ch}
.note.pur{border-left-color:var(--purple)}
.note.dark{background:var(--ink);color:#D9D9D3;border-color:var(--ink);border-left-color:var(--green)}
.note.dark strong{color:#fff}
.note .t{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--red);font-weight:600;margin-bottom:8px}
.note.pur .t{color:var(--purple)}
.note.dark .t{color:var(--green)}
.note p:last-child{margin-bottom:0}
.note ul{margin:8px 0 0;padding-left:18px}

details{background:var(--paper);border:1px solid var(--line);border-radius:var(--r);margin-bottom:10px;overflow:hidden}
details[open]{border-color:var(--ink)}
summary{cursor:pointer;list-style:none;padding:16px 20px;font-weight:650;font-size:15.4px;display:flex;align-items:center;gap:12px}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";margin-left:auto;font-family:"IBM Plex Mono",monospace;color:var(--red);font-size:19px}
details[open] summary::after{content:"–"}
summary:focus-visible{outline:2px solid var(--red);outline-offset:-2px}
.acc-body{padding:2px 20px 20px;border-top:1px solid var(--line-soft)}
.acc-body>*:first-child{margin-top:16px}
.acc-body ol{padding-left:20px;margin:0 0 14px}
.acc-body li{margin-bottom:7px}

.tbl{width:100%;border-collapse:collapse;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;font-size:14px}
.tbl thead th{background:var(--ink);color:#fff;text-align:left;padding:11px 14px;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.13em;text-transform:uppercase;font-weight:600}
.tbl td{padding:12px 14px;border-top:1px solid var(--line-soft);vertical-align:top;line-height:1.48}
.tbl tbody tr:nth-child(even){background:#FAFAF7}
.tbl td:first-child{font-weight:600}
.tbl .t-mono{font-family:"IBM Plex Mono",monospace;font-size:12.5px;font-weight:600;white-space:nowrap}
.tbl .dim{color:var(--mute-2);font-weight:400}
.scroller{overflow-x:auto;-webkit-overflow-scrolling:touch;margin-bottom:14px}

.people{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:16px 0}
.person{background:var(--paper);border:1px solid var(--line);border-radius:var(--r);padding:18px 20px}
.person .role{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--red);font-weight:600;margin-bottom:7px}
.person h4{font-size:17px;font-weight:700;margin-bottom:7px}
.person p{font-size:13.8px;color:var(--mute);margin:0;line-height:1.55}
.person .meta{margin-top:11px;font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--ink);border-top:1px solid var(--line-soft);padding-top:10px}

.risks{display:grid;gap:12px;margin:16px 0}
.risk{background:var(--paper);border:1px solid var(--line);border-radius:var(--r);padding:18px 20px;display:grid;grid-template-columns:1fr 1fr;gap:6px 26px}
.risk .h{grid-column:1/-1;font-weight:700;font-size:15.6px;display:flex;align-items:center;gap:10px}
.risk .lab{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--mute-2);margin-top:10px}
.risk .v{font-size:14px;line-height:1.5}
.risk .full{grid-column:1/-1}
.sev{width:7px;height:7px;border-radius:50%;background:var(--red);flex:0 0 auto}
.sev.med{background:var(--purple)}

.links{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:16px 0}
.lnk{display:flex;flex-direction:column;gap:3px;background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:13px 16px;text-decoration:none;color:var(--ink);transition:border-color .16s,transform .16s}
.lnk:hover{border-color:var(--ink);transform:translateY(-1px)}
.lnk b{font-size:14.4px;font-weight:650}
.lnk span{font-size:12.4px;color:var(--mute)}
.lnk b::after{content:" ↗";color:var(--red);font-size:12px}

.copy{display:inline-flex;align-items:center;gap:10px;background:var(--paper);border:1px solid var(--line);border-radius:99px;padding:6px 6px 6px 16px;margin-top:4px}
.copy .n{font-family:"IBM Plex Mono",monospace;font-size:14px;font-weight:600;letter-spacing:.02em}
.copy button{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.13em;text-transform:uppercase;background:var(--ink);color:#fff;border:0;border-radius:99px;padding:7px 13px;cursor:pointer}
.copy button:hover{background:var(--red)}
.copy button:focus-visible{outline:2px solid var(--red);outline-offset:2px}
.ct{display:inline-flex;align-items:center;gap:9px;background:var(--ice);border:1px solid var(--line);border-radius:99px;padding:3px 4px 3px 12px;margin-top:9px;font-family:"IBM Plex Mono",monospace;font-size:12.5px;font-weight:600;white-space:nowrap;max-width:100%}
.ct em{font-style:normal;color:var(--mute);font-weight:400;margin-right:2px}
.ct button{font-family:"IBM Plex Mono",monospace;font-size:9px;letter-spacing:.12em;text-transform:uppercase;background:var(--ink);color:#fff;border:0;border-radius:99px;padding:5px 10px;cursor:pointer;flex:0 0 auto}
.ct button:hover{background:var(--red)}
.ct button:focus-visible{outline:2px solid var(--red);outline-offset:2px}
.tbl td .doc{display:block;margin-top:9px;font-size:13px}

footer{background:var(--ink);color:var(--mute-2);margin-top:60px;padding:44px 0}
footer .big{font-family:Archivo,sans-serif;font-size:clamp(20px,3vw,26px);font-weight:700;color:#fff;letter-spacing:-.02em;margin-bottom:12px;max-width:36ch;line-height:1.2}
footer p{font-size:13.4px;max-width:64ch;color:#9A9A93}
footer .fine{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;margin-top:26px;color:#5c5c5c;line-height:1.9}

@media (max-width:860px){
  .people,.links{grid-template-columns:1fr}
  .row{grid-template-columns:1fr;gap:9px}
  .risk{grid-template-columns:1fr;gap:2px}
  .hero{padding-top:44px}
}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}html{scroll-behavior:auto}}
</style>
</head>
<body>

<div class="bar"><div class="wrap">
  <div class="brand">SPUN <span>·</span> MARKETING</div>
  <div class="tag">Handoff de gestão</div>
</div></div>

<div class="hero">
  <div class="wrap">
    <div class="eyebrow">Documento de transição · Agosto de 2026</div>
    <h1>Transição da gestão de Marketing</h1>
    <p class="lede">Registro do que passa pela gestão de Marketing: titularidade de cada frente, rituais, acessos, time, projetos em andamento, parceiros e decisões que seguem pendentes.</p>
    <p class="sig">Mariana Burlamaqui Pickersgill · Gerente de Marketing</p>
  </div>
</div>

<div class="subnav"><div class="wrap"><div class="inner">
  <a href="#s1">① Onde a área está</a>
  <a href="#s2">② Titularidade</a>
  <a href="#s3">③ Rituais</a>
  <a href="#s4">④ Time</a>
  <a href="#s5">⑤ Projetos</a>
  <a href="#s6">⑥ Parceiros</a>
  <a href="#s7">⑦ Stakeholders</a>
  <a href="#s8">⑧ Riscos</a>
  <a href="#s9">⑨ Acessos e materiais</a>
  <a href="#s10">⑩ Financeiro</a>
</div></div></div>

<div class="wrap">

<section class="step" id="s1">
  <div class="kicker">Diagnóstico</div>
  <div class="stephead"><div class="num">01</div><h3>Onde a área está hoje</h3></div>
  <p>Marketing opera seis frentes com equipe enxuta: branding, conteúdo, comunicação, design, PR e performance. A operação está no meio de uma troca de modelo, saindo de uma rotina informal para um ciclo de planning e weekly estruturado, implantado há poucas semanas.</p>

  <h4 class="sub">Prazos que estão correndo</h4>
  <div class="scroller"><table class="tbl">
    <thead><tr><th>Prazo</th><th>O que vence</th><th>Quem precisa agir</th></tr></thead>
    <tbody>
      <tr><td class="t-mono">Próximas 2 semanas</td><td>Definição de responsável e cronograma do WIBR Summit</td><td>Roberta Coelho e gestão de Marketing</td></tr>
      <tr><td class="t-mono">Próximas semanas</td><td>Formalizar a movimentação de Babu e Carol para o time de design</td><td>Gestão de Marketing e G&amp;G</td></tr>
      <tr><td class="t-mono">Sem prazo definido</td><td>Decidir o destino da identidade visual em aberto com O Cérebro</td><td>Gestão de Marketing, com a Pip</td></tr>
      <tr><td class="t-mono">Novembro/2026</td><td>WIBR Summit em Porto Alegre, junto ao lançamento do portal</td><td class="dim">A definir</td></tr>
    </tbody>
  </table></div>
</section>

<section class="step" id="s2">
  <div class="kicker">A parte mais importante</div>
  <div class="stephead"><div class="num">02</div><h3>De quem passa a ser cada coisa</h3></div>
  <p>Seis frentes já têm dono definido, uma está em execução compartilhada e cinco continuam em aberto. Cada linha vermelha aqui é uma responsabilidade que hoje está comigo e que precisa de decisão explícita, não de absorção informal pelo time.</p>

  <div class="filters">
    <button data-f="all" aria-pressed="true">Tudo (12)</button>
    <button data-f="ok" aria-pressed="false">Já tem dono (6)</button>
    <button data-f="mid" aria-pressed="false">Em andamento (1)</button>
    <button data-f="open" aria-pressed="false">Em aberto (5)</button>
  </div>

  <div class="ledger" id="ledger">
    <div class="row" data-s="ok"><div class="what">Rituais do time<small>Planning e weekly: condução, convocação e follow-up. Solicitação de transferência de propriedade já enviada</small></div><div class="who"><span class="arrow">→</span> Camile Freitas</div><div class="chip ok">Definido</div></div>
    <div class="row" data-s="ok"><div class="what">Quinzenal de lideranças<small>Solicitação de transferência de propriedade já enviada</small></div><div class="who"><span class="arrow">→</span> Roberta Coelho</div><div class="chip ok">Definido</div></div>
    <div class="row" data-s="ok"><div class="what">E-mail de marketing<small>Acesso concedido e registrado na planilha de Ferramentas</small></div><div class="who"><span class="arrow">→</span> Victória e Camile</div><div class="chip ok">Definido</div></div>
    <div class="row" data-s="ok"><div class="what">Portfólio Meta Business Suite<small>Acesso total concedido e registrado na planilha de Ferramentas</small></div><div class="who"><span class="arrow">→</span> Victória Farias</div><div class="chip ok">Definido</div></div>
    <div class="row" data-s="ok"><div class="what">Aprovação de entradas em Figma, ClickUp e Canva<small>Já transferida. Tem efeito direto sobre custo de licença</small></div><div class="who"><span class="arrow">→</span> Camile e Victória</div><div class="chip ok">Definido</div></div>
    <div class="row" data-s="ok"><div class="what">Aprovação de pagamentos<small>Fluxo já existente, sem mudança</small></div><div class="who"><span class="arrow">→</span> Roberta Coelho</div><div class="chip ok">Definido</div></div>

    <div class="row" data-s="mid"><div class="what">WIBR Cup<small>Liderança já compartilhada, projeto em execução</small></div><div class="who"><span class="arrow">→</span> Victória e Paloma</div><div class="chip mid">Em andamento</div></div>

    <div class="row" data-s="open"><div class="what">WIBR Summit<small>Decisão mais urgente desta lista. Alinhar com a Roberta</small></div><div class="who open"><span class="arrow">→</span> a definir</div><div class="chip open">Em aberto</div></div>
    <div class="row" data-s="open"><div class="what">Aprovação do planejamento mensal de conteúdo<small>Etapa final do fluxo de todas as marcas</small></div><div class="who open"><span class="arrow">→</span> a definir</div><div class="chip open">Em aberto</div></div>
    <div class="row" data-s="open"><div class="what">Blog e artigos da WIBR<small>Envolve relação direta com as colunistas externas</small></div><div class="who open"><span class="arrow">→</span> a definir</div><div class="chip open">Em aberto</div></div>
    <div class="row" data-s="open"><div class="what">Propostas comerciais<small>Hoje feitas por Camile e por mim, com prazo de mesmo dia</small></div><div class="who open"><span class="arrow">→</span> a definir</div><div class="chip open">Em aberto</div></div>
    <div class="row" data-s="open"><div class="what">Identidade visual em aberto com O Cérebro<small>O naming já foi entregue. Falta escolher entre usar a IDV como está ou trocá-la por horas de design gráfico</small></div><div class="who open"><span class="arrow">→</span> a definir</div><div class="chip open">Em aberto</div></div>
  </div>
</section>

<section class="step" id="s3">
  <div class="kicker">Rotina</div>
  <div class="stephead"><div class="num">03</div><h3>Rituais e cadências</h3></div>
  <p>A dona dos rituais passa a ser a <strong>Camile</strong>. Formato, horário e roteiro seguem exatamente como estão. O modelo foi implantado há pouco tempo, então a recomendação é rodar ele igual por pelo menos oito semanas antes de mexer em qualquer coisa.</p>

  <div class="scroller"><table class="tbl">
    <thead><tr><th>Ritual</th><th>Quando</th><th>Quem conduz</th><th>Quem participa</th></tr></thead>
    <tbody>
      <tr><td>Planning de sprint</td><td>Segunda, pela manhã</td><td>Camile Freitas</td><td>Camile, Victória, Andrews e gestão</td></tr>
      <tr><td>Weekly do time</td><td>Segunda ou terça</td><td>Camile Freitas</td><td>Time completo</td></tr>
      <tr><td>Quinzenal de lideranças</td><td>Quinzenal</td><td>Roberta Coelho</td><td>Lideranças</td></tr>
    </tbody>
  </table></div>

  <div class="note pur">
    <div class="t">Já encaminhado</div>
    <p style="margin:0">A solicitação de transferência de propriedade de todas as reuniões recorrentes já foi enviada para as respectivas novas responsáveis. É só aceitar quando chegar, e a partir daí convite, gravação e transcrição passam a ficar no nome delas.</p>
  </div>

  <details><summary>🗓️ Como funciona a planning</summary><div class="acc-body">
    <p>Participam as lideranças de time e de projeto. Todo mundo chega já tendo analisado a semana anterior, com quatro leituras prontas:</p>
    <ul>
      <li>o que foi planejado e cumprido;</li>
      <li>o que foi planejado e não cumprido;</li>
      <li>o que entrou fora do planejado;</li>
      <li>erros e acertos do período.</li>
    </ul>
    <p>A conversa começa pela semana anterior e segue para a checagem da sprint que vai iniciar. As tarefas chegam organizadas, com folga deliberada para demandas não previstas, dimensionada pela média das últimas semanas.</p>
    <p style="margin:0"><strong>Ainda tem ajustes a fazer</strong> nesse modelo, e tudo bem. O importante é que ele não seja abandonado no meio da troca.</p>
  </div></details>

  <details><summary>📊 Como funciona a weekly</summary><div class="acc-body">
    <p>A weekly é gravada e transcrita, o que faz dela a fonte de contexto mais rápida para quem está chegando. Um dia útil antes, a apresentação usada é duplicada e enviada para o time preencher. O preenchimento é de <strong>Camile, Victória e Andrews</strong>, cada um pela sua área e pelos seus resultados.</p>
    <p><strong>Roteiro da reunião:</strong></p>
    <ol>
      <li>Resultados operacionais. A Camile compartilha a semana anterior em tarefas abertas e concluídas, esforço por marca e distribuição de trabalho.</li>
      <li>Resultados por projeto, começando por social.</li>
      <li>Resultados de receita e mídia paga.</li>
      <li>Rodada por time: o que foi feito, prioridades da semana corrente e bloqueios.</li>
      <li>Revisão dos aprendizados da weekly anterior.</li>
      <li>Registro dos aprendizados da semana, preenchidos ao vivo conforme o time traz.</li>
    </ol>
    <p style="margin:0">O passo 6 é o que mais some quando muda quem conduz. Vale proteger.</p>
  </div></details>

  <h4 class="sub">Onde o trabalho é acompanhado</h4>
  <div class="links">
    <a class="lnk" target="_blank" rel="noopener" href="https://app.clickup.com/90151056537/v/b/4-901510959539-2"><b>Espaço do time no ClickUp</b><span>Acompanhamento de todas as tarefas</span></a>
  </div>
</section>

<section class="step" id="s4">
  <div class="kicker">Time</div>
  <div class="stephead"><div class="num">04</div><h3>Quem faz o quê</h3></div>

  <div class="people">
    <div class="person">
      <div class="role">Rituais e design</div><h4>Camile Freitas</h4>
      <p>Identidade visual, peças, apresentações, propostas comerciais e UI. Passa a ser dona da planning e da weekly, e assume mais escopo de marketing de modo geral.</p>
      <div class="meta">Dona dos rituais do time</div>
    </div>
    <div class="person">
      <div class="role">Conteúdo e marca</div><h4>Victória Farias</h4>
      <p>Redação, revisão, planejamento mensal de conteúdo de todas as marcas, copy de mídia paga e publicação de vídeo. Também responde por estratégia de conteúdo e comunicação digital, além de quaisquer projetos da WIBR.</p>
      <div class="meta">Acesso ao portfólio Meta</div>
    </div>
    <div class="person">
      <div class="role">Mídia paga e receita</div><h4>Andrews Meireles</h4>
      <p>Tráfego, disparo de newsletter e resultados de mídia. Traz os números de receita e mídia paga na weekly.</p>
    </div>
    <div class="person">
      <div class="role">Liderança</div><h4>Roberta Coelho</h4>
      <p>Quinzenal de lideranças e aprovação de pagamentos. Também é o caminho para o WIBR Summit e para a relação com a Approach.</p>
    </div>
  </div>

  <div class="note">
    <div class="t">Movimentação pendente</div>
    <p style="margin:0">A ideia desenhada é que <strong>Babu e Carol</strong> venham para o time de design, com Babu liderando os designers tecnicamente, abaixo da Camile. Isso ainda não foi formalizado, e importa porque a Camile assumiu escopo maior e os rituais ao mesmo tempo. Se o desenho de equipe não vier junto, o escopo cresce sem estrutura.</p>
  </div>

  <div class="links">
    <a class="lnk" target="_blank" rel="noopener" href="https://miro.com/app/board/uXjVH3y9Lj4=/?focusWidget=3458764679251002229"><b>Organograma no Miro</b><span>Atualizado e compartilhado com a Paula</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/spreadsheets/d/1JVgGgletZNltwlPaSQoPtwk6soN94-aZyQ_3Ts9hdtI/edit?gid=686905826#gid=686905826"><b>Time Institucional e Agência</b><span>Time atual, movimentações e salários</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://app.qulture.rocks/#/company/29988/one-page/contracts/2148181"><b>Qulture.Rocks</b><span>PDIs, avaliações e acompanhamento de time</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/spreadsheets/d/1rb-dgiaiuhnZmaa25agRGI1iVKsL1wRWTXtyJxGlh08/edit?gid=353867139#gid=353867139"><b>Custos [2026]</b><span>Custos do time e acompanhamento mês a mês</span></a>
  </div>
</section>

<section class="step" id="s5">
  <div class="kicker">O que está no ar</div>
  <div class="stephead"><div class="num">05</div><h3>Projetos em andamento</h3></div>

  <details>
    <summary>📐 Planejamento de Marketing 2026/2027</summary>
    <div class="acc-body">
      <p>É o documento âncora da área e a primeira leitura que eu recomendo. A gravação da apresentação dá o contexto da discussão, e não só a conclusão.</p>
      <div class="links">
        <a class="lnk" target="_blank" rel="noopener" href="https://drive.google.com/file/d/1647l-gQk0z1HwEdoNRFg353QVm8OJ6FA/view?usp=drive_link"><b>Apresentação</b><span>PPT do planejamento</span></a>
        <a class="lnk" target="_blank" rel="noopener" href="https://drive.google.com/file/d/1vvWoF-a7WyRY7Z0Y5nW72IwLIOLx1wgA/view?usp=drive_link"><b>Gravação</b><span>Contexto da discussão</span></a>
        <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/spreadsheets/d/1Dqs66b0Q5nFWd4BM7aeCR3OVRTM31avWVeaK8rs6fm8/edit?usp=drive_link"><b>Tarefas</b><span>Desdobramento em plano</span></a>
        <a class="lnk" target="_blank" rel="noopener" href="https://drive.google.com/file/d/1ErsOLJoxPyO4SMlnvNcxc9f8UcQwa0RG/view?usp=drive_link"><b>Documento em PDF</b><span>Versão escrita</span></a>
        <a class="lnk" target="_blank" rel="noopener" href="https://drive.google.com/drive/folders/1LpNL2eTpRLNWf_dnk6NzMiYA_KAyyYsL?usp=drive_link"><b>Pasta completa</b><span>Todos os arquivos</span></a>
      </div>
    </div>
  </details>

  <details>
    <summary>🔥 WIBR Summit <span class="chip open" style="margin-left:auto">Urgente</span></summary>
    <div class="acc-body">
      <ul>
        <li>Precisa de andamento o quanto antes.</li>
        <li>Local previsto: Porto Alegre, no Instituto Caldeira.</li>
        <li>Data pensada com a Roberta: novembro, acoplado ao lançamento do portal.</li>
        <li>Ainda não tem responsável definido depois da transição.</li>
      </ul>
      <p style="margin:0"><strong>Minha sugestão:</strong> Victória como dona do projeto. Junto com isso, é importante contratar uma liderança de meio para auxiliá-la, porque ela já acumula muitas atividades.</p>
    </div>
  </details>

  <details>
    <summary>🏆 WIBR Cup</summary>
    <div class="acc-body">
      <p style="margin:0">Projeto em andamento, com liderança de Victória Farias e Paloma. Não exige intervenção imediata da nova gestão, mas precisa entrar no acompanhamento da planning para não sumir do radar.</p>
    </div>
  </details>

  <details>
    <summary>🧠 O Cérebro, projeto em aberto</summary>
    <div class="acc-body">
      <ul>
        <li>Fizeram o rebranding da Spun, e o naming e a identidade visual da Ezor.</li>
        <li>Há outro projeto iniciado, com o <strong>naming já concluído</strong>.</li>
        <li>Sobrou uma identidade visual em aberto, que pode ser utilizada como está.</li>
        <li>Alternativa conversada com a Pip: trocar essa identidade por execução de design gráfico e aplicação, conforme as horas de projeto já contratadas.</li>
      </ul>
      <p style="margin-bottom:6px"><strong>Contato da Pip:</strong></p>
      <div class="copy"><span class="n" id="pip">+55 11 97571-3536</span><button type="button" data-copy="+55 11 97571-3536">copiar</button></div>
    </div>
  </details>
</section>

<section class="step" id="s6">
  <div class="kicker">Externos</div>
  <div class="stephead"><div class="num">06</div><h3>Parceiros e fornecedores</h3></div>
  <div class="scroller"><table class="tbl">
    <thead><tr><th>Parceiro</th><th>Escopo</th><th>Status e como conduzir</th></tr></thead>
    <tbody>
      <tr><td>O Cérebro</td><td>Branding. Fez o rebranding da Spun, e o naming e a identidade visual da Ezor</td><td>Parceria em aberto, com identidade visual e saldo de horas a definir com a Pip.<br><span class="ct"><em>Pip</em>+55 11 97571-3536<button type="button" data-copy="+55 11 97571-3536">copiar</button></span></td></tr>
      <tr><td>Almaz Connect</td><td>Agência de PR do João</td><td>Ativa.<br><span class="ct">+55 11 96465-9010<button type="button" data-copy="+55 11 96465-9010">copiar</button></span><a class="doc" target="_blank" rel="noopener" href="https://painel.autentique.com.br/assinar/128otaayuxm1rqagviqdyttcz">Contrato no Autentique ↗</a></td></tr>
      <tr><td>Approach</td><td>Agência de PR da WIBR</td><td>Contratada como projeto do MIBR. Falar com a Roberta ou com o Rapha</td></tr>
      <tr><td>Freelancer de redação</td><td>Apoio pontual de redação</td><td>Em avaliação de remoção completa.<br><span class="ct"><em>Julia Fontana</em>+55 55 99967-8166<button type="button" data-copy="+55 55 99967-8166">copiar</button></span></td></tr>
      <tr><td>Gracias</td><td>Fornecedora de kits e press kits, no RS</td><td><span class="ct">+55 51 99316-0082<button type="button" data-copy="+55 51 99316-0082">copiar</button></span></td></tr>
      <tr><td>Instituto Caldeira</td><td>Contato local em Porto Alegre, relevante para o Summit</td><td><span class="ct"><em>Pedro</em>+55 51 99426-9677<button type="button" data-copy="+55 51 99426-9677">copiar</button></span></td></tr>
    </tbody>
  </table></div>
</section>

<section class="step" id="s7">
  <div class="kicker">Fora do time</div>
  <div class="stephead"><div class="num">07</div><h3>Stakeholders</h3></div>
  <p>Pessoas de outras áreas com quem Marketing precisa manter relação ativa.</p>
  <div class="scroller"><table class="tbl">
    <thead><tr><th>Pessoa</th><th>Frente</th><th>Como se relacionar</th></tr></thead>
    <tbody>
      <tr><td>Ítalo Mingoni</td><td>Spun for Publishers</td><td>Responsável pela frente. Aprovar sempre com ele</td></tr>
      <tr><td>Marcela Castro</td><td>Spun for Publishers</td><td>Tem muito conhecimento da frente. Trocar, pedir informação e mantê-la informada</td></tr>
      <tr><td>Laura Peres</td><td>Absol</td><td class="dim">Sem observação registrada</td></tr>
      <tr><td>Cynthya</td><td>Comercial</td><td class="dim">Sem observação registrada</td></tr>
      <tr><td>Paloma</td><td>Projetos com parceiros</td><td>Bastante presente nos projetos da WIBR</td></tr>
      <tr><td>Marcus Perez</td><td>Comunicações em parceria</td><td>LOS, MIBR, Rap Club e afins</td></tr>
      <tr><td>Thayná</td><td>Tecnologia</td><td class="dim">Sem observação registrada</td></tr>
      <tr><td>Roberta Coelho</td><td>Liderança</td><td>Aprovação de pagamentos, WIBR Summit e relação com a Approach</td></tr>
    </tbody>
  </table></div>
</section>

<section class="step" id="s8">
  <div class="kicker">Leitura crítica</div>
  <div class="stephead"><div class="num">08</div><h3>Riscos e pontos de atenção</h3></div>
  <p>São dois, e os dois são conhecidos. Prefiro entregar isso escrito a deixar que sejam descobertos por acidente.</p>

  <div class="risks">
    <div class="risk">
      <div class="h"><span class="sev"></span>WIBR Summit sem dono definido</div>
      <div><div class="lab">Consequência</div><div class="v">Inviabilidade da data de novembro, ou execução abaixo do padrão da marca.</div></div>
      <div><div class="lab">Mitigação</div><div class="v">Definir responsável e cronograma nas próximas duas semanas, com a Roberta.</div></div>
      <div class="full"><div class="lab">Minha sugestão</div><div class="v">Victória como dona do projeto. Importante contratar liderança de meio para auxiliá-la, pois ela tem muitas atividades.</div></div>
    </div>
    <div class="risk">
      <div class="h"><span class="sev med"></span>Modelo de planning recém-implantado</div>
      <div><div class="lab">Consequência</div><div class="v">Regressão para a rotina informal durante a troca de liderança, que é exatamente quando rituais novos costumam cair.</div></div>
      <div><div class="lab">Mitigação</div><div class="v">Manter o formato por pelo menos oito semanas antes de qualquer ajuste.</div></div>
    </div>
  </div>
</section>

<section class="step" id="s9">
  <div class="kicker">Onde tudo fica</div>
  <div class="stephead"><div class="num">09</div><h3>Acessos, ferramentas e materiais</h3></div>
  <p>Os acessos <strong>já foram passados para a Victória e a Camile</strong>, e a planilha de Ferramentas está atualizada com quem tem o quê. Ela é a fonte a consultar sempre que faltar alguma permissão.</p>

  <div class="links">
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/spreadsheets/d/17nBBfvPY_ztzPGMH9Bv73fpefsPjkUwPUN-15Qx1QMQ/edit?usp=sharing"><b>Ferramentas e acessos</b><span>Ferramentas do time e quem tem acesso a quê. Atualizada</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/spreadsheets/d/1Q-ilixbgRQRjPDd4LlDqNIo-YhjEwPwPA1GCw3mOKR8/edit?gid=0#gid=0"><b>WIBR :: Senhas</b><span>Acessos da WIBR, que não ficam no doc acima</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://drive.google.com/drive/folders/0AIfBmt7nyHWWUk9PVA"><b>Drive compartilhado</b><span>Organização de documentos, pasta Institucional</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://app.clickup.com/90151056537/v/b/4-901510959539-2"><b>Espaço do time no ClickUp</b><span>Acompanhamento de todas as tarefas</span></a>
  </div>

  <h4 class="sub">Templates do time</h4>
  <div class="links">
    <a class="lnk" target="_blank" rel="noopener" href="https://canva.link/8v6jiffw0phjnzo"><b>Métricas e planejamento mensal</b><span>Canva</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/document/d/1uLAGjg7hvJc7JXO0yPqgimciM43dkfeLz-roICe-wjY/edit"><b>Planejamento de Conteúdo</b><span>Template base</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/document/d/1Os_UIotuzN3NU50DdLCWeaRWTMULaSE7DaTN5IfI6Pw/edit?tab=t.0"><b>Acervo</b><span>Template base</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/document/d/1oO32seE5YbYNJ5LfyhwW3dydJMHJ5ralxk27Ke2CLzM/edit?tab=t.0"><b>Project brief</b><span>01_project_brief_template</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://docs.google.com/document/d/13C9orPPHA6IlEOt-b-ohNsUrfTtyMLzRIIaLIHRoWI4/edit"><b>Conteúdo de LinkedIn</b><span>Template base</span></a>
  </div>

  <h4 class="sub">Ativos de marca</h4>
  <div class="links">
    <a class="lnk" target="_blank" rel="noopener" href="https://maripickersgill.github.io/spun-brandscript/"><b>Brandscript Spun</b><span>Referência de narrativa e mensagem</span></a>
    <a class="lnk" target="_blank" rel="noopener" href="https://www.canva.com/design/DAHE-viPsNs/9PmDfO068nESSxVhPwm4zw/edit"><b>Mídia Kit da Spun</b><span>Material comercial</span></a>
  </div>

  <h4 class="sub">Depoimentos de clientes</h4>
  <p style="font-size:14px;color:var(--mute);margin-bottom:14px">Prova social já validada, disponível para uso comercial e institucional.</p>
  <div class="note">
    <div class="t">NG.Cash</div>
    <p style="font-style:italic;font-size:15px">“A LOS é o parceiro com a melhor taxa de conversão que temos hoje. É um público que realmente consome o que oferecemos, o que faz da Spun um case de referência dentro da nossa operação de performance.”</p>
  </div>
  <div class="note">
    <div class="t">Allu</div>
    <p style="font-style:italic;font-size:15px">“Entre todos os parceiros do universo gamer com quem trabalhamos, a LOS tem o CPA mais baixo que temos no mercado. É um público engajado e que converte de forma consistente.”</p>
  </div>
</section>

<section class="step" id="s10">
  <div class="kicker">Processo</div>
  <div class="stephead"><div class="num">10</div><h3>Fluxo financeiro</h3></div>

  <h4 class="sub">Assinaturas no cartão</h4>
  <p><strong>Qualquer</strong> assinatura feita no cartão da JN vai no Discord da Thay Fernandes, usuário <code>thayanefernandes</code>, com três itens obrigatórios:</p>
  <ul><li>nota fiscal;</li><li>descrição da compra e propósito;</li><li>valor.</li></ul>

  <h4 class="sub">Pagamentos</h4>
  <p>Aprovação com a <strong>Roberta Coelho</strong> e pagamento pelo chat com o financeiro.</p>
  <div class="links">
    <a class="lnk" target="_blank" rel="noopener" href="https://discord.com/channels/940229196662325289/1354618646239908011"><b>Canal do financeiro</b><span>Discord</span></a>
  </div>
</section>

</div>

<footer><div class="wrap">
  <div class="big">Faltou alguma coisa? Me chama no Whats!</div>
  <span class="ct" style="background:#1b1b21;border-color:#2f3038;color:#fff;margin:4px 0 0">+31 6 25493257<button type="button" data-copy="+31 6 25493257">copiar</button></span>
  <div class="fine">Handoff de Marketing · Spun Mídia · Confidencial, uso interno · Mariana Burlamaqui Pickersgill</div>
</div></footer>

<script>
(function(){
  var fbtns=document.querySelectorAll('.filters button');
  fbtns.forEach(function(b){b.addEventListener('click',function(){
    fbtns.forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});
    var f=b.dataset.f;
    document.querySelectorAll('#ledger .row').forEach(function(r){
      r.classList.toggle('hide', f!=='all' && r.dataset.s!==f);
    });
  })});

  document.querySelectorAll('[data-copy]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var v=btn.dataset.copy, done=function(){
        var old=btn.textContent; btn.textContent='copiado';
        setTimeout(function(){btn.textContent=old},1600);
      };
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(v).then(done).catch(function(){fallback(v,done)});
      } else { fallback(v,done); }
    });
  });
  function fallback(v,done){
    var t=document.createElement('textarea');
    t.value=v; t.setAttribute('readonly','');
    t.style.position='absolute'; t.style.left='-9999px';
    document.body.appendChild(t); t.select();
    try{document.execCommand('copy'); done();}catch(e){}
    document.body.removeChild(t);
  }

  var obs=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;
      document.querySelectorAll('.subnav a').forEach(function(a){
        a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id);
      });
    });
  },{rootMargin:'-130px 0px -70% 0px'});
  document.querySelectorAll('section.step').forEach(function(s){obs.observe(s)});
})();
</script>
</body>
</html>
