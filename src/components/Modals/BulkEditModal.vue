<template>
  <sui-modal v-model="open">
    <sui-modal-header>Bulk Edit Table</sui-modal-header>
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
  name: 'BulkEditModal',
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
      return this.$store.state.modal.openBulkEdit;
    },
  },
  methods: {
    submit() {
      const data = this.$store.state.table.tableData.slice(0);
      const dataBulk = this.$store.state.modal.dataBulkEdit;
      if (data.length === dataBulk.length) {
        let arr = [];
        data.forEach(el => {
          let obj = {};
          if (this.name !== '') obj.name = this.name;
          else obj.name = el.name;
          if (this.username !== '') obj.username = this.username;
          else obj.username = el.username;
          if (this.email !== '') obj.email = this.email;
          else obj.email = el.email;
          if (this.address !== '') obj.address = this.address;
          else obj.address = el.address;
          arr.push(obj);
        });
        this.$store.commit('SET_TABLE_DATA', arr);
      } else {
        let arr = [];
        data.forEach((element, i) => {
          dataBulk.forEach(el => {
            if (
              el.name === element.name &&
              el.username === element.username &&
              el.email === element.email &&
              el.address === element.address
            ) {
              let obj = {};
              if (this.name !== '') obj.name = this.name;
              else obj.name = element.name;
              if (this.username !== '') obj.username = this.username;
              else obj.username = element.username;
              if (this.email !== '') obj.email = this.email;
              else obj.email = element.email;
              if (this.address !== '') obj.address = this.address;
              else obj.address = element.address;
              arr.push([obj, i]);
            }
          });
        });
        arr.forEach(el => {
          data.splice(el[1], 1, el[0]);
        });
        this.$store.commit('SET_TABLE_DATA', data);
      }
      this.name = '';
      this.username = '';
      this.email = '';
      this.address = '';
      this.$store.commit('SET_OPEN_BULK_EDIT');
      this.$store.commit('SET_DATA_BULK_EDIT', null);
    },
    cancel() {
      this.$store.commit('SET_OPEN_BULK_EDIT');
    },
  },
};
</script>
