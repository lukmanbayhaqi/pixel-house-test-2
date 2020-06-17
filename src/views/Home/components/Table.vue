<template>
  <div class="table">
    <FilterSearch />
    <v-table
      is-horizontal-resize
      style="width:90vw"
      :columns="columns"
      :table-data="tableData"
      :multiple-sort="multipleSort"
      @sort-change="sortChange"
      :select-all="selectALL"
      :select-change="selectChange"
      :select-group-change="selectGroupChange"
    ></v-table>
    <div class="btn-group">
      <sui-button
        id="btn-bulk-edit"
        @click="bulkEdit"
        :disabled="dataBulk.length === 0 ? true : false"
        color="blue"
        >edit</sui-button
      >
      <sui-button
        @click="bulkDelete"
        :disabled="dataBulk.length === 0 ? true : false"
        color="red"
        >delete</sui-button
      >
    </div>
  </div>
</template>

<script>
// import dummyColumn from '@/dummy/dummyColumn.js';
import FilterSearch from './FilterSearch.vue';

export default {
  name: 'Table',
  data() {
    return {
      multipleSort: true,
      nameStatus: 'asc',
      usernameStatus: 'asc',
      dataBulk: [],
      updateArr: null,
      deleteArr: null,
      selectName: null,
      selectUsername: null,
    };
  },
  methods: {
    customComp(params) {
      console.log(params);
    },
    sortChange(params) {
      let { name, username } = params;
      let temp = this.$store.state.table.columns;
      if (this.nameStatus !== name) {
        if (name === 'asc') {
          temp[1].orderBy = 'asc';
          this.nameStatus = 'asc';
        } else if (name === 'desc') {
          temp[1].orderBy = 'desc';
          this.nameStatus = 'desc';
        } else {
          temp[1].orderBy = 'asc';
          this.nameStatus = 'asc';
        }
        if (temp[1].orderBy === 'asc') {
          this.tableData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (temp[1].orderBy === 'desc') {
          this.tableData.sort((a, b) => b.name.localeCompare(a.name));
        }
      } else if (this.usernameStatus !== username) {
        if (username === 'asc') {
          temp[2].orderBy = 'asc';
          this.usernameStatus = 'asc';
        } else if (username === 'desc') {
          temp[2].orderBy = 'desc';
          this.usernameStatus = 'desc';
        } else {
          temp[2].orderBy = 'asc';
          this.usernameStatus = 'asc';
        }
        if (temp[2].orderBy === 'asc') {
          this.tableData.sort((a, b) => a.username.localeCompare(b.username));
        } else if (temp[2].orderBy === 'desc') {
          this.tableData.sort((a, b) => b.username.localeCompare(a.username));
        }
      }
      this.$store.commit('SET_COLUMNS', temp);
    },
    selectALL(selection) {
      this.dataBulk = selection;
      console.log('select-aLL', selection);
    },
    selectChange(selection, rowData) {
      console.log('select-change', selection, rowData);
    },
    selectGroupChange(selection) {
      this.dataBulk = selection;
      console.log('select-group-change', selection);
    },
    edit(index) {
      this.$store.commit('SET_OPEN_EDIT', true);
      this.$store.commit('SET_DATA_EDIT', this.tableData[index]);
      this.$store.commit('SET_INDEX_EDIT', index);
    },
    destroy(index) {
      this.$store.commit('SET_OPEN_DELETE', true);
      this.$store.commit('SET_DATA_DELETE', this.tableData[index]);
    },
    bulkEdit() {
      this.$store.commit('SET_OPEN_BULK_EDIT');
      this.$store.commit('SET_DATA_BULK_EDIT', this.dataBulk);
      this.dataBulk = [];
    },
    bulkDelete() {
      let tableData = this.$store.state.table.tableData.slice(0);
      if (tableData.length === this.dataBulk.length) {
        this.$store.commit('SET_TABLE_DATA', []);
      } else {
        let temp = [];
        tableData.forEach((element, i) => {
          this.dataBulk.forEach(el => {
            if (
              el.name === element.name &&
              el.username === element.username &&
              el.email === element.email &&
              el.address === element.address
            ) {
              temp.push(i);
            }
          });
        });
        temp.reverse();
        temp.forEach(el => {
          tableData.splice(el, 1);
        });
        this.$store.commit('SET_TABLE_DATA', tableData);
        this.dataBulk = [];
      }
    },
    rowClick(rowIndex) {
      this.$store.commit('SET_OPEN_DESC', true);
      this.$store.commit('SET_INDEX_DESC', rowIndex);
    },
    dom() {
      setTimeout(() => {
        this.updateArr = document.querySelectorAll('.btn-edit');
        this.deleteArr = document.querySelectorAll('.btn-delete');
        this.selectName = document.querySelectorAll('.row-name');
        this.selectUsername = document.querySelectorAll('.row-username');
      }, 500);
      if (this.updateArr)
        this.updateArr.forEach((el, i) => {
          el.addEventListener('click', () => {
            this.edit(i);
          });
        });
      if (this.deleteArr)
        this.deleteArr.forEach((el, i) => {
          el.addEventListener('click', () => {
            this.destroy(i);
          });
        });
      if (this.selectName)
        this.selectName.forEach((el, i) => {
          el.addEventListener('click', () => {
            this.rowClick(i);
          });
        });
      if (this.selectUsername)
        this.selectUsername.forEach((el, i) => {
          el.addEventListener('click', () => {
            this.rowClick(i);
          });
        });
    },
  },
  computed: {
    tableData() {
      this.dom();
      if (this.$store.state.table.tableFilter.length !== 0) {
        return this.$store.state.table.tableFilter;
      } else {
        return this.$store.state.table.tableData;
      }
    },
    columns() {
      return this.$store.state.table.columns;
    },
  },
  mounted() {
    this.dom();
  },
  components: {
    FilterSearch,
  },
};
</script>
