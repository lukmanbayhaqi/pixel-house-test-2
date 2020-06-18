<template>
  <sui-modal v-model="open">
    <sui-modal-header>Edit Table</sui-modal-header>
    <sui-modal-content>
      <sui-form @submit.prevent="submit">
        <sui-form-field>
          <label>Name</label>
          <input placeholder="Name" v-model="name" />
        </sui-form-field>
        <sui-form-field>
          <label>Username</label>
          <input placeholder="Username" v-model="username" />
        </sui-form-field>
        <sui-form-field>
          <label>Email</label>
          <input placeholder="Email" v-model="email" />
        </sui-form-field>
        <sui-form-field>
          <label>Address</label>
          <input placeholder="Address" v-model="address" />
        </sui-form-field>
        <sui-button-group class="btn-group">
          <sui-button color="red" inverted @click.prevent="cancel"
            >Cancel</sui-button
          >
          <sui-button type="submit" color="green" inverted>Submit</sui-button>
        </sui-button-group>
      </sui-form>
    </sui-modal-content>
  </sui-modal>
</template>

<script>
export default {
  name: 'EditModal',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      address: '',
    };
  },
  computed: {
    open() {
      if (this.$store.state.modal.openEdit) {
        this.dataEdit();
      }
      return this.$store.state.modal.openEdit;
    },
  },
  methods: {
    cancel() {
      this.$store.commit('SET_OPEN_EDIT', false);
    },
    dataEdit() {
      const {
        name,
        username,
        email,
        address,
      } = this.$store.state.modal.dataEdit;
      this.name = name;
      this.username = username;
      this.email = email;
      this.address = address;
    },
    submit() {
      const payload = {
        name: this.name,
        username: this.username,
        email: this.email,
        address: this.address,
      };
      const {
        name,
        username,
        email,
        address,
      } = this.$store.state.modal.dataEdit;
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

      tableData.splice(index, 1, payload);
      this.$store.commit('SET_TABLE_DATA', tableData);
      this.$store.commit('SET_DATA_EDIT', null);
      this.$store.commit('SET_INDEX_EDIT', null);
      this.cancel();
    },
  },
};
</script>
