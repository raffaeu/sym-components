# Welcome to sym-components

A collection of Vue.js components implementing the Material Design specifications.

## Components

You can install the components using `NPM` as following:

```bash
npm install --save sym-components
```

Here is the current list of available components.

- sym-data-table [documentation](docs/SymDataTable.md)
- sym-button [*to be implemented*]
- sym-drop-down [*to be implemented*]
- sym-loader [*to be implemented*]

## Project Structure

The Project is structured in the following way:

- **build**
  - all build configuration files
- **config**
  - various configuration files for build, test and deployment
- **dist**
  - compiled version of the entire project (for dev and test)
- **docs**
  - documentation and samples
- **src**
  - source code including components and samples
- **test**
  - unit tests of each component

## Build Setup

The following configurations can be used for development or to publish the component library.

### Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
# OR
npm start
```

### Test

```bash
# run unit tests
npm run unit
# OR
npm test
```

### Node Publish

```bash
# create a new npm user if needed
npm adduser

# login to npm
npm login

# publish
npm publish
```

> Use the `.npmignore` file to ignore all files that are not needed for the deployment version. 
