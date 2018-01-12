<template>

  <div>

    <h1>Data Table samples</h1>

    <h3>Simple table with static array</h3>

    <blockquote>
      A simple data table populated by a static array of items and expandable/collapsible
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="Collapsible"
      :multi-select="true"
      :is-card="true"
      :collapsible="true"
      :collapsed="false"
      :items="items"      
      :columns="columns"
      no-data-message="No Data available"
      @collapse-toggle="collapseToggled" />    

    <blockquote>
      A simple data table without data
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="Collapsible"
      :multi-select="true"
      :is-card="true"
      :collapsible="true"
      :collapsed="false"
      :items="no_data"      
      :columns="columns"
      no-data-message="No Data available"
      @collapse-toggle="collapseToggled" /> 

    <h3>Simple table collapsed</h3>    

    <blockquote>
      A simple data table, collapsed by default
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="Collapsible/Collapsed"
      :multi-select="true"
      :is-card="true"
      :collapsible="true"
      :collapsed="true"
      :items="items"
      :columns="columns" />

    <h3>Simple table with Totals</h3>    

    <blockquote>
      A simple data table with Footer but no totals
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="Without Totals but Footer"
      :multi-select="true"
      :is-card="true"
      :collapsible="true"
      :has-footer="true"
      :calculate-totals="false"
      footer-label=""
      :items="items"
      :columns="columns" />

    <sym-data-table
      class="sym-data-table"
      title="Without Totals but Footer Label"
      :multi-select="true"
      :is-card="true"
      :collapsible="true"
      :has-footer="true"
      :calculate-totals="false"
      footer-label="Some Custom Footer Label"
      :items="items"
      :columns="columns" />

    <blockquote>
      A simple data table with totals on some columns
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="With Totals"
      :multi-select="true"
      :is-card="true"
      :collapsible="true"
      :has-footer="true"
      :items="items"
      :columns="columns" />

    <h3>Simple table with Actions and Events</h3>    

    <blockquote>
      A simple data table with Actions and events to enable/disable actions
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="With Actions and Events"
      :multi-select="true"
      :is-card="true"
      :collapsible="true"
      :has-footer="true"
      :items="items"
      :columns="columns"
      :actions="actions"
      :clear-selection="isClear"      
      @selected-rows-changed="selectionChanged"
      @action-triggered="itemClick" />

    <h3>Simple table with sub-header</h3>

    <blockquote>
      A simple data table with sub-header
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="With Sub Header"
      :multi-select="false"
      :is-card="true"
      :collapsible="true"
      :collapsed="false"
      :items="items"      
      :columns="columns"
      no-data-message="All out!"
      @collapse-toggle="collapseToggled">
        <div slot="sub-header">
          <h3>Sub Header slot which can have multiple rows</h3>
          <p>Some <i>extra text</i></p>
        </div>
    </sym-data-table>    

    <h3>Simple table with pagination</h3>

    <blockquote>
      A simple data table with pagination
    </blockquote>

    <sym-data-table
      class="sym-data-table"
      title="With Sub Header"
      :multi-select="false"
      :is-card="true"
      :collapsible="true"
      :collapsed="false"
      :items="items"      
      :columns="columns"
      no-data-message="All out!"
      @collapse-toggle="collapseToggled"
      :has-pagination="true"
      :items-per-page="5"
      :total-items="25"
      :current-page="5">
    </sym-data-table>  

  </div>

</template>

<script>
import Vue from 'vue'
import SymDataTable from './SymDataTable'

export default {
  name: 'sym-data-table-samples',

  components: {
    SymDataTable
  },

  methods: {
    selectionChanged: function (rows) {
      console.log(`rows selected changed ${rows.length}`)
      Vue.set(this, 'selectedRows', rows)
      Vue.set(this.actions[0], 'disabled', rows.length < 1)
      Vue.set(this.actions[1], 'disabled', rows.length < 1)
      Vue.set(this.actions[2], 'disabled', rows.length < 1)
      Vue.set(this.actions[3], 'disabled', rows.length < 1)
      this.isClear = false
    },
    itemClick: function (command) {
      console.log(`Action ${command.name} has been triggered`)

      switch (command.name) {
      case 'clear':
        this.isClear = true
        break
      }
    },
    collapseToggled: function (isCollapsed) {
      console.log(`Table collapsed toggled (collapsed = ${isCollapsed})`)
    }
  },

  data () {
    return {
      selectedRows: [],
      no_data: [],
      pagItems: [
        {
          'id': 1,
          'first_name': 'Jeanette',
          'last_name': 'Penddreth',
          'email': 'jpenddreth0@census.gov',
          'gender': 'Female',
          'ip_address': '26.58.193.2',
          'salary': 1250.00,
          'hour_fee': 132.00
        }
      ],
      items: [
        {
          'id': 1,
          'first_name': 'Jeanette',
          'last_name': 'Penddreth',
          'email': 'jpenddreth0@census.gov',
          'gender': 'Female',
          'ip_address': '26.58.193.2',
          'salary': 1250.00,
          'hour_fee': 132.00
        }, {
          'id': 2,
          'first_name': 'Giovanni',
          'last_name': 'Frediani',
          'email': 'gfrediani1@senate.gov',
          'gender': 'Male',
          'ip_address': '229.179.4.212',
          'salary': '1250.00',
          'hour_fee': 145.00
        }, {
          'id': 3,
          'first_name': 'Noell',
          'last_name': 'Bea',
          'email': 'nbea2@imageshack.us',
          'gender': 'Female',
          'ip_address': '180.66.162.255',
          'salary': '3750.00',
          'hour_fee': 320.00
        }, {
          'id': 4,
          'first_name': 'Willard',
          'last_name': 'Valek',
          'email': 'wvalek3@vk.com',
          'gender': 'Male',
          'ip_address': '67.76.188.26',
          'salary': 1250.00,
          'hour_fee': 210.00
        }, {
          'id': 5,
          'first_name': 'Smenth',
          'last_name': 'Ryu',
          'email': 'smenth@vk.com',
          'gender': 'Hybrid',
          'ip_address': '11.76.325.26',
          'salary': 3250.00,
          'hour_fee': 230.00
        }
      ],
      columns: [
        {
          name: 'id',
          type: 'string',
          width: 30,
          label: 'ID'
        },
        {
          name: 'first_name',
          type: 'string',
          width: 150,
          label: 'First Name'
        },
        {
          name: 'last_name',
          type: 'string',
          width: 150,
          label: 'Last Name'
        },
        {
          name: 'email',
          type: 'string',
          width: 150,
          label: 'E-mail'
        },
        {
          name: 'gender',
          type: 'string',
          width: 30,
          label: 'Gender'
        },
        {
          name: 'salary',
          type: 'currency',
          width: 80,
          label: 'Salary',
          hasTotal: true,
          format: function (val) {
            return new Intl
              .NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
              }).format(val)
          }
        },
        {
          name: 'ip_address',
          type: 'string',
          width: 150,
          label: 'IP Address'
        },
        {
          name: 'hour_fee',
          type: 'currency',
          width: 150,
          label: 'Hour fee',
          hasTotal: true,
          format: function (val) {
            return new Intl
            .NumberFormat('en-US', {
              style: 'currency', currency: 'EUR'
            }).format(val)
          }
        }
      ],
      actions: [
        {
          name: 'add',
          icon: 'add',
          disabled: true,
          tooltip: 'Add an item'
        },
        {
          name: 'delete',
          icon: 'delete',
          disabled: true,
          tooltip: 'Remove an item'
        },
        {
          name: 'edit',
          icon: 'edit',
          disabled: true,
          tooltip: 'Edit an item'
        },
        {
          name: 'clear',
          icon: 'clear_all',
          disabled: true,
          tooltip: 'Clear selection'
        }
      ],
      isClear: false
    }
  }
}
</script>

<style>
  .sym-data-table {
    margin: 16px 0;
  }
</style>

