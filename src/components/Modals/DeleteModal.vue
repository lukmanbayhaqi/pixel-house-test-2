<template>
  <div class="destroy">
    <sui-modal v-model="open">
      <sui-modal-header
        >Are you sure want to delete this Table?</sui-modal-header
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
  computed: {
    open() {
      return this.$store.state.modal.openDelete;
    },
  },
  methods: {
    cancel() {
      this.$store.commit('SET_OPEN_DELETE', false);
    },
    destroy() {
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
      this.$store.commit('SET_OPEN_DELETE', false);
    },
  },
};
</script>
