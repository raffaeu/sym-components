<template>

  <!-- main container -->
  <div class="sym-table" :class="{ card: isCard }">

    <!-- table header -->
    <div class="sym-table-header">

      <!-- Title -->
      <div class="sym-table-header-content ripple" @click="toggleCollapse">{{ title }}</div>
      
      <!-- Optional commands -->
      <div class="sym-table-icons">

        <!-- actions -->
        <div name="table-commands">

          <button v-for="(act, actIndex) in actions"
              :disabled="act.disabled" 
              :key="actIndex" 
              class="sym-icon-button"
              :class="{ 'ripple': !act.disabled }"
              @click="actionTriggered(act)">
            <i class="material-icons md-24">{{ act.icon }}</i>
          </button>

          <!-- collapsible -->
          <button v-if="collapsible" class="sym-icon-button sym-icon-button-primary ripple" @click="toggleCollapse">
            <i class="material-icons md-24" :class="`icon-${isCollapsed ? 'down' : 'up'}`">expand_less</i>
          </button>

        </div>

      </div>

    </div>
    <!-- END table header -->

    <!-- data table -->
    <transition name="none">

      <table class="unselectable" v-if="!isCollapsed">

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
              {{ col.label }}
            </th>

            <th class="end"></th>

          </tr>
        </thead>

        <!-- optional footer MUST be before data for XHTML validation -->      
        <tfoot v-if="hasFooter">
          <tr class="footer">

            <!-- footer label -->
            <th class="footer-label" colspan="2">{{ footerLabel }}</th>

            <!-- totals, except first column -->
            <th 
              v-for="(col, colIndex) in totals" 
              :key="colIndex" 
              :class="`head-${col.type}`"
              :width="isNaN(col.width) ? 'auto' : col.width">
              {{ formatValue(col.value, col, col) }}
            </th>

          </tr>
        </tfoot>

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
              {{ formatValue(item[col.name], col, item) }}
            </td>

            <td class="end"></td>

          </tr>
        </tbody>

      </table>

    </transition>
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

  data () {
    return {

      /* placeholder for selected rows */
      selectedRows: [],

      /* placeholder for collapsed state */
      isCollapsed: false
    }
  },

  mounted () {
    this.isCollapsed = this.collapsed
  },

  computed: {
    /* columns totals can be calculated here */
    totals: function () {
      /* without footer visible, no need to calculate totals */
      if (this.hasFooter) {
        var totalsRow = []
        for (var i = 0; i < this.columns.length - 1; i++) {
          /* if the column has total, calculate */
          if (this.columns[i + 1].hasTotal) {
            totalsRow.push({
              hasTotal: this.columns[i + 1].hasTotal,
              width: this.columns[i + 1].width,
              type: this.columns[i + 1].type,
              format: this.columns[i + 1].format,
              value: this.sumRowsByColumn(this.columns[i + 1].name)
            })
          /* otherwise create an empty row to preserve XHTML validation */  
          } else {
            totalsRow.push({
              hasTotal: false,
              width: this.columns[i + 1].width,
              type: this.columns[i + 1].type,
              value: '',
              format: undefined
            })
          }
        }
        return totalsRow
      }
    }
  },

  props: {
    
    /* the title of the table */
    title: {
      type: String,
      required: true,
      default: 'sym-data-table'
    },

    /* when true, multiple rows can be selected */
    multiSelect: {
      type: Boolean,
      required: false,
      default: false
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

    /* when true, the table is hidden by default */
    collapsed: {
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

    /* when set, provides a custom label for the totals */
    footerLabel: {
      type: String,
      required: false,
      default: 'Totals'
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
    },

    /* the optionals actions */
    actions: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {

    /**
      * When a specific action is triggered
    */
    actionTriggered: function (action) {
      this.$emit('action-triggered', action)
    },

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
        if (!this.multiSelect) {
          this.selectedRows.splice(0, this.selectedRows.length)
        }
        this.selectedRows.push(item)
      }

      /* notify */
      this.$emit('selected-rows-changed', this.selectedRows)
    },

    /**
      * switch between collapsed mode
     */
    toggleCollapse: function () {
      this.isCollapsed = !this.isCollapsed
    },

    /**
      * sum all values of a specified column
     */
    sumRowsByColumn: function (column) {
      var sum = 0
      for (var i = 0; i < this.items.length; i++) {
        sum += parseFloat(this.items[i][column])
      }
      return sum
    },

    /**
      * format a value base on type
     */
    formatValue: function (val, col, item) {
      /* use custom format if defined */
      if (col.format) {
        return col.format(val, item)
      }

      /* safe type check */
      if (val === null) {
        return null
      }

      /* if col is currency */
      if (col.type === 'currency') {
        return `${parseFloat(val).toFixed(2)}`
      }
      return val
    } 
  }    
}
</script>

<style lang="css" scoped>

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  /* Rules for sizing the icon. */
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }

  .sym-icon-button {
    border: 0;
    background: transparent;
    outline: 0;
    cursor: pointer;
    color: rgba(0,0,0,0.54)
  }

  .sym-icon-button[disabled] {
    color: rgba(0,0,0,0.12)
  }

  .sym-icon-button-primary {
    color: rgba(0,0,0,0.83)    
  }

  .sym-icon-button:focus {
    outline: 0;
  }

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

  .sym-table > table > tbody > tr > td,
  .sym-table > table > tfoot > tr > th,  
  .sym-table > table > thead > tr > th {
      padding: 0 8px 0 0;
  }

  .sym-table > table > tfoot > tr > th:first-child {
      padding: 0 0 0 16px;
  }

  .sym-table > table > tbody > tr:hover td:first-child {
    border-left: 3px solid #FFA300;
  }

  .sym-table-icons {
    float: right;
    padding-right: 16px;
    display: flex; 
    flex-flow: column; 
    height: 100%; 
    justify-content: space-around;
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
    outline: 0;
    cursor: pointer;
  }

  .col-string, 
  .head-string {
    text-align: left;
  }

  .col-currency, 
  .head-currency {
    text-align: right;
  }

  .footer, 
  .footer > th {
    font-size: 14px;
    font-weight: 600 !important;
    color: rgba(0, 0, 0, 0.83);
    height: 36px;
  }

  .footer-label {
    text-align: left;
    padding-left: 14px;
  }

  .icon-down {
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;
  }

  .icon-up {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }

  .slide-enter-active {
    transition: all .3s ease-in-out;
  }
  
  .slide-leave-active {
    transition: all .8s ease-in-out;
  }

  .slide-enter, .slide-leave-to {
    transform: translateY(-100px);
  }

  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }
  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .2;
    transition: 0s;
  }
</style>
