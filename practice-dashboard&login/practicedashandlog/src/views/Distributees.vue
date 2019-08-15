<template>
<div class="Secure">
    
<router-link to="/distributees/input" replace><button>Add New Distributee</button></router-link>
<router-link to="/distributees" replace><button>Close</button></router-link>
<router-view/>
    <table> 
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
      </tr>
    </thead>
      
    <tbody>
      <tr v-for="(item, index) in this.$store.state.distributeesarray" :key="index">
        <td>{{ item.name }}</td> 
        <td>{{ item.email }}</td>
        <td>{{ item.contact }}</td>
        <td><button v-on:click="deleteRow()">Delete</button></td>
      </tr>         
      </tbody>
  </table>
</div>
</template>

<<script>
    export default {
        name: 'Distributees',
        data() {
            return {
                
            }
        },
        methods: {
          deleteRow() {
            // event.target will be the input element.
            var td = event.target.parentNode; 
            var tr = td.parentNode; // the row to be removed
            tr.parentNode.removeChild(tr);
        }
            }
        }
    
</script>

<style scoped>
button {
    padding: 1em;
}
input {
    padding: 1em;
    min-width: 30em;
    width:auto;
}
</style>
