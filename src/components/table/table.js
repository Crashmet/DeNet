const dataUser = [
  {
    '#': '#1',
    bug: 'Button not working',
    app: 'DeNet Payments',
    status: 'New',
    created: '01/29/2022',
  },
  {
    '#': '#567',
    bug: 'App not loading',
    app: 'DeNet Pass',
    status: 'On review',
    created: '01/29/2022',
  },
  {
    '#': '#56',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
  },
  {
    '#': '#56',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
  },
  {
    '#': '#56',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
  },
  {
    '#': '#56',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
  },
  {
    '#': '#45',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
  },
  {
    '#': '#45',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
  },
  {
    '#': '#45',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
  },
  {
    '#': '#45',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
  },
  {
    '#': '#45',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
  },
  {
    '#': '#45',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
  },
  {
    '#': '#234',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
  },
  {
    '#': '#234',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
  },
  {
    '#': '#234',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
  },
  {
    '#': '#234',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
  },
  {
    '#': '#234',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
  },
  {
    '#': '#234',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
  },
];

new gridjs.Grid({
  columns: ['#', 'BUG', 'App', 'Status', 'Created'],
  sort: true,
  resizable: true,

  style: {
    td: {
      border: '0',
      'border-bottom': '1px solid #F6F6F6',
    },
    table: {
      'font-size': '16px',
      color: '#232323',
    },
  },

  data: dataUser.map((el) => [
    el['#'],
    el.bug,
    el.app,
    gridjs.html(
      `<div class="${el.status.toLocaleLowerCase()}__block_status block_status">` +
        el.status +
        '</div>'
    ),
    el.created,
  ]),
}).render(document.getElementById('wrapper-user'));
