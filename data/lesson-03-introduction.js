window.LESSON = {
  id: 'pc-03-introduction',
  module: 'Pie Charts',
  title: 'Practice · Introduction',
  vocab: ['rule', 'intro', 'traps'],
  subtitle: 'Pie Charts · тренуємо перше речення відповіді на трьох наборах діаграм: від розбору прикладу до самостійного написання.',

  intro: [
    { type: 'rule', title: 'Introduction для pie charts: формула', html:
      '<p>Introduction — це <b>1–2 речення</b>, у яких ти <b>своїми словами</b> кажеш, що показують діаграми. Без цифр і висновків.</p>' +
      '<ul><li><b>The two / three pie charts</b> + <b>compare / illustrate / show</b> (без -s: діаграм кілька!) + <b>що саме</b> (частка чого?) + <b>де / коли / для кого</b>.</li>' +
      '<li>Не копіюй завдання: <i>show how energy is used → illustrate the proportion of energy consumed</i>.</li>' +
      '<li>Діаграми про <b>групи</b> (дві економіки, три країни) → без років, можна <i>respectively</i>. Діаграми про <b>роки</b> → <i>in 2005 and 2025</i>.</li></ul>' },
    { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
      ['The two pie charts below compare the composition of exports in two economies, broken down by type of goods.', 'Майже повна копія завдання: змінено одне слово.', 'The two pie charts compare the structure of exports in two economies, showing the share of six types of goods in each.'],
      ['The pie charts show that oil and gas dominate exports in Economy A.', 'Це вже висновок (Overview), а не Introduction.', 'The two pie charts illustrate what Economy A and Economy B export, broken down into six categories of goods.'],
      ['The pie charts shows how commuters travel in 2005 year and 2025 year.', 'Дієслово при множині + калька «2005 year».', 'The two pie charts compare how commuters travelled to work in 2005 and 2025.']
    ] }
  ],

  rounds: [
  /* ===================== РАУНД 1 ===================== */
  { label: 'Раунд 1', sub: 'з підказками', graph: 'ex',
    words: [['compare / illustrate / show','порівнюють / показують'],['the structure of exports','структура експорту'],['broken down by','розбитий за'],['respectively','відповідно']],
    lead: 'Дві діаграми про різні групи (дві економіки), років немає. Повна підтримка: приклад, банк слів, пояснення до кожної відповіді.',
    blocks: [
      { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
          ['type', 'The two pie charts'], ['verb', 'compare'], ['what', 'the structure of exports'], ['link', 'in two economies, showing the share of six types of goods in each'], '.' ],
        legend: [['type','вид діаграм (plural)'],['verb','дієслово БЕЗ -s'],['what','ЩО показано'],['link','де / для кого']],
        note: 'Зверни увагу: <i>the two pie charts compare</i> (множина → без -s), <i>structure of exports</i> замість <i>composition of exports</i>, а <i>showing the share of … in each</i> додає те, чого немає в завданні. Цифр і висновків немає, років теж: це діаграми про групи.' },

      { type: 'gap', tag: 'Крок 2 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', intro: 'Використай слова з банку. У деяких реченнях підійдуть і інші варіанти — ми їх теж зарахуємо.',
        bank: ['compare', 'into', 'share', 'respectively', 'broken'], items: [
          { pre: 'The two pie charts ', post: ' the structure of exports in two economies.', ok: ['compare', 'illustrate', 'show', 'present', 'depict'], why: 'Підмет <i>two pie charts</i> — множина, тому дієслово <b>без -s</b>.' },
          { pre: 'Each chart is divided ', post: ' six types of goods.', ok: ['into'], why: '<i>divided into</i> + кількість частин.' },
          { pre: 'They show the ', post: ' of total exports accounted for by each type of goods.', ok: ['share', 'proportion', 'percentage'], why: '<i>share / proportion / percentage of</i> — частка від цілого.' },
          { pre: 'The data are given for Economy A and Economy B ', post: '.', ok: ['respectively'], why: '<i>respectively</i> = відповідно, у тому ж порядку. Ставимо в кінці.' },
          { pre: 'The charts show exports ', post: ' down by type of goods.', ok: ['broken'], why: 'Стійка фраза <i>broken down by</i>: «розбитий за».' }
        ] },

      { type: 'choose', tag: 'Крок 3 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Яка Introduction найкраща для цих діаграм?', opts: [
            ['The two pie charts compare the structure of exports in two economies, showing the share of six types of goods in each.', 1, 'Є вид діаграм, дієслово, ЩО порівнюється, де і яких категорій.'],
            ['The pie charts show economies.', 0, 'Незрозуміло, що саме показано про економіки: експорт? населення? Тема надто розмита.'],
            ['Economy A depends mainly on oil and gas, whereas Economy B exports mostly machinery and electronics.', 0, 'Гарне речення, але це вже Overview. Introduction не містить висновків.'],
            ['Oil and gas account for 64% of the exports of Economy A.', 0, 'Це деталь із цифрою. Її місце — у Body paragraph.']] },
          { q: 'Яке речення граматично правильне?', opts: [
            ['The two pie charts compare the structure of exports.', 1, 'Підмет у множині → compare без -s.'],
            ['The two pie charts compares the structure of exports.', 0, '<i>charts</i> — множина, тому -s у дієслові зайве.'],
            ['The two pie chart compare the structure of exports.', 0, 'Після <i>two</i> потрібна множина: two pie <b>charts</b>.']] },
          { q: 'Що означає слово respectively?', opts: [
            ['«відповідно», тобто в тому самому порядку (перша діаграма — Economy A, друга — Economy B)', 1, 'Саме так: respectively прив’язує пару назв до пари діаграм.'],
            ['«загалом, у цілому»', 0, 'Це <i>overall</i>. Його місце в Overview.'],
            ['«також, крім того»', 0, 'Це <i>in addition / also</i>. Respectively нічого не додає, лише розподіляє.']] },
          { q: 'Як сказати «розбитий за типами товарів»?', opts: [
            ['broken down by type of goods', 1, 'Стійка фраза: <i>broken down by</i>.'],
            ['broken down in type of goods', 0, 'Після <i>broken down</i> потрібен прийменник <b>by</b>, а не in.'],
            ['broken down for types goods', 0, 'Немає прийменника by, і порядок слів порушено.']] }
        ] },

      { type: 'rewrite', tag: 'Крок 4 · Перепиши і порівняй', tagc: 'blue', title: 'Скажи те саме іншими словами',
        given: 'The two pie charts below compare the composition of exports in two economies, broken down by type of goods.',
        task: 'Перепиши речення: <b>1)</b> інше дієслово або інша структура, <b>2)</b> принаймні два слова-синоніми, <b>3)</b> не копіюй 3 слова поспіль.',
        models: [
          ['Модель A · share', 'The two pie charts <mark>illustrate the structure of exports</mark> in two economies, <mark>showing the share</mark> of six types of goods in each.'],
          ['Модель B · what they export', 'The charts <mark>compare what Economy A and Economy B export</mark>, <mark>divided into six categories</mark> of goods.'],
          ['Модель C · percentage', 'The data <mark>show the percentage of total exports accounted for by each type of goods</mark> in two economies.']],
        check: ['Я змінив(ла) дієслово або структуру', 'Я замінив(ла) принаймні два слова синонімами', 'Є і ЩО показано, і для кого', 'У моєму реченні немає цифр і висновків'] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The two pie charts compare the structure of exports in two economies.',
          'The charts show the share of each type of goods in the exports of Economy A and Economy B respectively.',
          'The data illustrate what two economies export, broken down into six categories.'],
        hint: 'Починай з <b>The two pie charts / The charts / The data</b>, потім дієслово, потім ЩО показано.' }
    ] },

  /* ===================== РАУНД 2 ===================== */
  { label: 'Раунд 2', sub: 'менше підказок', graph: 'cm',
    words: [['commuters','ті, хто їздить на роботу'],['modes of transport','види транспорту'],['travelled to work','їхали на роботу'],['in 2005 and 2025','у 2005 і 2025 роках']],
    lead: 'Тепер діаграми про два роки: це інший тип. Мова змін тут дозволена, але в Introduction ми зміни ще не описуємо. Спочатку подумай сам(а), потім звіряйся з поясненнями.',
    blocks: [
      { type: 'choose', tag: 'Крок 1 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
          { q: 'Яка Introduction найкраща?', opts: [
            ['The two pie charts compare how commuters travelled to work in 2005 and 2025, using five modes of transport.', 1, 'Повна: вид діаграм, ЩО показано, обидва роки, кількість категорій.'],
            ['The two pie charts show transport in 2005 and 2025.', 0, 'Граматично добре, але розмито: хто і куди їздить? Що саме порівнюється?'],
            ['The pie charts show that the car remained the most common mode, although its share fell.', 0, 'Це вже Overview. Introduction не містить висновків.'],
            ['The pie charts show how commuters travel to work in 2005 year and 2025 year.', 0, 'Калька «2005 year»: слово year зайве, а <i>travel</i> у теперішньому часі не пасує до минулих років.']] },
          { q: 'Як найточніше вказати два роки?', opts: [
            ['in 2005 and 2025', 1, 'У діаграм лише два моменти, тому <i>in … and …</i> найточніше.'],
            ['between 2005 and 2025', 0, 'Не груба помилка, але <i>between</i> натякає на неперервний період. Тут два окремі роки.'],
            ['from 2005 till 2025 years', 0, 'Калька з української: <i>till</i> не вживається в Task 1, а <i>years</i> зайве.']] }
        ] },

      { type: 'gap', tag: 'Крок 2 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
          { pre: 'The two pie charts compare how commuters ', post: ' to work in 2005 and 2025.', ok: ['travelled', 'traveled', 'commuted', 'got', 'went'], why: 'Роки в минулому → Past Simple: <i>travelled</i>.' },
          { pre: 'The charts cover five ', post: ' of transport.', ok: ['modes', 'means', 'types', 'kinds'], why: '<i>five modes / types of transport</i>: множина після числівника.' },
          { pre: 'They show the percentage of commuters who used each mode ', post: ' 2005 and 2025.', ok: ['in'], why: 'Конкретні роки: <i>in 2005 and 2025</i>.' },
          { pre: 'Working from home is included, ', post: ' with car, public transport, cycling and walking.', ok: ['together', 'along'], why: '<i>together with / along with</i> — «разом із».' }
        ] },

      { type: 'write', tag: 'Крок 3 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction для цих діаграм',
        task: 'Подивись на діаграми й напиши 1–2 речення. Використай формулу з початку уроку.',
        hint: 'The two pie charts + <i>compare / illustrate</i> + <i>how commuters travelled to work</i> + <i>in … and …</i>.',
        models: [
          ['Модель A', 'The two pie charts <mark>compare how commuters travelled to work</mark> in 2005 and 2025, <mark>using five modes of transport</mark>.'],
          ['Модель B', 'The charts <mark>illustrate the proportion of commuters</mark> who went to work by car, public transport, bicycle and on foot, or worked from home, <mark>in 2005 and in 2025</mark>.']],
        check: ['Є вид діаграм і дієслово без -s', 'Названо тему своїми словами', 'Є обидва роки', 'Немає цифр і висновків'] },

      { type: 'build', tag: 'Крок 4 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The two pie charts compare how commuters travelled to work in 2005 and 2025.',
          'The charts illustrate the proportion of commuters who used each mode of transport in 2005 and 2025.'] }
    ] },

  /* ===================== РАУНД 3 ===================== */
  { label: 'Раунд 3', sub: 'майже самостійно', graph: 'ag',
    words: [['age structure','вікова структура'],['people aged 60 and over','люди віком 60+'],['three age groups','три вікові групи'],['three countries','три країни']],
    lead: 'Три діаграми без років: три країни. Спочатку пишеш сам(а), потім порівнюєш.',
    blocks: [
      { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction',
        task: 'Не забудь: діаграм <b>три</b>, а не дві, років немає, а категорії — це вікові групи.',
        hint: 'The three pie charts + <i>compare / show</i> + <i>the age structure of the population</i> + <i>in three countries</i> (+ <i>divided into three age groups</i>).',
        models: [
          ['Модель A', 'The three pie charts <mark>compare the age structure of the population</mark> in three countries, <mark>divided into three age groups</mark>.'],
          ['Модель B', 'The charts <mark>show the proportion of people aged 0–14, 15–59 and 60 and over</mark> in Country A, Country B and Country C.']],
        after: 'Зверни увагу: у Introduction досить сказати, що порівнюється. Те, яка країна найстарша, — це вже Overview.',
        check: ['Є «three pie charts» і дієслово без -s', 'Названо тему своїми словами (age structure / age groups)', 'Є «три країни»', 'Немає цифр і висновків'] },

      { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Перевір себе', qs: [
          { q: 'Яка Introduction найкраща?', opts: [
            ['The three pie charts compare the proportion of people in three age groups in Country A, Country B and Country C.', 1, 'Є вид діаграм, що порівнюється й усі три країни.'],
            ['The three pie charts show that Country C has the youngest population.', 0, 'Це Overview, а не Introduction.'],
            ['The three pie charts show people in three countries.', 0, 'Незрозуміло, що саме про людей: вік? дохід? кількість?']] },
          { q: 'Як сказати «люди віком від 60 років»?', opts: [
            ['people aged 60 and over', 1, 'Нейтральна і точна фраза для Band 7.'],
            ['old people', 0, 'Розмовно й неточно: на діаграмі конкретна вікова група.'],
            ['people older than 60 years', 0, '<i>older than 60</i> не включає самих 60-річних, а слово years зайве.']] }
        ] },

      { type: 'build', tag: 'Крок 3 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
          'The three pie charts compare the age structure of the population in three countries.',
          'The charts show the proportion of people aged 60 and over in each country.'] }
    ] }
  ],

  outro: [
    { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
      '<ul><li>Будувати Introduction: <b>вид діаграм + дієслово без -s + ЩО показано + для кого / коли</b></li>' +
      '<li>Перефразовувати завдання: <i>composition of exports → structure of exports</i>, <i>broken down by</i></li>' +
      '<li>Відрізняти діаграми про <b>групи</b> (без років) від діаграм про <b>роки</b> (in 2005 and 2025)</li></ul>' +
      '<p class="small" style="margin-top:8px">Далі: Practice · Overview: дві головні історії діаграм без цифр.</p>' }
  ]
};
