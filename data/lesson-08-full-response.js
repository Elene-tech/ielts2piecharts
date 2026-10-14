(function () {
  var CHK = ['Introduction перефразована (не копія завдання), без цифр', 'Overview: 2 історії, без цифр і причин', 'Body 1: найбільший контраст або зміна, обидві цифри в одному реченні', 'Body 2: решта категорій об’єднана, є зв’язка з Body 1', 'Мова відповідає типу: групи → Present Simple, роки → Past Simple', 'Дробів і множників не менше двох (nearly half, double…)', 'Немає rose / fell для діаграм без років', '150+ слів (ціль 160–175)', 'Встиг(ла) за 20 хвилин'];
  window.LESSON = {
    id: 'pc-08-full-response',
    module: 'Pie Charts',
    title: 'Final Task · Повна відповідь самостійно',
    subtitle: 'Pie Charts · Introduction + Overview + Body 1 + Body 2 на нових діаграмах. Три завдання з різним рівнем підтримки, таймер 20 хвилин.',
    vocab: ['rule', 'intro', 'overview', 'size', 'compare', 'ratios', 'change', 'grouping', 'body-templates', 'traps'],

    intro: [
      { type: 'rule', title: 'План на 20 хвилин', html:
        '<ol style="margin-left:20px"><li><b>3 хв — читання й нотатки</b>: групи чи роки? Лідер у кожному колі? Головний контраст або зміна?</li>' +
        '<li><b>14 хв — письмо</b>: Introduction (1–2 речення) → Overview (2 речення) → Body 1 → Body 2.</li>' +
        '<li><b>3 хв — перевірка</b>: Present чи Past, цифри, обсяг (160–175 слів, мінімум 150).</li></ol>' +
        '<p class="small" style="margin-top:8px">Три завдання: перше з підказками, друге з однією підказкою, третє як на іспиті. Словник доступний у будь-який момент (кнопка 📚). Моделі відкриваються після того, як ти напишеш власну відповідь.</p>' }
    ],

    rounds: [
    { label: 'Завдання 1', sub: 'із підказками', graph: 'fc',
      lead: 'Два кола без років. Підказки до кожного абзацу відкриваються за потреби.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Preferred methods of communication', minutes: 20, minWords: 150, target: '160–175', showAfter: 100,
          prompt: 'The two pie charts below show the preferred methods of communication for two age groups: 18–30 year olds and 50–65 year olds. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Групи чи роки? · лідер у кожному колі · головний контраст…', ua: 'Яка категорія лідирує в кожному колі? Який Body 1, який Body 2?' },
            { key: 'intro', label: 'Introduction', rows: 2, starter: 'The two pie charts compare the preferred methods of …', words: 'preferred methods of communication · two age groups · compare / illustrate' },
            { key: 'overview', label: 'Overview', rows: 3, starter: 'Overall, … is the most popular among …, whereas …', words: 'dominates · favours traditional methods · a broadly similar share', ua: 'Дві історії без цифр: лідер у молодих + що обирають старші. Років немає: Present Simple.' },
            { key: 'body1', label: 'Body 1', rows: 5, starter: 'Among 18–30 year olds, …', words: 'account for nearly half · make up just over a fifth · respectively · a marginal share', ua: 'Група: 18–30 year olds (перше коло).' },
            { key: 'body2', label: 'Body 2', rows: 5, starter: 'In contrast, the 50–65 group …', words: 'favours · together well over half · less than a third of the figure for', ua: 'Група: 50–65 year olds + порівняння з першим колом.' }],
          models: [
            ['Introduction', 'The two pie charts <mark>compare the preferred methods of communication</mark> of two age groups: 18–30 year olds and 50–65 year olds.'],
            ['Overview', '<mark>Overall</mark>, social media <mark>dominates</mark> among 18–30 year olds, <mark>whereas</mark> the older group <mark>favours traditional methods</mark>, namely phone calls and email. Text messaging is the only specific method with a similar share in both groups.'],
            ['Body 1', 'Among 18–30 year olds, social media <mark>accounts for nearly half</mark> of all preferences (48%), while text messaging <mark>makes up just over a fifth</mark> (22%). Phone calls and email are far less popular, at 12% and 10% <mark>respectively</mark>, and other methods account for a marginal 8%, making them the least popular option in this group.'],
            ['Body 2', '<mark>In contrast</mark>, the 50–65 group favours phone calls (32%) and email (28%), <mark>together well over half</mark> of all preferences. Social media, <mark>however</mark>, makes up just 14%, <mark>less than a third of the figure for</mark> the younger group, while text messaging (20%) and other methods (6%) complete the picture, so the two age groups have largely opposite preferences.']],
          after: 'Порівнюй рішення, а не слова: чи є в Overview дві історії без цифр? Чи Body 2 починається з контрасту? Чи є Present Simple і жодного дієслова руху? Сподобалась фраза: випиши її й використай у наступному завданні.',
          check: CHK }
      ] },

    { label: 'Завдання 2', sub: 'одна підказка', graph: 'ta',
      lead: 'Два роки: це діаграми з часом. Єдина підказка: Body 1 = hotels і private rentals, Body 2 = три менші категорії. Мова змін і Past Simple.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Where tourists stayed', minutes: 20, minWords: 150, target: '160–175', showAfter: 100, hints: false,
          prompt: 'The two pie charts below show where tourists in one region stayed in 2010 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Підказка: Body 1 = hotels vs private rentals (великий обмін), Body 2 = три менші категорії. Що в Overview?' },
            { key: 'intro', label: 'Introduction', rows: 2 },
            { key: 'overview', label: 'Overview', rows: 3 },
            { key: 'body1', label: 'Body 1', rows: 5 },
            { key: 'body2', label: 'Body 2', rows: 5 }],
          models: [
            ['Introduction', 'The two pie charts <mark>compare where tourists in one region stayed</mark> in 2010 and 2024.'],
            ['Overview', '<mark>Overall</mark>, private rentals <mark>overtook</mark> hotels to become the most popular type of accommodation by 2024, while every other option <mark>became less common</mark>, with hotels declining the most.'],
            ['Body 1', 'Hotels <mark>accounted for just under half</mark> of all stays in 2010 (48%), but their share <mark>fell to 35%</mark> by 2024. Private rentals, <mark>by contrast</mark>, <mark>rose sharply from 15% to 38%</mark> over the same period, <mark>the most dramatic change</mark> shown on the charts. As a result, the two categories swapped places: private rentals, which ranked only third in 2010, became the most popular option, while hotels dropped to second place.'],
            ['Body 2', '<mark>The remaining options</mark> all declined modestly. Staying with friends or relatives, the largest fall among these three, <mark>dropped from 18% to 12%</mark>, while camping went from 12% to 9% and other types of accommodation from 7% to 6%. <mark>Together</mark>, these three options accounted for 37% of stays in 2010 but only 27% in 2024.']],
          after: 'Зверни увагу: діаграми з роками, тому Past Simple і мова змін (<i>fell, rose, overtook</i>). Порівняй із попереднім завданням: там було Present Simple й порівняння груп. Причину змін (наприклад, Airbnb) не пишемо: її немає на діаграмах.',
          check: CHK }
      ] },

    { label: 'Завдання 3', sub: 'як на іспиті', graph: 'lu',
      lead: 'Три кола без підказок: тільки твої знання й словник. Таймер 20 хвилин. Групи чи роки? Подумай, перш ніж писати.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Land use in three regions', minutes: 20, minWords: 150, target: '160–175', showAfter: 100, hints: false,
          prompt: 'The three pie charts below show how land is used in three different regions. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Подумай: групи чи роки? Як розділити Body 1 і Body 2? Який лідер у кожному регіоні?' },
            { key: 'intro', label: 'Introduction', rows: 2 },
            { key: 'overview', label: 'Overview', rows: 3 },
            { key: 'body1', label: 'Body 1', rows: 5 },
            { key: 'body2', label: 'Body 2', rows: 5 }],
          models: [
            ['Introduction', 'The three pie charts <mark>compare how land is used in three regions</mark>, divided into four categories: agriculture, forest, urban areas and other uses.'],
            ['Overview', '<mark>Overall</mark>, each region <mark>is dominated by a different type of land use</mark>: agriculture in Region 1, forest in Region 2 and urban development in Region 3. Other uses are minor in all three regions, so the differences lie mainly in the three main categories.'],
            ['Body 1', 'Agriculture covers 55% of Region 1, <mark>nearly double the figure for</mark> Region 2 (30%) and <mark>almost three times that for</mark> Region 3 (20%). Forest is most extensive in Region 2, <mark>where it accounts for</mark> 48% of the land, <mark>compared with</mark> a quarter in Region 1 and 18% in Region 3.'],
            ['Body 2', 'Urban land is the dominant use in Region 3 (52%), <mark>whereas</mark> it makes up only 12% and 15% of Regions 1 and 2 <mark>respectively</mark>. <mark>The remaining uses</mark> are minor everywhere, accounting for between 7% and 10% of the land in each region. Region 3 is therefore the most urbanised of the three.']],
          after: 'Зверни увагу: років немає, тому тут немає <i>rose / fell</i>, лише порівняння регіонів у Present Simple. Три кола зручно групувати за категорією: Body 1 про agriculture і forest, Body 2 про urban і решту.',
          check: CHK }
      ] }
    ],

    outro: [
      { type: 'rule', title: '🎯 Модуль Pie Charts завершено', html:
        '<p>Якщо більшість пунктів чек-листа — «так», ти готовий(а) до наступного типу діаграм. Якісь «ні»? Повернись до відповідного уроку: це нормальна частина навчання.</p>' +
        '<p class="small" style="margin-top:8px">Скачай свої відповіді кнопкою «📝 Мої відповіді» й покажи їх викладачеві.</p>' }
    ]
  };
})();
