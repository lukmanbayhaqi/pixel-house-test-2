import { shallowMount } from '@vue/test-utils';
import Table from '../../src/views/Home/components/Table.vue';
import FilterSearch from '../../src/views/Home/components/FilterSearch.vue';
import dummyTableData from '../../src/dummy/dummyData.js';
import dummyColumns from '../../src/dummy/dummyColumn.js';

const wrapper = shallowMount(Table, {
  mocks: {
    $store: {
      state: {
        table: {
          tableData: dummyTableData,
          columns: dummyColumns,
          tableFilter: []
        }
      }
    }
  }
});

describe('Table.vue sections', () => {
  it('Will renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('Will find class name on template', () => {
    expect(wrapper.classes('table')).toBe(true)
  })
  it('Will contain Filter component', () => {
    expect(wrapper.contains(FilterSearch)).toBe(true)
  })
  it('Will find table and button', () => {
    expect(wrapper.find('v-table').exists()).toBe(true)
    expect(wrapper.find('sui-button').exists()).toBe(true)
  })
  it('Will find property in data', () => {
    expect(Table.data()).toHaveProperty('multipleSort')
    expect(Table.data()).toHaveProperty('nameStatus')
    expect(Table.data()).toHaveProperty('usernameStatus')
    expect(Table.data()).toHaveProperty('dataBulk')
    expect(Table.data()).toHaveProperty('updateArr')
    expect(Table.data()).toHaveProperty('deleteArr')
    expect(Table.data()).toHaveProperty('selectName')
    expect(Table.data()).toHaveProperty('selectUsername')
  })
  it('Will find property in methods', () => {
    expect(Table.methods).toHaveProperty('sortChange')
    expect(Table.methods).toHaveProperty('selectALL')
    expect(Table.methods).toHaveProperty('selectGroupChange')
    expect(Table.methods).toHaveProperty('edit')
    expect(Table.methods).toHaveProperty('destroy')
    expect(Table.methods).toHaveProperty('bulkEdit')
    expect(Table.methods).toHaveProperty('bulkDelete')
    expect(Table.methods).toHaveProperty('rowClick')
    expect(Table.methods).toHaveProperty('dom')
  })
})