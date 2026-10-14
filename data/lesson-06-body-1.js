(function () {
  var CHK_S = ['Обидві цифри категорії в одному реченні', 'Є порівняння (compared with / whereas / respectively)', 'Немає дієслів руху (rose, fell, increased)', 'Present Simple (діаграми без років)', 'Є дріб або множник (more than half, six times)', 'Немає причин і переліку всіх категорій'];
  var CHK_T = ['Є старт: рік + цифра', 'Є фініш: рік + цифра', 'Показано масштаб або розрив (percentage points, nearly double)', 'Past Simple і мова змін (діаграми з роками)', 'Дієслова різні, є дріб або множник', 'Немає причин і переліку всіх категорій'];
  window.LESSON = {
    id: 'pc-06-body-1',
    module: 'Pie Charts',
    title: 'Practice · Main Body 1',
    subtitle: 'Pie Charts · пишемо перший Body paragraph на трьох наборах діаграм. Слова й логіка допомагають, а текст пишеш ти.',
    vocab: ['body-templates', 'verbs', 'compare', 'ratios', 'fractions'],

    intro: [
      { type: 'rule', title: 'Логіка Body paragraph для pie charts', html:
        '<p>Body 1 — це <b>2–3 категорії з найбільшим контрастом або зміною</b>. Не рухайся колом: порівнюй <b>одну категорію в обох колах в одному реченні</b>.</p>' +
        '<p><b>Діаграми про групи (без років):</b></p>' +
        '<ol style="margin-left:20px"><li><b>Категорія 1</b>: цифра в одному колі + <i>compared with</i> + цифра в іншому</li><li><b>Масштаб</b>: дріб або множник (<i>nearly two thirds</i>, <i>sixteen times</i>)</li><li><b>Категорія 2</b>: протилежна картина (<i>whereas / by contrast</i>)</li></ol>' +
        '<p style="margin-top:8px"><b>Діаграми про роки:</b> <b>старт → фініш → масштаб</b> (<i>fell by 17 percentage points</i>) → <b>що сталося з розривом</b>.</p>' +
        '<p class="small" style="margin-top:8px">Спочатку тобі допомагають плани й фрази. З кожним раундом підказок менше. У кінці кожного раунду порівнюєш свій абзац із моделлю.</p>' }
    ],

    rounds: [
    /* ---------- Раунд 1 · Exports ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'ex',
      lead: 'Діаграми без років: Present Simple і порівняння. Body 1 = найбільші контрасти (oil & gas і machinery + electronics). Усі підказки відкриті.',
      words: [['account for','становлять'],['almost two thirds','майже дві третини'],['compared with a negligible','порівняно з мізерними'],['show the opposite pattern','показують зворотну картину'],['together … make up','разом становлять'],['respectively','відповідно']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Oil & gas і machinery + electronics: крок за кроком', steps: [
            { title: 'Категорія 1 в обох колах', ua: 'Обидві цифри в одному реченні.', frame: 'Oil and gas account for [fraction] of Economy A’s exports ([figure]), compared with [figure] in Economy B.' },
            { title: 'Протилежна картина', ua: 'Друга категорія з іншого боку.', frame: 'Machinery and electronics show the opposite pattern: together they make up …' },
            { title: 'Цифри в дужках або respectively', ua: 'Дві цифри для двох економік або двох категорій.', frame: '… ([figure] and [figure] respectively) …' },
            { title: 'Контраст до іншої економіки', ua: 'Скільки в економіки A: маленька частка?', frame: '…, but only [figure] of Economy A’s.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про oil & gas і machinery + electronics',
          task: '2–3 речення. Спирайся на план вище й діаграми. Пам’ятай: років немає, тому жодних <s>rose / fell</s>.',
          hint: 'Oil & gas: 64 і 4. Machinery 30 + electronics 26 = 56 у B; у A: 3 + 2 = 5.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'Oil and gas <mark>account for almost two thirds</mark> of Economy A’s exports (64%), <mark>compared with a negligible</mark> 4% in Economy B. Machinery and electronics <mark>show the opposite pattern</mark>: <mark>together</mark> they <mark>make up</mark> more than half of Economy B’s exports (30% and 26% <mark>respectively</mark>), but only 5% of Economy A’s.'],
            ['Модель B', 'Economy A <mark>depends heavily on</mark> oil and gas, which <mark>account for 64% of its exports, whereas</mark> in Economy B they make up just 4%. <mark>By contrast</mark>, machinery (30%) and electronics (26%) <mark>are the two leading categories</mark> in Economy B but <mark>barely register</mark> in Economy A, at 3% and 2%.']],
          after: 'Порівняй: чи є в тебе обидві цифри категорії в одному реченні? Чи немає rose / fell? Модель A використовує <i>respectively</i>, модель B — <i>whereas / by contrast</i>: обидва варіанти хороші.',
          check: CHK_S }
      ] },

    /* ---------- Раунд 2 · Commuting ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'cm',
      lead: 'Діаграми мають роки (2005, 2025): Past Simple і мова змін. Body 1 = car і public transport (дві найбільші категорії). Фраз менше: тільки логіка.',
      words: [['over half','понад половина'],['just over a quarter','трохи більше чверті'],['edged up','трохи зріс'],['narrowed','скоротився']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Car і public transport: крок за кроком', steps: [
            { title: 'Старт 2005', ua: 'Яка частка в car і public transport? Використай дроби.' },
            { title: 'Фініш 2025', ua: 'Що сталося з кожною категорією? Дієслова мають бути різні.' },
            { title: 'Масштаб', ua: 'На скільки percentage points змінилась найбільша категорія?' },
            { title: 'Розрив між категоріями', ua: 'Він збільшився чи скоротився? З якого значення до якого?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про car і public transport',
          task: '2–3 речення. Старт, фініш і розрив.',
          hint: 'Car: 55 → 38 (−17). Public transport: 27 → 30 (+3). Розрив: 28 → 8 percentage points.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'In 2005, <mark>over half</mark> of commuters (55%) travelled by car, while <mark>just over a quarter</mark> (27%) used public transport. By 2025, the car’s share had <mark>fallen by 17 percentage points</mark> to 38%, whereas public transport had <mark>edged up to 30%</mark>, so that the gap between the two modes <mark>narrowed considerably</mark>.'],
            ['Модель B', 'The car was <mark>by far the most common mode</mark> in 2005, at 55%, <mark>compared with</mark> 27% for public transport. However, <mark>a fall of 17 percentage points</mark> brought the car down to 38% in 2025, while public transport rose slightly to 30%, <mark>leaving only an 8-point gap</mark> between them.']],
          after: 'Тут у тебе дві категорії в одному абзаці. Головна навичка: порівнювати їх і показати, що сталося з розривом, а не писати два окремі списки.',
          check: CHK_T }
      ] },

    /* ---------- Раунд 3 · Age structure ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'ag',
      lead: 'Три кола без років: Present Simple. Body 1 = «крайні» групи, 60+ і 0–14. Фраз мало, думай про контраст між країнами.',
      words: [['six times the figure for','у шість разів більше, ніж у'],['in between at','посередині, на рівні'],['the pattern is reversed for','для … картина зворотна'],['compared with … in','порівняно з … у']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Група 60+ і група 0–14: план (за потреби)', collapsed: true, steps: [
            { title: 'Група 60+', ua: 'Найбільше в одній країні, найменше в іншій. Який множник? Де посередині?' },
            { title: 'Зворотна картина', ua: 'Яка група показує протилежне і де вона найбільша?' },
            { title: 'Три значення в реченні', ua: 'Використай compared with / and only …' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про групи 60+ і 0–14',
          task: '2–3 речення. Усі три країни в кожному реченні. Present Simple.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'The 60+ group <mark>accounts for 30% of Country A’s population</mark>, <mark>six times the figure for Country C</mark> (5%), <mark>with Country B in between at 14%</mark>. <mark>The pattern is reversed for</mark> children aged 0–14, who make up 44% of Country C’s population, <mark>compared with</mark> 22% in Country B and only 12% in Country A.'],
            ['Модель B', 'Country A has <mark>by far the largest proportion of older people</mark>: 30% are aged 60 and over, <mark>against</mark> 14% in Country B and just 5% in Country C. Country C, <mark>in contrast</mark>, has the most children (44%), <mark>nearly four times the share in Country A</mark> (12%).']],
          after: 'Ти вже тричі написав(ла) Body 1 на різних діаграмах: структура абзацу щоразу та сама. Змінюються лише слова й цифри.',
          check: CHK_S }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Брати 2–3 категорії з найбільшим контрастом і порівнювати їх <b>в одному реченні</b></li>' +
        '<li>Замінювати цифри на дріб або множник: <i>almost two thirds</i>, <i>six times</i></li>' +
        '<li>Для діаграм з роками будувати абзац за схемою <b>старт → фініш → масштаб → розрив</b></li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Practice · Main Body 2: решта категорій і висновок про групу.</p>' }
    ]
  };
})();
