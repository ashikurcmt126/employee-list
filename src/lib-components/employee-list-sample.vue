<script>
import { defineComponent } from 'vue';
import Datatable from './Datatable.vue'
export default /*#__PURE__*/defineComponent({
name: 'EmployeeListSample', // vue component name
props: {
tableHeader: String,
tableRow: Array
},
components:{
Datatable
},
});
</script>
<template>
<div>
<Datatable :tHeader="tableHeader"/>
<table>
<tr>
<th>Name</th>
<th>Address</th>
<th>Email</th>
</tr>
<tr v-for="(row, index) in tableRow" :key="index">
<td>{{row.name}}</td>
<td>{{row.address}}</td>
<td>{{row.email}}</td>
</tr>
<tr v-if="!tableRow.length">
<th style="text-align:center;" colspan="3">Data not found</th>
</tr>
</table>
</div>
</template>
<style scoped>
table {
font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;
}
td, th {
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}
tr:nth-child(even) {
background-color: #dddddd;
}
</style>