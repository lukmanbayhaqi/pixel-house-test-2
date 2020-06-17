<template>
  <div>
    <Table />
    <Edit />
    <Destroy />
    <BulkEdit />
    <DescModal />
  </div>
</template>

<script>
import dummyData from '@/dummy/dummyData.js';
import dummyColumn from '@/dummy/dummyColumn.js';
import Table from './components/Table.vue';
import Edit from '@/components/Modals/EditModal.vue';
import Destroy from '@/components/Modals/DeleteModal.vue';
import BulkEdit from '@/components/Modals/BulkEditModal.vue';
import DescModal from '@/components/Modals/DescModal.vue';

export default {
  name: 'Home',
  components: {
    Table,
    Edit,
    Destroy,
    BulkEdit,
    DescModal,
  },
  created() {
    this.$store.commit('SET_TABLE_DATA', dummyData);
    this.$store.commit('SET_COLUMNS', dummyColumn);
  },
};
</script>
