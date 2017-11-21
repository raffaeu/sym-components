import Vue from 'vue';
import {
    SymDataTable
} from '../src';

new Vue({
    components: {
        SymDataTable
    },
    el: '#app',

    data() {
        return {
            items: [
                {
                    'id': 1,
                    'first_name': 'Jeanette',
                    'last_name': 'Penddreth',
                    'email': 'jpenddreth0@census.gov',
                    'gender': 'Female',
                    'ip_address': '26.58.193.2',
                    'salary': '1250.00'
                }, {
                    'id': 2,
                    'first_name': 'Giavani',
                    'last_name': 'Frediani',
                    'email': 'gfrediani1@senate.gov',
                    'gender': 'Male',
                    'ip_address': '229.179.4.212',
                    'salary': '1250.00'
                }, {
                    'id': 3,
                    'first_name': 'Noell',
                    'last_name': 'Bea',
                    'email': 'nbea2@imageshack.us',
                    'gender': 'Female',
                    'ip_address': '180.66.162.255',
                    'salary': '3750.00'
                }, {
                    'id': 4,
                    'first_name': 'Willard',
                    'last_name': 'Valek',
                    'email': 'wvalek3@vk.com',
                    'gender': 'Male',
                    'ip_address': '67.76.188.26',
                    'salary': '1250.00'
                }
            ],
            columns: [{
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
                        // console.log(`val is ${val} and item is ${item}`)
                        console.log(`val is ${val}`)
                        return val 
                    }
                },
                {
                    name: 'ip_address',
                    type: 'string',
                    width: 150,
                    label: 'IP Address'
                }
            ]
        }
    }
});