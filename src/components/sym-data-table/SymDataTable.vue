<template src="./SymDataTable.html">
</template>
<style src="./SymDataTable.css" scoped>
</style>
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
        let totalsRow = []
        const rowsToSkip = 2
        for (var i = 0; i < this.columns.length - rowsToSkip; i++) {
          /* if the column has total, calculate */
          if (this.columns[i + rowsToSkip].hasTotal && this.calculateTotals) {
            totalsRow.push({
              hasTotal: this.columns[i + rowsToSkip].hasTotal,
              width: this.columns[i + rowsToSkip].width,
              type: this.columns[i + rowsToSkip].type,
              format: this.columns[i + rowsToSkip].format,
              value: this.sumRowsByColumn(this.columns[i + rowsToSkip].name)
            })
            /* otherwise create an empty row to preserve XHTML validation */
          } else {
            totalsRow.push({
              hasTotal: false,
              width: this.columns[i + rowsToSkip].width,
              type: this.columns[i + rowsToSkip].type,
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

    /* when true, rows can be selected */
    selectable: {
      type: Boolean,
      required: false,
      default: true
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

    calculateTotals: {
      type: Boolean,
      required: false,
      default: true
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
    },

    /* when true, display the pagination control */
    hasPagination: {
      type: Boolean,
      required: false,
      default: false
    },

    /* this property will be watched, when it's toggled to true selected items will be reset */
    clearSelection: {
      type: Boolean,
      required: false,
      default: false
    },

    /* message to show when there are no items */
    noDataMessage: {
      type: String,
      required: false,
      default: 'No data'
    }
  },

  watch: {
    /* when clearSelection property is toggled to true, reset selected items */
    clearSelection: function (value) {
      if (value === true) {
        this.selectedRows = []
      }
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
      /* if select is disabled, do nothing */
      if (!this.selectable) {
        return
      }

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
      // Do nothing if not collapsible
      if (!this.collapsible) {
        return
      }
      this.isCollapsed = !this.isCollapsed
      this.$emit('collapse-toggle', this.isCollapsed)
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
      /* safe type check */
      if (val === null | val === '') {
        return null
      }

      /* use custom format if defined */
      if (col.format) {
        return col.format(val, item)
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