<template>
  <div id="app">
    <sym-data-table :items="testItems" :isCard="true" :columns="testColumns" @selectedRowsChanged="changed">
      <div slot="table-commands"></div>
    </sym-data-table>
  </div>
</template>

<script>

import SymDataTable from '../src/components/SymDataTable/SymDataTable'

export default {
  name: 'app',
  components: {
      SymDataTable
  },

  data () {
    return {
      testItems: [

      ],
      testColumns: [

      ] 
    }
  },
  
  methods: {
    changed (selectedRows) {

    }
  },

  created () {    
    this.testItems = [
      {
        id: 1, description: 'Some long text description', code: 'ABC 123', total: '1234567890'
      },
      {
        id: 2, description: 'Some long text description', code: 'ABC 123', total: '1234567890'
      }
    ]

    this.testColumns = [
      {
        name: 'description',
        type: 'string',
        label: 'Description',
        width: 'flex'
      },
      {
        name: 'code',
        type: 'string',
        label: 'Code',
        width: 150
      },      
      {
        name: 'total',
        type: 'currency',
        label: 'Total Amount',
        width: 150
      }      
      
    ]
  }
}
</script>

<style>
</style>
