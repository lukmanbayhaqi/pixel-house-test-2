<template>
  <sui-modal v-model="open">
    <sui-modal-header>Table Description</sui-modal-header>
    <sui-modal-content>
      <h5>Name :</h5>
      {{ dataDesc.name }}
      <h5>Username :</h5>
      {{ dataDesc.username }}
      <h5>Email :</h5>
      {{ dataDesc.email }}
      <h5>Address :</h5>
      {{ dataDesc.address }}
    </sui-modal-content>
    <sui-modal-actions style="display: flex; justify-content: center;">
      <sui-button-group class="btn-group">
        <sui-button color="red" inverted @click.prevent="close"
          >Close</sui-button
        >
      </sui-button-group>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
export default {
  name: 'DescModal',
  computed: {
    open() {
      return this.$store.state.modal.openDesc;
    },
    dataDesc() {
      const index = this.$store.state.modal.indexDesc;
      if (this.$store.state.table.tableFilter.length !== 0) {
        return this.$store.state.table.tableFilter[index];
      }
      return this.$store.state.table.tableData[index];
    },
  },
  methods: {
    close() {
      this.$store.commit('SET_OPEN_DESC', false);
    },
  },
};
</script>
