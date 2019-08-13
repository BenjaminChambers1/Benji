<template>
<div id="secure">
    <h1>
        Mattress Direct | Dashboard
    </h1>
    <router-link to="/distributees">Distributees</router-link>
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
        </tr>         
       </tbody>
    </table>

 <input class="input is-medium" v-validate="'required|decimal:0|min:4|max:4'"
        name="car-year" type="number" placeholder="Year (numbers only 4 max)">
         <span class="is-danger">{{ errors.first('car-year') }}</span>

<input class="input is-medium" v-validate="'required|email'"
        name="email" type="text" placeholder="email required">
         <span class="is-danger">{{ errors.first('email') }}</span>

</div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        }
    }
</script>

<style>
#secure {
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    padding: 20px;
    margin-top: 10px;
}
table{
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475C;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
    padding-top: 0.25em;
    padding-bottom: 0.25em;
}

table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
  border-top: 2px solid  #44475C;
  border-bottom: 2px solid  #44475C;
}  

</style>

