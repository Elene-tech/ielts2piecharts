/* Спільне ядро тренажерів: рендер графіків, вправи, прогрес, збереження відповідей, авто-висота iframe.
   Урок описується в data/lesson-XX.js як window.LESSON = {...}. Код тут чіпати не потрібно. */
(function () {
  'use strict';
  var L = window.LESSON, G = window.GRAPHS;
  var KEY = 'ielts::' + L.id;
  var S = { done: {}, vals: {} };
  try { var raw = localStorage.getItem(KEY); if (raw) S = JSON.parse(raw); } catch (e) {}
  S.done = S.done || {}; S.vals = S.vals || {};
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  var INTER = ['gap', 'choose', 'pick', 'rewrite', 'write', 'build', 'fullwrite'];
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); };
  var norm = function (s) { return String(s).toLowerCase().replace(/[.,!?;:"“”]/g, '').replace(/\s+/g, ' ').trim(); };
  var words = function (s) { s = s.trim(); return s ? s.split(/\s+/).length : 0; };
  function shuffle(a) { var b = a.slice(); for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; } return b; }
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- id для блоків ---------- */
  (L.intro || []).forEach(function (b, i) { b.id = 'i' + i; });
  L.rounds.forEach(function (r, ri) { r.blocks.forEach(function (b, bi) { b.id = 'r' + ri + 'b' + bi; b._r = ri; }); });
  (L.outro || []).forEach(function (b, i) { b.id = 'o' + i; });
  var ALL = [];
  L.rounds.forEach(function (r) { r.blocks.forEach(function (b) { if (INTER.indexOf(b.type) >= 0) ALL.push(b); }); });
  var BYID = {};
  (L.intro || []).concat(ALL, L.outro || []).forEach(function (b) { BYID[b.id] = b; });


  /* ---------- кругові діаграми (g.pies) ---------- */
  function pieSVG(g) {
    var W = 640, n = g.pies.length, R = n === 2 ? 100 : 72, CY = 190, PI = Math.PI;
    var s = '';
    s += '<text x="320" y="22" font-size="14" font-weight="600" text-anchor="middle" fill="#22271E" font-family="Georgia,serif">' + esc(g.svgTitle || g.title) + '</text>';
    g.pies.forEach(function (p, i) {
      var cx = n === 3 ? [105, 320, 515][i] : W * (i + 0.5) / n, tot = p.slices.reduce(function (a, b) { return a + b.value; }, 0), a0 = -PI / 2;
      s += '<text x="' + cx + '" y="' + (CY - R - 28) + '" font-size="14" font-weight="700" text-anchor="middle" fill="#22271E">' + esc(p.label) + '</text>';
      p.slices.forEach(function (sl) {
        var a1 = a0 + 2 * PI * sl.value / tot, mid = (a0 + a1) / 2;
        var x0 = cx + R * Math.cos(a0), y0 = CY + R * Math.sin(a0), x1 = cx + R * Math.cos(a1), y1 = CY + R * Math.sin(a1);
        s += '<path d="M' + cx + ',' + CY + ' L' + x0.toFixed(1) + ',' + y0.toFixed(1) + ' A' + R + ',' + R + ' 0 ' + ((a1 - a0) > PI ? 1 : 0) + ' 1 ' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' Z" fill="' + sl.color + '" stroke="#fff" stroke-width="2"/>';
        if (sl.value >= (n === 3 ? 12 : 8)) {
          s += '<text x="' + (cx + 0.64 * R * Math.cos(mid)).toFixed(1) + '" y="' + (CY + 0.64 * R * Math.sin(mid) + 4.5).toFixed(1) + '" font-size="13" font-weight="700" text-anchor="middle" fill="#fff">' + sl.value + '%</text>';
        } else {
          var ox = cx + (R + 4) * Math.cos(mid), oy = CY + (R + 4) * Math.sin(mid), tx = cx + (R + 17) * Math.cos(mid), ty = CY + (R + 17) * Math.sin(mid);
          s += '<line x1="' + ox.toFixed(1) + '" y1="' + oy.toFixed(1) + '" x2="' + tx.toFixed(1) + '" y2="' + ty.toFixed(1) + '" stroke="#8A8F80"/><text x="' + (tx + (Math.cos(mid) >= 0 ? 3 : -3)).toFixed(1) + '" y="' + (ty + 4).toFixed(1) + '" font-size="12" font-weight="600" text-anchor="' + (Math.cos(mid) >= 0 ? 'start' : 'end') + '" fill="#4A4F44">' + sl.value + '%</text>';
        }
        a0 = a1;
      });
    });
    var leg = g.pies[0].slices, lw = leg.map(function (sl) { return 20 + sl.name.length * 6.3 + 16; }), rows = [[]], cur = 0;
    leg.forEach(function (sl, k) { if (cur + lw[k] > 600 && rows[rows.length - 1].length) { rows.push([]); cur = 0; } rows[rows.length - 1].push(k); cur += lw[k]; });
    var ly = CY + R + 52;
    rows.forEach(function (row, ri) {
      var tw = row.reduce(function (a, k) { return a + lw[k]; }, 0), lx = 320 - tw / 2;
      row.forEach(function (k) {
        s += '<rect x="' + lx + '" y="' + (ly + ri * 24 - 10) + '" width="14" height="14" rx="3" fill="' + leg[k].color + '"/><text x="' + (lx + 20) + '" y="' + (ly + ri * 24 + 2) + '" font-size="12.5" fill="#4A4F44">' + esc(leg[k].name) + '</text>';
        lx += lw[k];
      });
    });
    var H = ly + rows.length * 24 + 8;
    return '<svg class="task-img" viewBox="0 0 640 ' + H + '" role="img" aria-label="' + esc(g.title) + '">' + s + '</svg>';
  }
  function pieTable(g) {
    var t = '<table class="t dt"><tr><th></th>' + g.pies.map(function (p) { return '<th>' + esc(p.label) + '</th>'; }).join('') + '</tr>';
    g.pies[0].slices.forEach(function (sl, k) { t += '<tr><th>' + esc(sl.name) + '</th>' + g.pies.map(function (p) { return '<td>' + p.slices[k].value + '%</td>'; }).join('') + '</tr>'; });
    return t + '</table>';
  }

  /* ---------- графік ---------- */
  function chartSVG(g) {
    if (g.pies) return pieSVG(g);
    var X0 = 70, X1 = 610, Y0 = 300, Y1 = 45, n = g.x.length;
    var xs = function (i) { return X0 + (X1 - X0) * i / (n - 1); };
    var ys = function (v) { return Y0 - (Y0 - Y1) * v / g.yMax; };
    var s = '<svg class="task-img" viewBox="0 0 640 365" role="img" aria-label="' + esc(g.title) + '">';
    s += '<text x="320" y="22" font-size="14" font-weight="600" text-anchor="middle" fill="#22271E" font-family="Georgia,serif">' + esc(g.svgTitle || g.title) + '</text>';
    for (var v = 0; v <= g.yMax; v += g.step) {
      s += '<line x1="' + X0 + '" y1="' + ys(v) + '" x2="' + X1 + '" y2="' + ys(v) + '" stroke="#E9E6D8"/><text x="62" y="' + (ys(v) + 4) + '" font-size="11" text-anchor="end" fill="#8A8F80">' + v + '</text>';
    }
    s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#B9B6A6" stroke-width="1.5"/><line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="#B9B6A6" stroke-width="1.5"/>';
    g.x.forEach(function (lab, i) { s += '<text x="' + xs(i).toFixed(1) + '" y="318" font-size="11" text-anchor="middle" fill="#8A8F80">' + lab + '</text>'; });
    s += '<text x="20" y="172" font-size="10.5" text-anchor="middle" fill="#8A8F80" transform="rotate(-90 20 172)">' + esc(g.yLabel) + '</text>';
    if (g.projFrom != null) {
      var px = xs(g.projFrom).toFixed(1);
      s += '<line x1="' + px + '" y1="' + Y1 + '" x2="' + px + '" y2="' + Y0 + '" stroke="#8A8F80" stroke-dasharray="2,3"/><text x="' + (+px + 6) + '" y="' + (Y1 + 14) + '" font-size="11" font-style="italic" fill="#6E7468">projection →</text>';
    }
    g.series.forEach(function (sr) {
      var pf = g.projFrom != null ? g.projFrom : n - 1;
      var pts = function (a, b) { var o = []; for (var i = a; i <= b; i++) o.push((i === a ? 'M' : 'L') + xs(i).toFixed(1) + ',' + ys(sr.values[i]).toFixed(1)); return o.join(' '); };
      s += '<path d="' + pts(0, pf) + '" fill="none" stroke="' + sr.color + '" stroke-width="2.6" stroke-linejoin="round"/>';
      if (pf < n - 1) s += '<path d="' + pts(pf, n - 1) + '" fill="none" stroke="' + sr.color + '" stroke-width="2.6" stroke-linejoin="round" stroke-dasharray="7,5"/>';
      sr.values.forEach(function (val, i) { s += '<circle cx="' + xs(i).toFixed(1) + '" cy="' + ys(val).toFixed(1) + '" r="3" fill="' + sr.color + '"/>'; });
    });
    var lw = g.series.map(function (sr) { return 30 + sr.name.length * 7 + 14; });
    var total = lw.reduce(function (a, b) { return a + b; }, 0), lx = 320 - total / 2;
    g.series.forEach(function (sr, k) {
      s += '<line x1="' + lx + '" y1="345" x2="' + (lx + 18) + '" y2="345" stroke="' + sr.color + '" stroke-width="3"/><text x="' + (lx + 24) + '" y="349" font-size="12.5" fill="#4A4F44">' + esc(sr.name) + '</text>';
      lx += lw[k];
    });
    return s + '</svg>';
  }
  function dataTable(g) {
    if (g.pies) return pieTable(g);
    var t = '<table class="t dt"><tr><th></th>' + g.x.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr>';
    g.series.forEach(function (sr) { t += '<tr><th>' + esc(sr.name) + '</th>' + sr.values.map(function (v) { return '<td>' + v + '</td>'; }).join('') + '</tr>'; });
    return t + '</table>';
  }
  function miniGraph(gid, open) { var g = G[gid]; return '<details class="gm"' + (open ? ' open' : '') + '><summary>' + (g.pies ? '🥧 Показати діаграми' : '📈 Показати графік') + '</summary>' + chartSVG(g) + '</details>'; }

  /* ---------- рендер блоків ---------- */
  function card(b, inner) {
    var gm = (b._r != null && b.graph !== false && INTER.indexOf(b.type) >= 0) ? miniGraph(L.rounds[b._r].graph, b.type === 'fullwrite') : '';
    return '<div class="card' + (S.done[b.id] ? ' is-done' : '') + '" id="' + b.id + '">' +
      (b.tag ? '<span class="step-tag tag-' + (b.tagc || 'green') + '">' + b.tag + '</span>' : '') +
      (b.title ? '<h2>' + b.title + '</h2>' : '') + (b.intro ? '<p>' + b.intro + '</p>' : '') + gm + inner + '</div>';
  }
  var R = {};
  R.text = function (b) { return card(b, b.html || ''); };
  R.rule = function (b) { return '<div class="rule">' + (b.title ? '<h3>' + b.title + '</h3>' : '') + b.html + '</div>'; };
  R.example = function (b) {
    var sent = b.segments.map(function (sg) { return typeof sg === 'string' ? sg : '<span class="seg s-' + sg[0] + '">' + sg[1] + '</span>'; }).join(' ').replace(/ ([.,])/g, '$1');
    var leg = (b.legend || []).map(function (l) { return '<div><span class="dot" style="background:' + ({type:'var(--green)',verb:'var(--orange)',what:'var(--blue)',when:'var(--purple)',link:'#9A9F90'})[l[0]] + '"></span>' + l[1] + '</div>'; }).join('');
    return card(b, '<p class="big-sent">' + sent + '</p><div class="legend">' + leg + '</div>' + (b.note ? '<p class="small" style="margin-top:10px">' + b.note + '</p>' : ''));
  };
  R.compare = function (b) {
    return card(b, '<table class="t"><tr><th style="width:50%">❌ Так не треба</th><th>✅ Так краще</th></tr>' + b.rows.map(function (r) {
      return '<tr><td class="x">' + r[0] + (r[1] ? '<br><span class="small">' + r[1] + '</span>' : '') + '</td><td class="v">' + r[2] + '</td></tr>';
    }).join('') + '</table>');
  };
  R.gap = function (b) {
    var h = (b.bank ? '<div class="bank">' + b.bank.map(function (w) { return '<span>' + w + '</span>'; }).join('') + '</div>' : '');
    h += b.items.map(function (it, i) {
      return '<div class="gap-row">' + (i + 1) + '. ' + it.pre + '<input type="text" data-gap="' + b.id + ':' + i + '" value="' + esc(S.vals[b.id + ':' + i] || '') + '" autocomplete="off" autocapitalize="off" spellcheck="false">' + it.post + '<span class="gnote" id="gn-' + b.id + '-' + i + '"></span></div>';
    }).join('');
    h += '<button class="btn btn-primary" data-act="gap-check" data-b="' + b.id + '">Перевірити</button><button class="btn btn-solution" data-act="gap-show" data-b="' + b.id + '">Показати відповіді</button><div class="fb" id="fb-' + b.id + '"></div>';
    return card(b, h);
  };
  var ORD = {};
  R.choose = function (b) {
    var h = b.qs.map(function (q, qi) {
      var ord = ORD[b.id + ':' + qi] = shuffle(q.opts.map(function (o, i) { return i; }));
      return '<div style="margin-bottom:20px"><p><b>' + (qi + 1) + '. ' + q.q + '</b></p>' + ord.map(function (oi, k) {
        return '<div class="opt" data-act="choose" data-b="' + b.id + '" data-q="' + qi + '" data-o="' + oi + '" id="co-' + b.id + '-' + qi + '-' + oi + '"><span class="l">' + 'ABCD'[k] + '</span><div>' + q.opts[oi][0] + '<div class="why">' + (q.opts[oi][1] ? '✓ ' : '✗ ') + q.opts[oi][2] + '</div></div></div>';
      }).join('') + '</div>';
    }).join('');
    return card(b, '<p class="small">Клікни на варіант: побачиш, чому він правильний або ні.</p>' + h + '<div class="fb" id="fb-' + b.id + '"></div>');
  };
  R.pick = function (b) {
    var h = '<p class="small">' + (b.prompt || ('Познач <b>' + b.need + '</b> твердження, які мають увійти в Overview, і натисни «Перевірити».')) + '</p>' + shuffle(b.opts.map(function (o, i) { return i; })).map(function (oi) {
      return '<div class="opt" data-act="pick" data-b="' + b.id + '" data-o="' + oi + '" id="po-' + b.id + '-' + oi + '"><div>' + b.opts[oi][0] + '<div class="why">' + (b.opts[oi][1] ? '✓ ' : '✗ ') + b.opts[oi][2] + '</div></div></div>';
    }).join('');
    return card(b, h + '<button class="btn btn-primary" data-act="pick-check" data-b="' + b.id + '">Перевірити</button><div class="fb" id="fb-' + b.id + '"></div>');
  };
  function textBlock(b, kind) {
    var chk = b.check ? '<div class="chk" style="margin-top:12px"><p><b>Самоперевірка:</b></p>' + b.check.map(function (c) { return '<label><input type="checkbox"> ' + c + '</label>'; }).join('') + '</div>' : '';
    var models = '<div class="model" id="m-' + b.id + '">' + b.models.map(function (m) { return '<p><span class="lab">' + m[0] + '</span><br>' + m[1] + '</p>'; }).join('') + (b.after ? '<p class="small">' + b.after + '</p>' : '') + chk + '</div>';
    var given = b.given ? '<p class="big-sent" style="font-size:17px;line-height:1.7"><span class="seg" style="background:#F1F1EA">' + b.given + '</span></p>' : '';
    var hint = b.hint ? '<details class="d" style="margin:8px 0"><summary>Підказка</summary><p class="small" style="margin-top:6px">' + b.hint + '</p></details>' : '';
    return card(b, given + (b.task ? '<p style="margin:8px 0">' + b.task + '</p>' : '') + hint +
      '<textarea data-ta="' + b.id + '" rows="' + (b.rows || 3) + '" placeholder="' + esc(b.ph || 'Напиши свій варіант тут…') + '">' + esc(S.vals[b.id] || '') + '</textarea><div class="wc" id="wc-' + b.id + '">0 слів</div>' +
      '<button class="btn btn-primary" data-act="compare" data-b="' + b.id + '">Порівняти з моделями</button><div class="fb" id="fb-' + b.id + '"></div>' + models);
  }
  R.rewrite = function (b) { return textBlock(b, 'rewrite'); };
  R.write = function (b) { return textBlock(b, 'write'); };

  function wordChips(ws) { return '<div class="bank">' + ws.map(function (w) { return '<span>' + w[0] + (w[1] ? ' <small>— ' + w[1] + '</small>' : '') + '</span>'; }).join('') + '</div>'; }
  R.logic = function (b) {
    var h = b.steps.map(function (st, i) {
      return '<div class="logic-step"><div class="ln">' + (i + 1) + '</div><div><b>' + st.title + '</b>' + (st.ua ? '<p>' + st.ua + '</p>' : '') + (st.frame ? '<p class="frame">' + st.frame + '</p>' : '') + '</div></div>';
    }).join('');
    var inner = (b.lead ? '<p>' + b.lead + '</p>' : '') + h + (b.words ? '<p class="small" style="margin-top:12px"><b>Слова, які можуть знадобитись:</b></p>' + wordChips(b.words) : '');
    if (b.collapsed) inner = '<details class="d"><summary>Показати план абзацу</summary><div style="margin-top:10px">' + inner + '</div></details>';
    return card(b, inner);
  };
  var TM = {};
  R.fullwrite = function (b) {
    var parts = b.parts.map(function (p) {
      var hint = (b.hints !== false && (p.ua || p.starter || p.words)) ? '<details class="d" style="margin:6px 0"><summary>💡 Підказка</summary><p class="small" style="margin-top:6px">' + (p.ua ? p.ua + '<br>' : '') + (p.starter ? 'Початок: <i>' + p.starter + '</i><br>' : '') + (p.words ? 'Слова: ' + p.words : '') + '</p></details>' : '';
      return '<div class="fw-part"><h3>' + p.label + '</h3>' + hint + '<textarea data-fw="' + b.id + ':' + p.key + '"' + (p.nocount ? ' data-nc="1"' : '') + ' rows="' + (p.rows || 3) + '" placeholder="' + esc(p.ph || '') + '">' + esc(S.vals[b.id + ':' + p.key] || '') + '</textarea><div class="wc" id="fwc-' + b.id + '-' + p.key + '">0 слів</div></div>';
    }).join('');
    var timer = '<div class="timer"><span class="tm" id="tm-' + b.id + '">' + (b.minutes || 20) + ':00</span><button class="btn btn-ghost" data-act="t-start" data-b="' + b.id + '">▶ Старт</button><button class="btn btn-ghost" data-act="t-pause" data-b="' + b.id + '">⏸ Пауза</button><button class="btn btn-ghost" data-act="t-reset" data-b="' + b.id + '">↺ Скинути</button></div>';
    var chk = b.check ? '<div class="chk" style="margin-top:14px"><p><b>Самоперевірка:</b></p>' + b.check.map(function (c) { return '<label><input type="checkbox"> ' + c + '</label>'; }).join('') + '</div>' : '';
    var models = '<div class="model" id="m-' + b.id + '">' + b.models.map(function (m) { return '<p><span class="lab">' + m[0] + ' · ' + words(m[1].replace(/<[^>]+>/g, '')) + ' слів</span><br>' + m[1] + '</p>'; }).join('') + (b.after ? '<p class="small">' + b.after + '</p>' : '') + '</div>';
    return card(b, '<div class="prompt"><i>' + b.prompt + '</i></div>' + timer + parts + '<div class="fw-total" id="ftot-' + b.id + '">Разом: 0 слів</div>' + chk +
      '<button class="btn btn-primary" data-act="fw-model" data-b="' + b.id + '">Порівняти з моделлю</button><div class="fb" id="fb-' + b.id + '"></div>' + models);
  };
  var BS = {};
  R.build = function (b) {
    var h = b.items.map(function (s0, i) {
      var s = Array.isArray(s0) ? s0[0] : s0;
      var w = s.replace(/\.$/, '').split(' '), idx = w.map(function (x, k) { return k;}), ord = shuffle(idx);
      if (ord.join() === idx.join()) ord.reverse();
      BS[b.id + ':' + i] = { words: w, order: ord, out: [], end: /\.$/.test(s) ? '.' : '' };
      return '<div style="margin-bottom:22px"><p><b>' + (i + 1) + '.</b></p><div class="build-out" id="bo-' + b.id + '-' + i + '"></div><div class="build-pool" id="bp-' + b.id + '-' + i + '"></div>' +
        '<button class="btn btn-primary" data-act="b-check" data-b="' + b.id + '" data-i="' + i + '">Перевірити</button><button class="btn btn-ghost" data-act="b-reset" data-b="' + b.id + '" data-i="' + i + '">Спочатку</button><div class="fb" id="bf-' + b.id + '-' + i + '"></div></div>';
    }).join('');
    return card(b, '<p class="small">Клікай на слова по порядку. Клік на слово у рамці — прибрати його.</p>' + h);
  };
  function renderBuild(b, i) {
    var st = BS[b.id + ':' + i], k = b.id + '-' + i;
    $('bo-' + k).innerHTML = st.out.map(function (w) { return '<button class="chip" data-act="b-del" data-b="' + b.id + '" data-i="' + i + '" data-w="' + w + '">' + esc(st.words[w]) + '</button>'; }).join('');
    $('bp-' + k).innerHTML = st.order.map(function (w) { return '<button class="chip' + (st.out.indexOf(w) >= 0 ? ' used' : '') + '" data-act="b-add" data-b="' + b.id + '" data-i="' + i + '" data-w="' + w + '">' + esc(st.words[w]) + '</button>'; }).join('');
  }

  /* ---------- прогрес ---------- */
  function updateProgress() {
    var total = ALL.length, done = ALL.filter(function (b) { return S.done[b.id]; }).length;
    $('pdone').textContent = done; $('ptotal').textContent = total;
    $('pbar').style.width = (total ? 100 * done / total : 0) + '%';
    $('pmsg').textContent = done === total && total ? 'Усе виконано 🎉' : '';
    L.rounds.forEach(function (r, ri) {
      var bl = r.blocks.filter(function (b) { return INTER.indexOf(b.type) >= 0; });
      var ok = bl.length && bl.every(function (b) { return S.done[b.id]; });
      $('tab' + ri).classList.toggle('ok', !!ok);
    });
  }
  function markDone(id) { S.done[id] = 1; save(); $(id).classList.add('is-done'); updateProgress(); }

  /* ---------- збірка сторінки ---------- */
  var root = $('app');
  var html = '<div class="wrap"><h1>' + L.title + '</h1><p class="sub">' + (L.subtitle || '') + '</p>' +
    '<div class="progress"><div class="row"><div class="txt"><span>Прогрес: <b id="pdone">0</b> з <b id="ptotal">0</b> вправ</span><span id="pmsg"></span></div><div class="tbtns">' + (window.renderVocab ? '<button class="tb" data-act="vocab">📚 Словник</button>' : '') + '<button class="tb" data-act="panel">📝 Мої відповіді</button></div></div><div class="bar"><i id="pbar"></i></div></div>';
  (L.intro || []).forEach(function (b) { html += R[b.type](b); });
  html += '<div class="tabs">' + L.rounds.map(function (r, i) { return '<button class="tab' + (i === 0 ? ' on' : '') + '" id="tab' + i + '" data-act="round" data-r="' + i + '">' + r.label + '<small>' + r.sub + '</small></button>'; }).join('') + '</div>';
  L.rounds.forEach(function (r, ri) {
    var g = G[r.graph];
    html += '<div class="round' + (ri === 0 ? ' on' : '') + '" id="round' + ri + '"><div class="round-head"><h2>' + r.label + ' · ' + g.name + '</h2><p>' + (r.lead || '') + '</p>' + (r.words ? '<p class="small" style="margin-top:8px"><b>💡 Слова для цього раунду</b> (повний словник — кнопка 📚 вгорі):</p>' + wordChips(r.words) : '') + '</div>' +
      '<div class="card"><span class="step-tag tag-blue">' + (g.pies ? 'Діаграми' : 'Графік') + '</span><h3 style="margin-top:0">' + esc(g.title) + '</h3>' + chartSVG(g) + '<details class="d"><summary>Показати дані у вигляді таблиці</summary><div style="overflow-x:auto;margin-top:8px">' + dataTable(g) + '</div></details></div>';
    r.blocks.forEach(function (b) { html += R[b.type](b); });
    html += '</div>';
  });
  (L.outro || []).forEach(function (b) { html += R[b.type](b); });
  html += '</div>' +
    '<div id="ans-panel"><div id="ans-box"><h4>Мої відповіді</h4><div class="note">Відповіді зберігаються в цьому браузері. Щоб не втратити — скачай файл.</div>' +
    '<button class="ans-btn b-txt" data-act="dl">⬇ Скачати (.txt)</button><button class="ans-btn b-copy" data-act="copy">⧉ Скопіювати</button><button class="ans-btn b-pdf" data-act="pdf">🖨 Зберегти як PDF</button><button class="ans-btn b-clear" data-act="clear">Очистити все</button></div></div>' +
    (window.renderVocab ? '<div id="vocab-drawer"><div class="vd-head"><b>📚 Словник</b><a href="vocabulary.html?focus=' + (L.vocab || []).join(',') + '" target="_blank" rel="noopener">Відкрити в новій вкладці ↗</a><button class="tb" data-act="vocab">✕</button></div><div id="vocab-body"></div></div>' : '') +
    '<div id="flash"></div>';
  root.innerHTML = html;
  if (window.renderVocab) window.renderVocab($('vocab-body'), { focus: L.vocab || [] });
  document.querySelectorAll('textarea[data-fw]').forEach(function (t) { fwCount(t); });
  ALL.forEach(function (b) { if (b.type === 'build') b.items.forEach(function (_, i) { renderBuild(b, i); }); });
  document.querySelectorAll('textarea[data-ta]').forEach(function (t) { $('wc-' + t.dataset.ta).textContent = words(t.value) + ' слів'; });
  updateProgress();

  /* ---------- поведінка ---------- */
  var CH = {}, PK = {};
  function gapCheck(b) {
    var n = 0, filled = 0;
    b.items.forEach(function (it, i) {
      var inp = document.querySelector('[data-gap="' + b.id + ':' + i + '"]'), v = norm(inp.value), note = $('gn-' + b.id + '-' + i);
      if (!v) { inp.className = ''; note.innerHTML = ''; return; }
      filled++;
      if (it.ok.map(norm).indexOf(v) >= 0) { inp.className = 'ok'; note.innerHTML = '<span class="v">✓</span> <span class="small">' + (it.why || '') + '</span>'; n++; }
      else { inp.className = 'bad'; note.innerHTML = '<span class="x">✗ спробуй ще раз</span>' + (it.hint ? ' <span class="small">' + it.hint + '</span>' : ''); }
    });
    var fb = $('fb-' + b.id);
    if (n === b.items.length) { fb.className = 'fb good'; fb.textContent = 'Чудово! ' + n + ' з ' + n + '.'; markDone(b.id); }
    else { fb.className = 'fb bad'; fb.textContent = 'Правильно: ' + n + ' з ' + b.items.length + (filled < b.items.length ? ' (заповни всі пропуски)' : '') + '.'; }
  }
  function gapShow(b) {
    b.items.forEach(function (it, i) { var inp = document.querySelector('[data-gap="' + b.id + ':' + i + '"]'); inp.value = it.ok[0]; inp.className = 'ok'; $('gn-' + b.id + '-' + i).innerHTML = '<span class="small">' + (it.why || '') + '</span>'; S.vals[b.id + ':' + i] = it.ok[0]; });
    save(); var fb = $('fb-' + b.id); fb.className = 'fb'; fb.textContent = 'Перечитай пояснення і спробуй пояснити, чому саме так. Вправа не зарахована, поки ти не впишеш самостійно.';
  }
  function chooseClick(el) {
    var b = BYID[el.dataset.b], qi = +el.dataset.q, oi = +el.dataset.o, q = b.qs[qi];
    CH[b.id] = CH[b.id] || {};
    if (CH[b.id][qi]) return;
    if (q.opts[oi][1]) {
      el.classList.add('ok'); CH[b.id][qi] = true;
      q.opts.forEach(function (_, k) { $('co-' + b.id + '-' + qi + '-' + k).classList.add('locked'); });
      var all = b.qs.every(function (_, k) { return CH[b.id][k]; });
      if (all) { var fb = $('fb-' + b.id); fb.className = 'fb good'; fb.textContent = 'Усі питання пройдено!'; markDone(b.id); }
    } else { el.classList.add('bad'); }
  }
  function pickCheck(b) {
    var sel = [], bad = 0, good = 0;
    b.opts.forEach(function (o, i) { var el = $('po-' + b.id + '-' + i); if (el.classList.contains('sel') || el.classList.contains('ok') || el.classList.contains('bad')) sel.push(i); });
    b.opts.forEach(function (o, i) {
      var el = $('po-' + b.id + '-' + i), chosen = sel.indexOf(i) >= 0;
      el.classList.remove('sel', 'ok', 'bad');
      if (chosen) { el.classList.add(o[1] ? 'ok' : 'bad'); if (o[1]) good++; else bad++; el.dataset.chk = '1'; }
    });
    var fb = $('fb-' + b.id);
    if (good === b.need && bad === 0) { fb.className = 'fb good'; fb.textContent = b.need === 2 ? 'Правильно! Це і є дві історії Overview.' : 'Правильно! Саме ці пункти й треба взяти в абзац.'; markDone(b.id); b.opts.forEach(function (o, i) { var el = $('po-' + b.id + '-' + i); el.classList.add('locked'); }); }
    else { fb.className = 'fb bad'; fb.textContent = 'Правильних: ' + good + ' з ' + b.need + (bad ? ', зайвих: ' + bad : '') + '. Прочитай пояснення, зніми зайве і спробуй ще раз.'; }
  }
  function compare(b) {
    var ta = document.querySelector('[data-ta="' + b.id + '"]'), n = words(ta.value), min = b.min || (b.type === 'write' ? 12 : 6), fb = $('fb-' + b.id);
    if (n < min) { fb.className = 'fb bad'; fb.textContent = 'Спершу напиши свій варіант (хоча б ' + min + ' слів), тоді порівнюй з моделями.'; return; }
    fb.textContent = ''; $('m-' + b.id).style.display = 'block'; markDone(b.id);
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]'); if (!el) return;
    var act = el.dataset.act, b = el.dataset.b ? BYID[el.dataset.b] : null;
    switch (act) {
      case 'round': var r = +el.dataset.r; L.rounds.forEach(function (_, i) { $('round' + i).classList.toggle('on', i === r); $('tab' + i).classList.toggle('on', i === r); }); window.scrollTo(0, 0); notify(); break;
      case 'gap-check': gapCheck(b); break;
      case 'gap-show': gapShow(b); break;
      case 'choose': chooseClick(el); break;
      case 'pick': if (!el.classList.contains('locked')) { if (el.classList.contains('ok') || el.classList.contains('bad')) el.classList.remove('ok', 'bad'); else el.classList.toggle('sel'); } break;
      case 'pick-check': pickCheck(b); break;
      case 'compare': compare(b); break;
      case 'b-add': var st = BS[b.id + ':' + el.dataset.i]; st.out.push(+el.dataset.w); $('bo-' + b.id + '-' + el.dataset.i).className = 'build-out'; $('bf-' + b.id + '-' + el.dataset.i).textContent = ''; renderBuild(b, +el.dataset.i); break;
      case 'b-del': var st2 = BS[b.id + ':' + el.dataset.i]; st2.out = st2.out.filter(function (x) { return x !== +el.dataset.w; }); $('bo-' + b.id + '-' + el.dataset.i).className = 'build-out'; renderBuild(b, +el.dataset.i); break;
      case 'b-reset': BS[b.id + ':' + el.dataset.i].out = []; $('bo-' + b.id + '-' + el.dataset.i).className = 'build-out'; $('bf-' + b.id + '-' + el.dataset.i).textContent = ''; renderBuild(b, +el.dataset.i); break;
      case 'b-check': buildCheck(b, +el.dataset.i); break;
      case 'b-accept': var st3 = BS[b.id + ':' + el.dataset.i]; buildOk(b, +el.dataset.i, st3.out.map(function (k) { return st3.words[k]; }).join(' ') + st3.end); break;
      case 'vocab': $('vocab-drawer').classList.toggle('open'); break;
      case 't-start': tStart(b); break;
      case 't-pause': tPause(b); break;
      case 't-reset': tReset(b); break;
      case 'fw-model': fwModel(b); break;
      case 'panel': var box = $('ans-box'); box.style.display = box.style.display === 'block' ? 'none' : 'block'; break;
      case 'dl': download(); break;
      case 'copy': copyAns(); break;
      case 'pdf': printAns(); break;
      case 'clear': if (confirm('Очистити всі збережені відповіді та прогрес цього уроку?')) { S = { done: {}, vals: {} }; save(); location.reload(); } break;
    }
  });
  function buildOk(b, i, got) {
    var st = BS[b.id + ':' + i];
    $('bo-' + b.id + '-' + i).className = 'build-out ok'; var fb = $('bf-' + b.id + '-' + i); fb.className = 'fb good'; fb.textContent = '✓ Правильно!';
    S.vals[b.id + ':' + i] = got; save(); st.ok = true;
    if (b.items.every(function (_, k) { return BS[b.id + ':' + k].ok; })) markDone(b.id);
  }
  function buildCheck(b, i) {
    var st = BS[b.id + ':' + i], fb = $('bf-' + b.id + '-' + i), bo = $('bo-' + b.id + '-' + i);
    if (st.out.length < st.words.length) { fb.className = 'fb bad'; fb.textContent = 'Використай усі слова.'; return; }
    var got = st.out.map(function (k) { return st.words[k]; }).join(' ') + st.end;
    var it = b.items[i], variants = Array.isArray(it) ? it : [it];
    if (variants.indexOf(got) >= 0) { buildOk(b, i, got); }
    else {
      bo.className = 'build-out bad'; fb.className = 'fb bad';
      fb.innerHTML = 'Це не збігається з нашими моделями. Але в англійській часто є кілька природних порядків слів: якщо твоє речення звучить правильно, можеш його зарахувати.<br><span class="small">Наша модель: <i>' + esc(variants[0]) + '</i></span><br>' +
        '<button class="btn btn-ghost" data-act="b-accept" data-b="' + b.id + '" data-i="' + i + '">Мій варіант теж правильний</button>';
    }
  }
  function fwCount(t) {
    var id = t.dataset.fw, bid = id.split(':')[0], key = id.split(':')[1];
    $('fwc-' + bid + '-' + key).textContent = words(t.value) + ' слів';
    var total = fwTotal(bid);
    var el = $('ftot-' + bid), bl = BYID[bid], min = bl.minWords || 150;
    el.textContent = 'Разом: ' + total + ' слів' + (total >= min ? ' ✓' : ' (мінімум ' + min + (bl.target ? ', ціль ' + bl.target : '') + ')');
    el.className = 'fw-total' + (total >= min ? ' ok' : '');
    return total;
  }
  function fwTotal(bid) { var total = 0; document.querySelectorAll('textarea[data-fw^="' + bid + ':"]').forEach(function (x) { if (!x.dataset.nc) total += words(x.value); }); return total; }
  function fwModel(b) {
    var fb = $('fb-' + b.id), need = b.showAfter || 100;
    if (fwTotal(b.id) < need) { fb.className = 'fb bad'; fb.textContent = 'Спершу напиши відповідь (хоча б ' + need + ' слів), тоді порівнюй з моделлю.'; return; }
    fb.textContent = ''; $('m-' + b.id).style.display = 'block'; markDone(b.id);
  }
  function tFmt(n) { var m = Math.floor(n / 60), s2 = n % 60; return m + ':' + (s2 < 10 ? '0' : '') + s2; }
  function tStart(b) { var t = TM[b.id] = TM[b.id] || { left: (b.minutes || 20) * 60 }; if (t.h) return; t.h = setInterval(function () { t.left--; $('tm-' + b.id).textContent = tFmt(Math.max(t.left, 0)); if (t.left <= 0) { clearInterval(t.h); t.h = null; flash('Час вийшов! Закінчуй речення і перевір відповідь.'); } }, 1000); }
  function tPause(b) { var t = TM[b.id]; if (t && t.h) { clearInterval(t.h); t.h = null; } }
  function tReset(b) { tPause(b); TM[b.id] = { left: (b.minutes || 20) * 60 }; $('tm-' + b.id).textContent = tFmt(TM[b.id].left); }
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset.fw) { S.vals[t.dataset.fw] = t.value; save(); fwCount(t); }
    if (t.dataset.gap) { S.vals[t.dataset.gap] = t.value; save(); }
    if (t.dataset.ta) { S.vals[t.dataset.ta] = t.value; save(); $('wc-' + t.dataset.ta).textContent = words(t.value) + ' слів'; }
  });

  /* ---------- відповіді: txt / copy / pdf ---------- */
  function answersText() {
    var out = [L.title, (L.module || 'Practice') + ' · мої відповіді', new Date().toLocaleDateString('uk-UA'), ''];
    L.rounds.forEach(function (r, ri) {
      var part = [];
      r.blocks.forEach(function (b) {
        if (b.type === 'gap') { var l = []; b.items.forEach(function (it, i) { var v = S.vals[b.id + ':' + i]; if (v) l.push((i + 1) + '. ' + it.pre.replace(/<[^>]+>/g, '') + '[' + v + ']' + it.post.replace(/<[^>]+>/g, '')); }); if (l.length) part.push((b.title || 'Gap-fill') + ':\n' + l.join('\n')); }
        if ((b.type === 'rewrite' || b.type === 'write') && S.vals[b.id]) part.push((b.title || b.tag || 'Текст') + ':\n' + S.vals[b.id]);
        if (b.type === 'fullwrite') { var fl = [], tot = 0; b.parts.forEach(function (p2) { var v2 = S.vals[b.id + ':' + p2.key]; if (v2) { fl.push(p2.label + ':\n' + v2); if (!p2.nocount) tot += words(v2); } }); if (fl.length) part.push((b.title || 'Повна відповідь') + ' (' + tot + ' слів):\n' + fl.join('\n\n')); }
        if (b.type === 'build') { var l2 = []; b.items.forEach(function (_, i) { if (S.vals[b.id + ':' + i]) l2.push((i + 1) + '. ' + S.vals[b.id + ':' + i]); }); if (l2.length) part.push((b.title || 'Збери речення') + ':\n' + l2.join('\n')); }
      });
      if (part.length) { out.push('=== ' + r.label + ' · ' + G[r.graph].name + ' ==='); out.push(part.join('\n\n')); out.push(''); }
    });
    return out.join('\n');
  }
  function flash(msg) { var f = $('flash'); f.textContent = msg; f.style.display = 'block'; setTimeout(function () { f.style.display = 'none'; }, 2200); }
  function download() {
    try { var blob = new Blob([answersText()], { type: 'text/plain;charset=utf-8' }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = L.id + '-my-answers.txt'; document.body.appendChild(a); a.click(); a.remove(); flash('Файл збережено'); }
    catch (e) { copyAns(); }
  }
  function copyAns() {
    var txt = answersText();
    function fallback() { var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); flash('Скопійовано'); } catch (e) { flash('Не вдалося скопіювати'); } ta.remove(); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { flash('Скопійовано'); }, fallback); else fallback();
  }
  function printAns() {
    var w = null; try { w = window.open('', '_blank'); } catch (e) {}
    if (!w) { flash('Браузер заблокував вікно. Скачай .txt'); return; }
    w.document.write('<html><head><meta charset="utf-8"><title>' + esc(L.title) + '</title></head><body style="font-family:Georgia,serif;max-width:720px;margin:30px auto;line-height:1.6"><pre style="white-space:pre-wrap;font-family:inherit">' + esc(answersText()) + '</pre></body></html>');
    w.document.close(); setTimeout(function () { w.print(); }, 300);
  }

  /* ---------- авто-висота для iframe (Kwiga) ---------- */
  function notify() { try { parent.postMessage({ type: 'ielts-resize', id: L.id, height: document.documentElement.scrollHeight + 8 }, '*'); } catch (e) {} }
  if (window.ResizeObserver) new ResizeObserver(notify).observe(document.body);
  window.addEventListener('load', notify); setInterval(notify, 1500);
})();
