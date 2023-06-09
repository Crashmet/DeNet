const props = [
  {
    '#': '#1',
    address: 'd85asa...1kl3',
    bug: 'Button not working',
    app: 'DeNet Payments',
    status: 'New',
    created: '01/29/2022',
    severity: 'Critical',
    priority: 'Urgent',
  },
  {
    '#': '#567',
    address: 'd85asa...1kl3',
    bug: 'App not loading',
    app: 'DeNet Pass',
    status: 'On review',
    created: '01/29/2022',
    severity: 'Medium',
    priority: 'Critical',
  },
  {
    '#': '#56',
    address: 'd85asa...1kl3',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
    severity: 'Low',
    priority: 'Medium',
  },
  {
    '#': '#56',
    address: 'd85asa...1kl3',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
    severity: 'Low',
    priority: 'Medium',
  },
  {
    '#': '#56',
    address: 'd85asa...1kl3',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
    severity: 'Low',
    priority: 'Medium',
  },
  {
    '#': '#56',
    address: 'd85asa...1kl3',
    bug: 'Not claimed',
    app: 'DeNet Storage',
    status: 'In progress',
    created: '01/29/2022',
    severity: 'Low',
    priority: 'Medium',
  },
  {
    '#': '#45',
    address: 'd85asa...1kl3',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
    severity: 'High',
    priority: 'Instant',
  },
  {
    '#': '#45',
    address: 'd85asa...1kl3',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
    severity: 'High',
    priority: 'Instant',
  },
  {
    '#': '#45',
    address: 'd85asa...1kl3',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
    severity: 'High',
    priority: 'Instant',
  },
  {
    '#': '#45',
    address: 'd85asa...1kl3',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
    severity: 'High',
    priority: 'Instant',
  },
  {
    '#': '#45',
    address: 'd85asa...1kl3',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
    severity: 'High',
    priority: 'Instant',
  },
  {
    '#': '#45',
    address: 'd85asa...1kl3',
    bug: 'No award received and',
    app: 'DeNet Payments',
    status: 'Rejected',
    created: '01/29/2022',
    severity: 'High',
    priority: 'Instant',
  },
  {
    '#': '#234',
    address: 'd85asa...1kl3',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
    severity: 'Critical',
    priority: 'Low',
  },
  {
    '#': '#234',
    address: 'd85asa...1kl3',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
    severity: 'Critical',
    priority: 'Low',
  },
  {
    '#': '#234',
    address: 'd85asa...1kl3',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
    severity: 'Critical',
    priority: 'Low',
  },
  {
    '#': '#234',
    address: 'd85asa...1kl3',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
    severity: 'Critical',
    priority: 'Low',
  },
  {
    '#': '#234',
    address: 'd85asa...1kl3',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
    severity: 'Critical',
    priority: 'Low',
  },
  {
    '#': '#234',
    address: 'd85asa...1kl3',
    bug: 'App not loading',
    app: 'DeNet Payments',
    status: 'Solved',
    created: '01/29/2022',
    severity: 'Critical',
    priority: 'Low',
  },
];

new gridjs.Grid({
  columns: [
    '#',
    'Adress',
    'BUG',
    'App',
    'Status',
    'Created',
    'Severity',
    'Priority',
  ],
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

  data: props.map((el) => [
    el['#'],

    gridjs.html(`<div class="created-data-address">` + el.address + '</div>'),
    el.bug,
    el.app,
    gridjs.html(
      `<div class="${el.status.toLocaleLowerCase()}__block_status block_status">` +
        el.status +
        '</div>'
    ),
    gridjs.html(`<div class="created-data-status">` + el.created + '</div>'),
    gridjs.html(
      `<div class="${el.severity.toLocaleLowerCase()}__dot_status dot_status">` +
        '<span>' +
        '</span>' +
        el.severity +
        '</div>'
    ),

    el.priority,
  ]),
}).render(document.getElementById('wrapper-dev'));
