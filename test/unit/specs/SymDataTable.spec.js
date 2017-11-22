import Vue from 'vue'
import SymDataTable from '@/components/sym-data-table/SymDataTable'

describe('SymDataTable.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SymDataTable)
    const vm = new Constructor().$mount()
    expect(vm).not.toBeNull()
  })
})
