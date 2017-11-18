<template>

  <!-- main container -->
  <div class="sym-table" :class="{ card: isCard }">

    <!-- table header -->
    <div class="sym-table-header">

      <!-- Title -->
      <div class="sym-table-header-content">{{ title }}</div>
      
      <!-- Optional commands -->
      <div class="sym-table-icons">

        <!-- actions -->
        <slot name="table-commands"></slot>

        <!-- collapsible -->
        <div v-if="collapsible">
          <input type="button" @click="toggleCollapse" value="X" />
        </div>

      </div>

    </div>
    <!-- END table header -->

    <!-- data table -->
    <table class="unselectable" v-if="!collapsed">

      <!-- header -->
      <thead>
        <tr>

          <!-- selection -->
          <th class="begin"></th>

          <!-- headers definition -->
          <th 
            v-for="(col, colIndex) in columns" 
            :key="colIndex" 
            :class="`head-${col.type}`"
            :width="isNaN(col.width) ? 'auto' : col.width">
            {{ col.label}}
          </th>

          <th class="end"></th>

        </tr>
      </thead>

      <!-- data content -->
      <tbody>
        <tr 
          @click="toggleRow(item)" 
          v-for="(item, index) in items" :key="index" 
          :class="{ selected: selectedRows.indexOf(item) > -1 }">

          <!-- selection -->
          <td class="begin" 
          :class="{ 'begin-selected': selectedRows.indexOf(item) > -1 }"></td>


          <!-- rows with column definition -->
          <td 
          v-for="(col, colIndex) in columns" 
          :key="colIndex" 
          :class="`col-${col.type}`">
            {{ item[col.name] }}
          </td>

          <td class="end"></td>

        </tr>
      </tbody>

      <!-- optional footer -->      
      <tfoot v-if="hasFooter">
        <tr>

        </tr>
      </tfoot>

    </table>
    <!-- END data table -->

  </div>

</template>
<script>
/**
 * SymDataTable (usage sym-data-table)
 * A Data Table component using Material Design
 */
export default {
  name: 'sym-data-table',

  methods: {

    /**
      * Triggered when a TR is selected/unselected
      * bound to a single click/tap event
     */
    toggleRow: function (item) {
      /* get the selected row */
      let index = this.selectedRows.indexOf(item)

      /* if it's selected, unselected or vice-versa */
      if (index > -1) {
        this.selectedRows.splice(index, 1)
      } else {
        this.selectedRows.push(item)
      }

      /* notify */
      this.$emit('selectedRowsChanged', this.selectedRows)
     },

    /**
      * switch between collapsed mode
     */
    toggleCollapse: function () {
      this.collapsed = !this.collapsed
    }

  },

  data () {
    return {
      /* placeholder for selected rows */
      selectedRows: [],
      /* placeholder for collapsed state */
      collapsed: false
    }
  },

  props: {
    
    /* */
    title: {
      type: String,
      required: true,
      default: 'sym-data-table'
    },

    /* when true, provide a card with shadow and 16px padding */
    isCard: {
      type: Boolean,
      required: false,
      default: false
    },

    /* when true, display a collapse icon and make the table collapsible */
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },

    /* when true, display a footer */
    hasFooter: {
      type: Boolean,
      required: false,
      default: false
    },

    /* the items data-bound to the data table */
    items: {
      type: Array,
      required: true,
      default: () => []
    },

    /* the columns configuration */
    columns: {
      type: Array,
      required: false,
      default: () => []
    }

  }
}
</script>

<style lang="css" scoped>

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .selected {
    background-color: rgba(0, 0, 0, 0.06);
  }

  .sym-table {
    font-family: 'Roboto', sans-serif;
  }

  .sym-table > table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    border: none;
  }

  td.begin {
    width: 13px;
    border-left: 3px solid rgba(0, 0, 0, 0);
  }

  td.begin-selected {
    border-left: 3px solid #FFA300;
  }

  td.end {
    width: 16px;
  }

  th {
    font-weight: 400 !important;
  }

  .sym-table > table > thead > tr {
    font-size: 12px;
    font-weight: 400 !important;
    color: rgba(0, 0, 0, 0.54);
    height: 42px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);    
  }

  .sym-table > table > tbody > tr {
    font-size: 13px;
    font-weight: 400 !important;
    color: rgba(0, 0, 0, 0.83);
    height: 36px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);    
  }

  .sym-table-icons {
    float: right;
  }

  .card {
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  .sym-table-header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    height: 47px;
    display: table;
    overflow: hidden;
    width: 100%;
  }

  .sym-table-header-content {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.83);
    display: table-cell;
    vertical-align: middle;
    padding-left: 16px;
  }

  .col-string, 
  .head-string {
    text-align: left;
  }

  .col-currency, 
  .head-currency {
    text-align: right;
  }

</style>
