<template>
  <div>
    <p>
      Filter by : <strong>{{ active }}</strong>
    </p>
    <div class="filterSearch">
      <sui-button
        color="green"
        inverted
        @click="setActive('name')"
        :active="active === 'name' ? true : false"
        >Name</sui-button
      >
      <sui-button
        color="green"
        inverted
        @click="setActive('username')"
        :active="active === 'username' ? true : false"
        >Username</sui-button
      >
      <sui-input
        transparent
        icon="search"
        placeholder="Search..."
        v-model="search"
        @change="filter"
      />
      <sui-button color="orange" inverted @click="reset">Reset</sui-button>
    </div>
  </div>
</template>

<script>
import dummyColumn from '@/dummy/dummyColumn.js';

export default {
  name: 'FilterSearch',
  data() {
    return {
      search: '',
      active: 'name',
    };
  },
  computed: {
    filter() {
      // console.log('table-data', this.$store.state.table.tableData);
      // console.log('table-filter', this.$store.state.table.tableFilter);
      const payload = this.$store.state.table.tableData.slice(0);
      // console.log('payload', dummyColumn);
      if (this.search === '') {
        this.$store.commit('SET_TABLE_DATA', payload);
        this.$store.commit('SET_TABLE_FILTER', []);
        // console.log(this.$store.state.table.tableData, 'tabledata');
      } else {
        const data = this.$store.state.table.tableData.slice(0);
        const dataFilter = data.filter(el => {
          if (this.active === 'name')
            return (
              el.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            );
          else if (this.active === 'username')
            return (
              el.username.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            );
        });
        this.$store.commit('SET_TABLE_FILTER', dataFilter);
        this.$store.commit('SET_COLUMNS', dummyColumn);
        console.log(dataFilter, 'dataFilter');
      }
      return 'x';
    },
  },
  methods: {
    setActive(payload) {
      payload === 'name' ? (this.active = 'name') : (this.active = 'username');
    },
    reset() {
      this.search = '';
    },
  },
};
</script>
