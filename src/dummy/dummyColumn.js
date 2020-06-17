export default [
  {
    width: 60,
    titleAlign: 'center',
    columnAlign: 'center',
    type: 'selection',
  },
  {
    field: 'name',
    title: 'Name',
    orderBy: 'asc',
    width: 50,
    titleAlign: 'center',
    columnAlign: 'center',
    isResize: true,
    formatter: rowData => {
      return `<span>
      <a href="#" class="row-name">${rowData.name}</a>
      </span>`;
    },
  },
  {
    field: 'username',
    title: 'Username',
    orderBy: 'asc',
    width: 50,
    titleAlign: 'center',
    columnAlign: 'center',
    isResize: true,
    formatter: rowData => {
      return `<span>
      <a href="#" class="row-username">${rowData.username}</a>
      </span>`;
    },
  },
  {
    field: 'email',
    title: 'Email',
    width: 50,
    titleAlign: 'center',
    columnAlign: 'center',
    isResize: true,
  },
  {
    field: 'address',
    title: 'Address',
    width: 180,
    titleAlign: 'center',
    columnAlign: 'center',
    isResize: true,
  },
  {
    field: 'options',
    title: 'Options',
    width: 50,
    titleAlign: 'center',
    columnAlign: 'center',
    isResize: true,
    formatter: () => {
      return `<span>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
      </span>`;
    },
  },
];
