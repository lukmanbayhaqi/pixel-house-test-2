<template>
  <div class="destroy">
    <sui-modal v-model="open">
      <sui-modal-header
        >Are you sure want to {{ title }} this Table?</sui-modal-header
      >
      <sui-modal-content class="destroy-content">
        This Table will deleted permanently
      </sui-modal-content>
      <sui-modal-actions style="display: flex; justify-content: center;">
        <sui-button-group class="btn-group">
          <sui-button color="red" inverted @click.prevent="cancel"
            >Cancel</sui-button
          >
          <sui-button color="green" inverted @click="destroy"
            >Submit</sui-button
          >
        </sui-button-group>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name: 'DeleteModal',
  data() {
    return {
      title: '',
    };
  },
  computed: {
    open() {
      if (this.$store.state.modal.openBulkDelete) {
        this.setTitle('bulk delete');
        return this.$store.state.modal.openBulkDelete;
      }
      this.setTitle('delete');
      return this.$store.state.modal.openDelete;
    },
  },
  methods: {
    cancel() {
      if (this.$store.state.modal.openDelete) {
        this.$store.commit('SET_OPEN_DELETE', false);
      } else if (this.$store.state.modal.openBulkDelete) {
        this.$store.commit('SET_OPEN_BULK_DELETE', false);
      }
    },
    destroy() {
      if (this.$store.state.modal.openDelete) {
        const {
          name,
          username,
          email,
          address,
        } = this.$store.state.modal.dataDelete;
        let index = null;
        const tableData = this.$store.state.table.tableData;
        tableData.map((el, i) => {
          if (
            el.name === name &&
            el.username === username &&
            el.email === email &&
            el.address === address
          ) {
            index = i;
          }
        });
        tableData.splice(index, 1);
        this.$store.commit('SET_TABLE_DATA', tableData);
        this.$store.commit('SET_INDEX_DELETE', null);
      } else if (this.$store.state.modal.openBulkDelete) {
        const dataBulk = this.$store.state.modal.dataBulkDelete;
        let tableData = this.$store.state.table.tableData.slice(0);
        if (tableData.length === dataBulk.length) {
          this.$store.commit('SET_TABLE_DATA', []);
        } else {
          let temp = [];
          tableData.forEach((element, i) => {
            dataBulk.forEach(el => {
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
          this.$store.commit('SET_DATA_BULK_DELETE', []);
        }
      }
      this.cancel();
    },
    setTitle(payload) {
      this.title = payload;
    },
  },
};
</script>
