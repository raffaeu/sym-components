<template>
  <div id="app">

    <!-- Table with static array -->
    <h3>Simple Table with static Array</h3>
    <sym-data-table 
      title="Table with static array"
      :items="items_01" 
      :isCard="true" 
      :columns="columns_01" 
      @selectedRowsChanged="changed">
    </sym-data-table>

    <!-- Table with static array -->
    <h3>Simple Table with static Array, multi-select</h3>
    <sym-data-table 
      title="Table with static array, multi-select"
      :multi-select="true"
      :items="items_01" 
      :isCard="true" 
      :columns="columns_01" 
      @selectedRowsChanged="changed">
    </sym-data-table>

    <!-- Table with static array, collapsible -->
    <h3>Simple Table with static Array, collapsible</h3>
    <sym-data-table 
      title="Table collapsible"
      :items="items_01" 
      :isCard="true" 
      :columns="columns_01" 
      @selectedRowsChanged="changed"
      :collapsible="true">
    </sym-data-table>

    <!-- Table with totals -->
    <h3>Simple Table with totals</h3>
    <sym-data-table 
      title="Table collapsible"
      :hasFooter="true"
      :items="items_01" 
      :isCard="true" 
      :columns="columns_01" 
      @selectedRowsChanged="changed">
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
      items_01: [

      ],
      columns_01: [

      ] 
    }
  },
  
  methods: {
    changed (selectedRows) {

    }
  },

  created () {    
    this.items_01 = [
      {
        id: 1, 
        invoiceNr: '1234-ABC', 
        description: 'Dell tower 123 i7 SSD', 
        total: 1250
      },
      {
        id: 2, 
        invoiceNr: '234-YXZ', 
        description: 'Dell Monitor led 32" wide', 
        total: 750
      },
      {
        id: 3, 
        invoiceNr: '234-ABC', 
        description: 'Dell XPS 13" 256GB', 
        total: 2350
      },
      {
        id: 4, 
        invoiceNr: '12345-ABC', 
        description: 'Dell IntelliMouse laser line bluetooth', 
        total: 120
      },
      {
        id: 5, 
        invoiceNr: '1-ABC', 
        description: 'Dell keyboard wireless EN-US blue blacklight', 
        total: 145
      }
    ]

    this.columns_01 = [
      {
        name: 'invoiceNr',
        type: 'string',
        label: 'Invoice #',
        width: 80
      },      
      {
        name: 'description',
        type: 'string',
        label: 'Description',
        width: 'flex'
      },
      {
        name: 'total',
        type: 'currency',
        label: 'Total Amount',
        width: 150,
        hasTotal: true
      }      
      
    ]
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
