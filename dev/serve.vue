<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registeredglobally.
// import { EmployeeListSample } from '@/entry.esm';
export default defineComponent({
name: 'ServeDev',
data() {
return {
tHeader:"Employee List Table",
tRow: [
{
name:"Shankar Devsharma",
address:"Dinajpur",
email:"shankar@gmail.com"
},
{
name:"Ashikur Islam",
address:"Rongpur",
email:"ashikur@gmail.com"
},
{
name:"Chayan Roy",
address:"Nilphamary",
email:"chayan@gmail.com"
},
{
name:"Md. Manik Islam",
address:"Thakurgaon",
email:"manik@gmail.com"
}
]
};
},
});
</script>
<template>
<div id="app">
<employee-list-sample :tableHeader="tHeader" :tableRow="tRow" />
</div>
</template>