<template>
<div>
    <table> 
    <thead>
      <tr>
        <th>Name</th>
        <th>In Stock</th>
        <th>Next Delivery Date</th>
        <th>Size of Delivery</th>
      </tr>
    </thead>
      
    <tbody>
      <tr v-for="(item, index) in this.$store.state.Stockarray" :key="index">
        <td>{{ item.name }}</td> 
        <td>{{ item.Stock }}</td>
        <td>{{ item.DeliveryDate }}</td>
        <td>{{ item.DeliverySize }}</td>
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