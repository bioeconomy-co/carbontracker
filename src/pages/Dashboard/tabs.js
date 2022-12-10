import dataAdx from '../../data/data-adx.json';
import dataAsx200 from '../../data/data-asx200.json';
import dataWef100 from '../../data/data-wef100.json';

const tabs = [
  {
    name: 'ADX',
    data: calcDiffs(dataAdx),
  },
  {
    name: 'ASX 200',
    data: calcDiffs(dataAsx200),
  },
  {
    name: 'WEF 100',
    data: calcDiffs(dataWef100),
  },
];
// console.log('tabs', tabs);

function calcDiffs(data) {
  return data.map((row) => {
    const diffs = Object.entries(row).reduce((acc, [key, value]) => {
      let diff;
      // console.log(key, value);

      if (key.startsWith('fp') && value) {
        const currYear = key.substring(2, 6);
        if (currYear === '2022' || currYear === '2021') {
          const prevYear = {
            2022: '2021',
            2021: '2020',
          }[currYear];
          const prevYearKey = key.replace(currYear, prevYear);
          const prevYearValue = row[prevYearKey];
          if (prevYearValue !== undefined) {
            diff = value - prevYearValue;
          }
        }
      }

      return {
        ...acc,
        ...(key.startsWith('fp') &&
          value && {
            [`${key}_diff`]: diff,
          }),
      };
    }, {});
    return { ...row, ...diffs };
  });
}

export { tabs, calcDiffs };
