# SymDataTable

> A Data Table component according to Material Design.

## Design Guidelines

The `sym-data-table` is using Material Design guidelines with a slightly change related to selection of rows, which can be customized with CSS.

![Data Table Layout](images/sym-data-table-01.png)

## Usage

In order to start to use the data table you need to install the npm package as following:

```bash
# install the package
npm install --save sym-components
```

### Javascript

Then in ES06 you have to import and declare your component as following:

```javascript
// import the component from the library
import SymDataTable from 'sym-components'

// declare the component in your Vue file
export default {
  name: 'app',
  components: {
      SymDataTable
  }
}
```

### Typescript

In Typescript you have to import and declare your component as following:

```typescript
// import the component from the library
import SymDataTable from 'sym-components'

// declare the component in your Vue file
export default {
  name: 'app',
  components: {
      SymDataTable
  }
}
```

Then you can start to use the declarative approach to create a new instance of it:

```html
<sym-data-table
    title="Table title"
    :items="myItems"
    :isCard="true"
    :columns="myColumns">
</sym-data-table>
```

## Properties

`sym-data-table` provide a set of properties that can be used to configure it at declaration time but also during run-time.

| Name   | Type   | Required   | Default   | Description   |
|:---   |:---   |:---   |:---   |:---   |
| **title**   | `String`   | `true`   | `sym-data-table`   | The Title displayed by the Table   |
| **multiSelect**   | `Boolean`   | `false`   | `false`   | Provides multi-select behaviour   |
| **isCard**   | `Boolean`   | `false`   | `false`   | When true, display a Material Design Card with shadowing and 16 px padding   |
| **collapsible**   | `Boolean`   | `false`   | `false`   | When true, display a chevron on the right top of the table, which allows to collapse/expand the table content   |
| **hasFooter**   | `Boolean`   | `false`   | `false`   | When true, display a footer `tfoot` containing custom totals and a custom label   |
| **footerLabel**   | `String`   | `false`   | `Totals`   | The Title displayed in the footer (*it takes two col-span*)   |
| **items**   | `Array`   | `true`   | `empty`   | The collection of items to be displayed   |
| **columns**   | `Array`   | `false`   | `empty`   | The columns configuration (*see columns configuration section*), if empty it will auto-create the columns   |

### Columns Configuration

Each Column of the `sym-data-table` can be configured according to the following schema:

```javascript
{
    name: 'total',
    type: 'currency',
    label: 'Total Amount',
    width: 150,
    hasTotal: true
}
```

And these are the available options:

| Name   | Type   | Required   | Description   |
|:---   |:---   |:---   |:---   |
| **name**   | `String`   | `true`   | The Name of the Property to be data-bound   |
| **type**   | `String`   | `true`   | The type of data (*string, number, currency, date, time, boolean*)   |
| **label**   | `String`   | `true`   | The Text used in the Column Header   |
| **width**   | `String`-`Int32`  | `true`   | The width in pixels, use `flex` for auto-expand   |
| **hasTotal**   | `Boolean`  | `false`   | When `true` and `hasFooter` is also `true`, it will calculate a total fr the column using `float(2)`   |

## Events

`sym-data-table` also raises events according to the standard Vue.js architecture.

### SelectedRowsChanged

> It is triggered every time a rows selection happens.
It is also triggered when a row is de-selected.

#### Implementation

```javascript
this.$emit('selectedRowsChanged', [array of selected rows])
```