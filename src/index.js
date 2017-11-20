import SymDataTable from './components/SymDataTable';

export default {
    install(Vue) {
        Vue.component('sym-data-table', SymDataTable);
    },
};

export { SymDataTable };