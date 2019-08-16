<template>
<div>

<router-link to="/stock/input" replace><button>Add New type of Stock</button></router-link>
<router-link to="/stock" replace><button>Close</button></router-link>
<router-view/>

    <table> 
    <thead>
      <tr>
        <th>Name</th>
        <th>In Stock</th>
      </tr>
    </thead>
      
    <tbody>
      <tr v-for="(item, index) in this.$store.state.Stockarray" :key="index">
        <td>{{ item.name }}</td> 
        <td>{{ item.Stock }}</td>
      </tr>         
      </tbody>
  </table>
</div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>