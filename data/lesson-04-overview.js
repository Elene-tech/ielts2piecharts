window.LESSON = {
  id: 'pc-04-overview',
  module: 'Pie Charts',
  title: 'Practice · Overview',
  vocab: ['rule', 'overview', 'size', 'change'],
  subtitle: 'Pie Charts · знаходимо дві головні історії діаграм і записуємо їх 1–2 реченнями без цифр.',

  intro: [
    { type: 'rule', title: 'Overview: формула', html:
      '<p>Overview — це <b>2 «історії»</b>, записані <b>без цифр</b> (1–2 речення, після Introduction). Він охоплює <b>всі діаграми</b>, а не одну.</p>' +
      '<ul><li><b>Історія 1</b> — хто лідер (яка категорія найбільша в кожній діаграмі?).</li>' +
      '<li><b>Історія 2</b> — головний контраст між діаграмами: або «хто на кого не схожий» (групи), або «що змінилось найбільше» (роки).</li>' +
      '<li>Фрази: <i>Overall, … , whereas …</i> · <i>The main difference is that …</i> · <i>The most striking change is …</i></li>' +
      '<li>Не пиши: цифри, причини, свою думку, «In conclusion».</li></ul>' },
    { type: 'rule', title: '⚠ Головне правило pie charts: час чи ні?', html:
      '<p><b>Підписи — групи</b> (Economy A / B, Country A / B / C) → діаграми <b>не рухаються</b>. Пишемо <b>Present Simple</b> і мову порівняння: <i>higher, larger, whereas</i>. Жодних <s>increased, went up, fell</s>.</p>' +
      '<p><b>Підписи — роки</b> (2005 / 2025) → зміни реальні. Пишемо <b>Past Simple</b> і мову змін: <i>rose, fell, overtook, remained</i>.</p>' },
    { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
      ['Overall, oil and gas account for 64% of Economy A’s exports, while machinery makes up 30% of Economy B’s.', 'Цифри — для Body. Overview їх не містить.', 'Overall, Economy A depends heavily on a single product, whereas Economy B has a more balanced export structure.'],
      ['Overall, oil and gas fell from Economy A to Economy B.', 'Діаграми про групи, а не про час: fell тут неможливе.', 'Overall, oil and gas play a far larger role in Economy A than in Economy B.'],
      ['Overall, the first chart shows Economy A and the second chart shows Economy B.', 'Немає жодної історії: що з чим контрастує?', 'Overall, the two economies have almost opposite export structures.']
    ] }
  ],

  rounds: [
  /* ===================== РАУНД 1 ===================== */
  { label: 'Раунд 1', sub: 'з підказками', graph: 'ex',
    words: [['depends heavily on','сильно залежить від'],['whereas / while','тоді як'],['a more balanced … structure','більш збалансована структура'],['plays almost no role','майже не відіграє ролі']],
    lead: 'Діаграми про дві економіки, років немає: Present Simple і мова порівняння, жодних дієслів руху.',
    blocks: [
      { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
          ['link', 'Overall,'], ['type', 'Economy A depends heavily on a single product, oil and gas,'], ['verb', 'whereas'], ['what', 'Economy B has a far more balanced export structure, led by machinery and electronics'], '.' ],
        legend: [['type','історія 1: лідер Economy A'],['link','вступне слово'],['verb','сполучник контрасту'],['what','історія 2: контраст із Economy B']],
        note: 'Цифр немає, дієслів руху теж. <i>Depends heavily on</i> і <i>far more balanced</i> — оцінка розподілу без відсотків.' },

      { type: 'pick', tag: 'Крок 2 · Знайди дві історії', tagc: 'purple', title: 'Що має увійти в Overview?', need: 2, opts: [
          ['Economy A depends heavily on one product, oil and gas, whereas Economy B has a more balanced range of exports.', 1, 'Лідер і контраст структур: історія 1.'],
          ['Machinery and electronics lead Economy B’s exports, while they play almost no role in Economy A.', 1, 'Протилежна картина по групі товарів: історія 2.'],
          ['Oil and gas account for 64% of Economy A’s exports.', 0, 'Цифра однієї діаграми — деталь для Body.'],
          ['Economy A exports oil because it has no other industries.', 0, 'Причина, якої немає на діаграмах. Task 1 описує тільки дані.'],
          ['Economy B exports more goods than Economy A.', 0, 'Pie charts показують <b>частки</b>, а не обсяги: про те, хто експортує більше, діаграми нічого не кажуть.'],
          ['Metals account for 10% of Economy B’s exports.', 0, 'Дрібна цифра: це не «історія».']] },

      { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', bank: ['depends', 'whereas', 'balanced', 'almost'], items: [
          { pre: 'Overall, Economy A ', post: ' heavily on one product, oil and gas.', ok: ['depends', 'relies'], why: '<i>depends / relies on</i>. Present Simple: діаграми без дат.' },
          { pre: 'Economy A depends on oil and gas, ', post: ' Economy B exports a wider range of goods.', ok: ['whereas', 'while'], why: '<i>whereas / while</i> — контраст у середині речення.' },
          { pre: 'Economy B has a far more ', post: ' export structure.', ok: ['balanced', 'diverse', 'varied', 'diversified'], why: '<i>balanced / diverse / varied</i> — без цифр показує розподіл.' },
          { pre: 'Machinery and electronics play ', post: ' no role in Economy A.', ok: ['almost', 'virtually', 'practically'], why: '<i>almost / virtually no role</i> — 5% разом.' }
        ] },

      { type: 'choose', tag: 'Крок 4 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, Economy A depends heavily on a single product, whereas Economy B has a more balanced export structure.', 1, 'Дві історії, без цифр, Present Simple.'],
            ['Overall, oil and gas account for 64% of Economy A’s exports, while machinery makes up 30% of Economy B’s.', 0, 'Тут цифри. Їх місце — у Body paragraphs.'],
            ['In conclusion, relying on oil is risky, so Economy A should export more machinery.', 0, 'Власна думка й «In conclusion». Task 1 це не оцінює.'],
            ['Overall, Economy B exports more than Economy A.', 0, 'Діаграми показують частки, а не обсяги. Це неперевірене твердження.']] },
          { q: 'Яке речення правильне для діаграм без років?', opts: [
            ['Oil and gas play a far larger role in Economy A than in Economy B.', 1, 'Порівняння, Present Simple, жодного дієслова руху.'],
            ['Oil and gas fell from Economy A to Economy B.', 0, 'Fell означає зміну в часі, а тут два окремі кола.'],
            ['Oil and gas decreased in Economy B.', 0, 'Decreased теж потребує двох моментів часу. Їх немає.']] },
          { q: 'Які слова виражають контраст?', opts: [
            ['whereas / while', 1, 'Саме ці сполучники з’єднують два протилежні факти в одному реченні.'],
            ['because / so', 0, 'because — причина, so — наслідок. Діаграми їх не показують.'],
            ['in the time when', 0, 'Калька з української («в той час як»).']] }
        ] },

      { type: 'rewrite', tag: 'Крок 5 · Перепиши і порівняй', tagc: 'blue', title: 'Підвищ рівень до Band 7',
        given: 'Oil and gas is much bigger in Economy A and it went down in Economy B.',
        task: 'Перепиши речення як Overview: почни з <i>Overall,</i>, прибери дієслово руху й цифри, додай сполучник контрасту.',
        models: [
          ['Модель A', '<mark>Overall</mark>, Economy A <mark>depends heavily on</mark> oil and gas, <mark>whereas</mark> Economy B has a more balanced export structure.'],
          ['Модель B', '<mark>The most striking difference is that</mark> oil and gas <mark>dominate</mark> exports in Economy A, <mark>while</mark> in Economy B machinery and electronics lead.']],
        after: 'Зверни увагу: <i>went down</i> зникло. Це не зміна в часі, а різниця між двома колами.',
        check: ['Є Overall або схожа фраза', 'Немає дієслів руху (went down, fell)', 'Є сполучник контрасту', 'Немає цифр'] },

      { type: 'build', tag: 'Крок 6 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, Economy A depends heavily on a single product, whereas Economy B has a more balanced structure.',
          'The most striking difference is that oil and gas dominate exports in Economy A.',
          'Machinery and electronics play almost no role in Economy A.'] }
    ] },

  /* ===================== РАУНД 2 ===================== */
  { label: 'Раунд 2', sub: 'менше підказок', graph: 'cm',
    words: [['remained the most common','залишився найпоширенішим'],['its dominance weakened','його переважання послабшало'],['gained ground','набрали вагу'],['the most striking change','найпомітніша зміна']],
    lead: 'Тепер діаграми мають роки: 2005 і 2025. Мова змін повертається: Past Simple, rose / fell / remained.',
    blocks: [
      { type: 'pick', tag: 'Крок 1 · Знайди дві історії', tagc: 'purple', title: 'Що має увійти в Overview?', need: 2, opts: [
          ['The car remained the most common way to commute, but its dominance weakened considerably.', 1, 'Лідер, але з відтінком: історія 1.'],
          ['All the other modes gained ground, most noticeably cycling and working from home.', 1, 'Загальна зміна й найпомітніші зростання: історія 2.'],
          ['The car’s share fell from 55% to 38%.', 0, 'Цифри — для Body.'],
          ['Fewer people drove because petrol became more expensive.', 0, 'Причина, якої немає на діаграмах.'],
          ['Walking was the least common mode in 2025.', 0, 'Невірно: у 2025 найрідше (7%) — working from home, а walking — 10%. Перевіряй факти!'],
          ['Public transport rose from 27% to 30%.', 0, 'Дрібна цифра: деталь для Body.']] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Читаємо уважно', qs: [
          { q: 'Діаграми про 2005 і 2025. Що це означає для мови?', opts: [
            ['Мова змін дозволена: rose, fell, remained, overtook.', 1, 'Є два моменти в часі, тож зміни реальні.'],
            ['Тільки Present Simple й порівняння, як у попередньому раунді.', 0, 'Те правило діяло для діаграм про групи. Тут роки, отже зміни.'],
            ['Можна писати will, бо 2025 — «майбутнє».', 0, 'Обидва роки — фактичні дані, їх описуємо в минулому часі.']] },
          { q: 'Яке твердження правильне?', opts: [
            ['Working from home was the least common mode in 2025.', 1, 'У 2025: 7% проти 10% у walking, 15% у cycling.'],
            ['Walking was the least common mode in 2025.', 0, 'Walking — 10%, а working from home — лише 7%.'],
            ['Cycling overtook public transport.', 0, 'Cycling (15%) усе ще далеко за public transport (30%).']] },
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, the car remained the most common way to commute, but its dominance weakened, while cycling and working from home gained ground.', 1, 'Дві історії без цифр.'],
            ['Overall, the car fell from 55% to 38% and cycling rose from 8% to 15%.', 0, 'Цифри — для Body.'],
            ['Overall, people started to prefer cycling because it is cheap and healthy.', 0, 'Причини та власна думка. Task 1 їх не оцінює.']] }
        ] },

      { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
          { pre: 'Overall, the car ', post: ' the most common way to commute.', ok: ['remained', 'stayed', 'was'], why: '<i>remained</i> = «залишився»: лідер не змінився.' },
          { pre: 'However, its dominance ', post: ' considerably.', ok: ['weakened', 'declined', 'diminished', 'decreased'], why: 'Минулий час: роки в минулому. <i>weakened / declined</i>.' },
          { pre: 'Every other mode became more ', post: ' over the period.', ok: ['popular', 'common', 'widely used'], why: '<i>more popular / common</i>: частка зросла.' },
          { pre: 'The biggest ', post: ' was in cycling and working from home.', ok: ['growth', 'increase', 'rise', 'gain'], why: '<i>growth / increase / rise</i> — іменник після <i>the biggest</i>.' }
        ] },

      { type: 'write', tag: 'Крок 4 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview (2 речення)',
        task: 'Дві історії: хто залишився лідером + що змінилось найбільше. Без цифр.',
        hint: 'Історія 1: <i>the car remained the most common, but its dominance weakened</i>. Історія 2: <i>cycling and working from home gained ground</i>.',
        models: [
          ['Модель A', '<mark>Overall</mark>, the car <mark>remained the most common way</mark> to commute, <mark>although its dominance weakened considerably</mark>. <mark>The most striking change</mark> was the rise of cycling and working from home.'],
          ['Модель B', 'The car <mark>stayed in first place</mark> but <mark>lost ground to</mark> every other mode, and the <mark>biggest gains</mark> were made by cycling and working from home.']],
        check: ['Є дві історії', 'Немає цифр', 'Немає причин і власної думки', 'Past Simple і мова змін (діаграми з роками)'] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, the car remained the most common way to commute, although its dominance weakened considerably.',
          ['The most striking change was the rise of cycling and working from home.', 'The rise of cycling and working from home was the most striking change.']] }
    ] },

  /* ===================== РАУНД 3 ===================== */
  { label: 'Раунд 3', sub: 'майже самостійно', graph: 'ag',
    words: [['the largest group in all three','найбільша група в усіх трьох'],['the oldest / youngest population','найстаріше / наймолодше населення'],['a more youthful','молодше (населення)'],['by far','з великим відривом']],
    lead: 'Три діаграми без років: Present Simple і порівняння. Знайди лідера й головний контраст між країнами.',
    blocks: [
      { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview (2 речення)',
        task: 'Знайди дві історії: <b>1)</b> яка група лідирує в усіх трьох країнах, <b>2)</b> чим країни відрізняються найбільше. Без цифр.',
        hint: 'Історія 1: <i>the 15–59 group is the largest in all three countries</i>. Історія 2: <i>Country A has the oldest population and Country C the youngest</i>.',
        models: [
          ['Модель A', '<mark>Overall</mark>, people aged 15–59 <mark>form the largest group in all three countries</mark>. <mark>The main difference is that</mark> Country A has the oldest population, <mark>whereas</mark> Country C has by far the youngest.'],
          ['Модель B', '<mark>It is clear that</mark> working-age people <mark>make up the majority everywhere</mark>, but the three countries differ greatly in their share of children and older people: Country A is the oldest and Country C the most youthful.']],
        after: 'Зверни увагу: Present Simple, <i>form / have / is</i>, а не <i>formed</i>: діаграми без дат — це «знімок», а не історія.',
        check: ['Є дві історії', 'Немає цифр', 'Немає дієслів руху', 'Present Simple (діаграми без років)'] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Перевір себе', qs: [
          { q: 'Яке твердження правильне?', opts: [
            ['In all three countries, the 15–59 group is the largest.', 1, 'У Country C: 51% проти 44% (0–14) і 5% (60+). Так, найбільша.'],
            ['In Country C, children aged 0–14 are the largest group.', 0, 'У Country C діти — 44%, а працездатні — 51%. Різниця мала, але лідер — 15–59.'],
            ['Country A has the largest 0–14 group.', 0, 'У Country A діти — лише 12%, найменше з трьох країн.']] },
          { q: 'Який Overview найкращий?', opts: [
            ['Overall, the 15–59 group is the largest in all three countries, but Country A has the oldest population and Country C the youngest.', 1, 'Напрямок і контраст між країнами, без цифр.'],
            ['Overall, Country A has 30% of people aged 60+ and Country C has 5%.', 0, 'Цифри й одна деталь: це не Overview.'],
            ['Overall, Country C is young because many families live in villages.', 0, 'Причини не показані на діаграмах.']] }
        ] },

      { type: 'build', tag: 'Крок 3 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
          'Overall, the 15–59 group is the largest in all three countries.',
          'Country A has the oldest population, whereas Country C has by far the youngest.'] }
    ] }
  ],

  outro: [
    { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
      '<ul><li>Знаходити <b>2 історії</b>: лідер + головний контраст (між групами або між роками)</li>' +
      '<li>Писати Overview <b>без цифр, без причин і без «In conclusion»</b></li>' +
      '<li>Обирати мову за підписами: <b>групи</b> → Present Simple й порівняння, <b>роки</b> → Past Simple й зміни</li></ul>' +
      '<p class="small" style="margin-top:8px">Далі: Practice · Як шукати інформацію на діаграмі: що саме вибрати для Body.</p>' }
  ]
};
