/**
    Necessary Data for candidate JSON:
      - name: e.g. Bernie Sanders
      - positive: {
        percent: 
        total:
      }
      - negative: {
        percent:
        total:
      }
      - volume: # tweets
      - mostCommonHashtag:
 */
const data = {
  candidates: [
    {
      name: 'Bernie Sanders',
      party: 'Democrat',
      positive: {
        percent: 60,
        total: 1800
      },
      negative: {
        percent: 40,
        total: 1200
      },
      volume: 3000,
      mostCommonHashtag: 'FeelTheBern'
    },
    {
      name: 'Hillary Clinton',
      party: 'Democrat',
      positive: {
        percent: 37,
        total: 540
      },
      negative: {
        percent: 63,
        total: 1260
      },
      volume: 2000
    },
    {
      name: 'Donald Trump',
      party: 'Republican',
      positive: {
        percent: 14,
        total: 5600
      },
      negative: {
        percent: 86,
        total: 34400
      },
      volume: 40000
    },
    {
      name: 'Ted Cruz',
      party: 'Republican',
      positive: {
        percent: 29,
        total: 580
      },
      negative: {
        percent: 71,
        total: 1420
      },
      volume: 2000
    },
    {
      name: 'John Kasich',
      party: 'Republican',
      positive: {
        percent: 37,
        total: 540
      },
      negative: {
        percent: 63,
        total: 1260
      },
      volume: 2000
    }
  ]
}

export default data;
