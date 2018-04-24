import { expect } from 'chai'
import { mount } from 'vue-test-utils'
import SymDataTable from '@/components/sym-data-table/SymDataTable'

describe('SymDataTable.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(SymDataTable, {
      propsData: {items: [], title: 'Test'}
    })
    const vm = wrapper.vm
    expect(vm).to.not.equal(null)
  })
  it('should group rows using group by criteria', () => {
    const items = [
      { id: 1, category: 'group1' },
      { id: 2, category: 'group1' },
      { id: 3, category: 'group2' },
      { id: 4, category: 'group3' },
      { id: 5, category: 'group3' }
    ]
    const wrapper = mount(SymDataTable, {
      propsData: { items, groupBy: 'category', title: 'Test' }
    })

    const groups = wrapper.vm.groups
    expect(groups.length).to.equal(3)
    expect(groups[0].items.length).to.equal(2)
    expect(groups[0].items[0].id).to.equal(1)
    expect(groups[0].items[1].id).to.equal(2)
    expect(groups[1].items.length).to.equal(1)
    expect(groups[1].items[0].id).to.equal(3)
    expect(groups[2].items.length).to.equal(2)
    expect(groups[2].items[0].id).to.equal(4)
    expect(groups[2].items[1].id).to.equal(5)
  })
  it('should create one group with all items if there is no group by criteria', () => {
    const items = [
      { id: 1, category: 'group1' },
      { id: 2, category: 'group1' },
      { id: 3, category: 'group2' },
      { id: 4, category: 'group3' },
      { id: 5, category: 'group3' }
    ]
    const wrapper = mount(SymDataTable, {
      propsData: { items, title: 'Test' }
    })

    const groups = wrapper.vm.groups
    expect(groups.length).to.equal(1)
    expect(groups[0].items.length).to.equal(5)
    expect(groups[0].items[0].id).to.equal(1)
    expect(groups[0].items[1].id).to.equal(2)
    expect(groups[0].items[2].id).to.equal(3)
    expect(groups[0].items[3].id).to.equal(4)
    expect(groups[0].items[4].id).to.equal(5)
  })
  it("should override the group''s header when a group header formatter has been submitted", () => {
    const items = [
      { id: 1, category: 'group1' },
      { id: 2, category: 'group1' },
      { id: 3, category: 'group2' },
      { id: 4, category: 'group3' },
      { id: 5, category: 'group3' }
    ]
    const wrapper = mount(SymDataTable, {
      propsData: {
        items,
        title: 'Test',
        groupBy: 'category',
        groupHeaderFormatter: (group) => {
          return `${group.items.length} element(s)`
        }
      }
    })

    const groups = wrapper.vm.groups
    expect(groups.length).to.equal(3)
    expect(groups[0].header).to.equal('2 element(s)')
    expect(groups[1].header).to.equal('1 element(s)')
    expect(groups[2].header).to.equal('2 element(s)')
  })
})
