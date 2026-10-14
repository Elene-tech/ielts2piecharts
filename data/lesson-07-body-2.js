(function () {
  var CHK_S = ['Є зв’язок з Body 1 (In contrast / Meanwhile / The remaining…)', 'Схожі категорії об’єднані в одне речення (respectively / together)', 'Є виняток або найпомітніша різниця з множником', 'Немає дієслів руху (rose, fell, increased)', 'Present Simple (діаграми без років)', 'Немає причин і переліку всіх категорій'];
  var CHK_T = ['Абзац починається зі зв’язки (Cycling and working from home… / The remaining modes…)', 'Є множник (nearly doubled, sevenfold)', 'Є категорія зі слабкою зміною (changed little, edged up)', 'Past Simple і мова змін (діаграми з роками)', 'Дієслова різні, прислівники відповідають розміру зміни', 'Немає причин і переліку всіх категорій'];
  window.LESSON = {
    id: 'pc-07-body-2',
    module: 'Pie Charts',
    title: 'Practice · Main Body 2',
    subtitle: 'Pie Charts · пишемо другий Body paragraph: решта категорій, об’єднання й виняток. Слова й логіка допомагають, а текст пишеш ти.',
    vocab: ['body-templates', 'grouping', 'compare', 'ratios', 'change'],

    intro: [
      { type: 'rule', title: 'Логіка Body 2', html:
        '<p>Body 2 — це <b>решта категорій</b>. Вони менші, тому їх <b>об’єднуємо</b> й не описуємо по одній.</p>' +
        '<ol style="margin-left:20px"><li><b>Зв’язка</b> з Body 1: <i>The remaining categories … / In contrast, …</i></li><li><b>Схожі категорії разом</b>: <i>at 11% and 10% respectively</i> або <i>together accounted for …</i></li><li><b>Виняток або найпомітніша різниця</b> з множником (<i>double</i>, <i>sevenfold</i>)</li><li>(Для діаграм з роками) <b>категорія, яка майже не змінилась</b></li></ol>' +
        '<p class="small" style="margin-top:8px">Не повторюй структуру Body 1 і не описуй кожну категорію. Екзаменатору потрібна логіка групування.</p>' }
    ],

    rounds: [
    /* ---------- Раунд 1 · Exports ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'ex',
      lead: 'Діаграми без років. Body 2 = решта: metals, other goods і agriculture. Усі підказки відкриті.',
      words: [['the remaining categories','решта категорій'],['broadly similar','приблизно однакові'],['the only … with a notable difference','єдина … з помітною різницею'],['exactly double','рівно вдвічі'],['recorded for','зафіксовано для']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Решта категорій: крок за кроком', steps: [
            { title: 'Схожі категорії', ua: 'Які дві категорії майже однакові в обох економіках? Дві цифри через respectively.', frame: 'Metals and other goods are broadly similar in the two economies, at …' },
            { title: 'Виняток', ua: 'Яка категорія з решти має помітну різницю?', frame: 'Agriculture is the only remaining category with a notable difference: …' },
            { title: 'Множник', ua: 'Яка пропорція між двома цифрами?', frame: '…, exactly double the figure recorded for …' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про решту категорій',
          task: '2–3 речення. Не повторюй структуру Body 1.',
          hint: 'Metals: 11 і 10. Other goods: 11 і 12. Agriculture: 9 і 18 (вдвічі).',
          rows: 5, min: 15,
          models: [
            ['Модель A', '<mark>The remaining categories</mark> show smaller differences. Metals account for 11% and 10% <mark>respectively</mark>, and other goods for 11% and 12%, so these two categories are <mark>broadly similar</mark> in the two economies. Agriculture is <mark>the only remaining category with a notable difference</mark>: it makes up 18% of Economy B’s exports, <mark>exactly double</mark> the 9% <mark>recorded for</mark> Economy A.'],
            ['Модель B', '<mark>In the other categories</mark> the two economies are much closer. Metals and other goods <mark>each account for around a tenth</mark> of exports in both. <mark>The one exception is</mark> agriculture, which <mark>is twice as large in Economy B</mark> (18%) as in Economy A (9%).']],
          after: 'Порівняй: чи об’єднав(ла) ти схожі категорії в одне речення? Чи названо виняток? Це і є «групування», а не перелік.',
          check: CHK_S }
      ] },

    /* ---------- Раунд 2 · Commuting ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'cm',
      lead: 'Діаграми з роками (Past Simple, мова змін). Body 2 = cycling, working from home і walking: три «малі» категорії.',
      words: [['nearly doubled','майже подвоївся'],['grew sevenfold','зріс у сім разів'],['changed very little','майже не змінився'],['rising slightly','трохи зросши']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Cycling, WFH і walking: крок за кроком', steps: [
            { title: 'Найпомітніше зростання (множник)', ua: 'Яка категорія зросла найбільше у відношенні?' },
            { title: 'Друга категорія зі зростанням', ua: 'Яка ще категорія помітно змінилась? Який множник або різниця?' },
            { title: 'Категорія без змін', ua: 'Яка категорія майже не змінилась? Покажи цифри.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про cycling, WFH і walking',
          task: '2–3 речення. Множники замість двох цифр: nearly doubled, sevenfold.',
          hint: 'Cycling: 8 → 15. WFH: 1 → 7. Walking: 9 → 10.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'The three smaller modes all grew, but at very different rates. <mark>Cycling nearly doubled</mark>, from 8% to 15%, and <mark>working from home grew sevenfold</mark>, from just 1% to 7%. Walking, by contrast, <mark>changed very little</mark>, <mark>rising slightly</mark> from 9% to 10%.'],
            ['Модель B', 'Among the smaller categories, the <mark>most dramatic change</mark> was in working from home, which <mark>rose from a mere 1% to 7%</mark>. Cycling also became considerably more popular, <mark>almost doubling</mark> to 15%, while walking <mark>remained stable at around a tenth</mark>.']],
          after: 'Зверни увагу: множник (<i>sevenfold</i>) замінює пару цифр і робить речення сильнішим. Walking показує, що не всі категорії змінились.',
          check: CHK_T }
      ] },

    /* ---------- Раунд 3 · Age structure ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'ag',
      lead: 'Три кола без років: Present Simple. Body 2 = група 15–59. Вона скрізь найбільша: у чому її історія?',
      words: [['the largest group in every country','найбільша група в кожній країні'],['ranging from … to …','від … до …'],['much smaller differences','набагато менші відмінності'],['than for','ніж для']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Група 15–59: план (за потреби)', collapsed: true, steps: [
            { title: 'Позиція групи', ua: 'Чи найбільша вона в кожній країні?' },
            { title: 'Діапазон', ua: 'Від якої цифри до якої (з країнами)?' },
            { title: 'Порівняння з Body 1', ua: 'Чи різниця між країнами більша, чи менша, ніж для 0–14 і 60+?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про групу 15–59',
          task: '2–3 речення. Згадай діапазон і порівняй його з іншими групами.',
          rows: 5, min: 15,
          models: [
            ['Модель A', 'People of working age (15–59) <mark>form the largest group in every country</mark>, <mark>ranging from</mark> 51% in Country C <mark>to</mark> 64% in Country B, with Country A at 58%. <mark>The differences here are much smaller than for</mark> the other two age groups.'],
            ['Модель B', '<mark>Meanwhile</mark>, the 15–59 group is the majority everywhere, at 58%, 64% and 51% in Countries A, B and C <mark>respectively</mark>. <mark>This is the most stable group</mark>: the gap between the highest and lowest figures is only 13 percentage points.']],
          after: 'Ти тричі написав(ла) Body 2 на різних діаграмах: «решта» об’єднана, виняток названий, різниця показана множником або діапазоном.',
          check: CHK_S }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Об’єднувати дрібні категорії замість опису кожної</li>' +
        '<li>Називати виняток і показувати різницю через множник або діапазон</li>' +
        '<li>Будувати Body 2 як продовження Body 1, а не повтор його структури</li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Final Task: пишеш повну відповідь самостійно (Introduction + Overview + Body 1 + Body 2).</p>' }
    ]
  };
})();
