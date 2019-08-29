<template>
  <div class="cities">
      <table>
        <thead>
          <tr>
            <th><strong>Cities</strong></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="city in this.$store.state.listofcities">
              <td>{{city.city}}</td>
            </tr>
            
        </tbody>
      </table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.$store.commit('loadcities');
    },
    methods: {
      
    },
  }
</script>

<style scoped>
td {
    padding: 0.5em;
}
table tbody tr:nth-child(2n) td {
  background:  #42b9832c;
}
table{
  font-family: 'Open Sans', sans-serif;
  width: auto;
  border-collapse: collapse;
  border: 3px solid #42b983;;
  margin: 10px 0px 0px 10px;
  float: left;
}
table th {
  text-transform: uppercase;
  text-align: center;
  background:  #42b983;;
  color: #FFF;
  padding: 1em;
  
}
.citiestable {
    width: 20em;
}
</style>
