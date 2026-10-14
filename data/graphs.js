/* Діаграми Module 2 (Pie Charts). Один раз описані тут: використовуються в усіх уроках.
   pies[] — кругові діаграми по порядку; slices[] у кожній діаграмі мають ОДНАКОВИЙ порядок категорій; сума = 100. */
(function () {
  var C = { blue: '#2E5A88', orange: '#B45F06', green: '#4A7C59', pink: '#C94F7C', purple: '#7A5AA0', grey: '#6E7468', teal: '#1F6A80', dark: '#4A4F44' };
  function pies(cats, sets) {
    return sets.map(function (st) {
      return { label: st.label, slices: cats.map(function (c, i) { return { name: c[0], color: c[1], value: st.v[i] }; }) };
    });
  }
  window.GRAPHS = {
    /* Практика · Раунд 1: одна мить, різні групи (без дат) → тільки порівняння, Present Simple */
    ex: {
      name: 'Exports of two economies', kind: 'static',
      title: 'Composition of Exports in Two Economies, by Type of Goods',
      svgTitle: 'Composition of exports in two economies',
      pies: pies([['Oil & gas', C.dark], ['Metals', C.grey], ['Agriculture', C.green], ['Machinery', C.blue], ['Electronics', C.purple], ['Other goods', C.orange]],
        [{ label: 'Economy A', v: [64, 11, 9, 3, 2, 11] }, { label: 'Economy B', v: [4, 10, 18, 30, 26, 12] }])
    },
    /* Раунд 2: два роки, та сама група → мова змін, Past Simple */
    cm: {
      name: 'Commuting', kind: 'time',
      title: 'How Commuters Travelled to Work, 2005 and 2025',
      svgTitle: 'How commuters travelled to work, 2005 and 2025',
      pies: pies([['Car', C.dark], ['Public transport', C.blue], ['Cycling', C.green], ['Walking', C.orange], ['Working from home', C.pink]],
        [{ label: '2005', v: [55, 27, 8, 9, 1] }, { label: '2025', v: [38, 30, 15, 10, 7] }])
    },
    /* Раунд 3: три діаграми без дат */
    ag: {
      name: 'Age structure', kind: 'static',
      title: 'Age Structure of the Population in Three Countries',
      svgTitle: 'Age structure of the population, three countries',
      pies: pies([['0–14 years', C.green], ['15–59 years', C.blue], ['60+ years', C.orange]],
        [{ label: 'Country A', v: [12, 58, 30] }, { label: 'Country B', v: [22, 64, 14] }, { label: 'Country C', v: [44, 51, 5] }])
    },
    /* Фінал 1 · без дат, з підказками */
    fc: {
      name: 'Communication', kind: 'static',
      title: 'Preferred Methods of Communication, Two Age Groups',
      svgTitle: 'Preferred methods of communication, two age groups',
      pies: pies([['Social media', C.blue], ['Text messaging', C.green], ['Phone calls', C.orange], ['Email', C.purple], ['Other', C.grey]],
        [{ label: '18–30 year olds', v: [48, 22, 12, 10, 8] }, { label: '50–65 year olds', v: [14, 20, 32, 28, 6] }])
    },
    /* Фінал 2 · два роки */
    ta: {
      name: 'Tourist accommodation', kind: 'time',
      title: 'Where Tourists in One Region Stayed, 2010 and 2024',
      svgTitle: 'Where tourists stayed, 2010 and 2024',
      pies: pies([['Hotels', C.blue], ['Private rentals', C.pink], ['Friends & relatives', C.green], ['Camping', C.orange], ['Other', C.grey]],
        [{ label: '2010', v: [48, 15, 18, 12, 7] }, { label: '2024', v: [35, 38, 12, 9, 6] }])
    },
    /* Фінал 3 · як на іспиті, три діаграми */
    lu: {
      name: 'Land use', kind: 'static',
      title: 'Land Use in Three Regions',
      svgTitle: 'Land use in three regions',
      pies: pies([['Agriculture', C.green], ['Forest', C.dark], ['Urban', C.blue], ['Other', C.grey]],
        [{ label: 'Region 1', v: [55, 25, 12, 8] }, { label: 'Region 2', v: [30, 48, 15, 7] }, { label: 'Region 3', v: [20, 18, 52, 10] }])
    }
  };
})();
