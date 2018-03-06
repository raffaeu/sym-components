<template src="./SymDataTable.html">
</template>
<style src="./SymDataTable.css" scoped>
</style>
<script>

import Vue from 'vue'

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
      isCollapsed: false,

      /* backward pagination enabled */
      backDisabled: true,

      /* forward pagination enabled */
      forwardDisabled: true
    }
  },

  mounted () {
    this.isCollapsed = this.collapsed
    this.evaluatePager()
  },

  computed: {
    /* columns totals can be calculated here */
    totals: function () {
      /* without footer visible, no need to calculate totals */
      if (this.hasFooter) {
        let totalsRow = []
        const rowsToSkip = 0
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

    /* the amount of items to be shown per each page */
    itemsPerPage: {
      type: Number,
      required: false,
      default: 25
    },

    /* the total nr of items */
    totalItems: {
      type: Number,
      required: false,
      default: 100
    },

    /* the current page */
    currentPage: {
      type: Number,
      required: false,
      default: 1
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
    },

    /* indicates if the table can be sorted */
    sortable: {
      type: Boolean,
      required: false,
      default: false
    },

    /* optional function that styles a row */
    rowStyler: {
      type: Function,
      required: false,
      default: function (item) {
        return {}
      }
    }
  },

  watch: {
    /* when clearSelection property is toggled to true, reset selected items */
    clearSelection: function (value) {
      if (value === true) {
        this.selectedRows = []
      }
    },
    /* when items change */
    items: function (value) {
      this.evaluatePager()
    }
  },

  methods: {
    /**
     * Re-evaluate the pager commands
     */
    evaluatePager: function () {
      const from = ((this.currentPage - 1) * this.itemsPerPage) + 1
      const to = ((this.currentPage - 1) * this.itemsPerPage) + this.items.length
      // if BOF
      if (from <= 1) {
        this.backDisabled = true
      } else {
        this.backDisabled = false
      }

      // if EOF
      if (to === this.totalItems) {
        this.forwardDisabled = true
      } else {
        this.forwardDisabled = false
      }
    },

    /**
     * When a specific action is triggered
     */
    actionTriggered: function (action) {
      this.$emit('action-triggered', action)
    },

    /**
     * When the pagination is changed
     */
    pagerTriggered: function (page) {
      this.$emit('page-changed', page)
    },

    /**
     * Triggered when a TR is selected/unselected
     * bound to a single click/tap event
     */
    toggleRow: function (item, event) {
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
      this.$emit('selected-rows-changed', { rows: this.selectedRows, event: event })
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
    },

    /**
     * toggle or activate the sorting
     */
    toggleSort: function (col) {
      if (!this.sortable || !col.sortable) {
        return
      }

      // reset sorted columns
      this.columns.forEach(element => {
        if (element !== col && element.sortable) {
          Vue.set(element, 'sorted', false)
        }
      })

      if (!col.sorted) {
        Vue.set(col, 'sorted', true)
        Vue.set(col, 'sort_order', 'ASC')
      } else {
        Vue.set(col, 'sort_order', col.sort_order === 'DESC' ? 'ASC' : 'DESC')
      }

      this.$emit('column-sorted', { col: col.name, sort_order: col.sort_order })
    },

    /*
    * sets the row's classes for styling
    */
    styleRow: function (item) {
      const userStyles = this.$props.rowStyler(item)

      return Object.assign({ 'sym-row-selected': this.selectedRows.indexOf(item) > -1 }, userStyles)
    }
  }
}
</script>