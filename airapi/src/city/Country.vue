<template>
  <div class="countries">
      
      <table>
        <thead>
          <tr>
            <th><strong>Countries</strong></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in this.$store.state.listofcountry">
                <td>{{item}}<button  @click="showCities(item)" style="float: right;">Cities</button></td>
            </tr>
        </tbody>
      </table>
    
      <table class="citiestable">
        <thead>
          <tr>
            <th><strong>Cities {{this.$store.state.citiesin}}</strong></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="city in this.$store.state.searchedcities">
                <td>
                    <div style="width: 15em;float: left;">{{city}}</div>
                    <button style="float: right;">Data</button>
                </td>
            </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th><strong>Data</strong></th>
          </tr>
        </thead>
        <tbody>
            <tr>
                
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
      this.$store.commit('loadcountry');
      this.$store.commit('showcity', 'AD');
      //actions this.$store.dispatch('');
    },
    methods: {
      showCities(country) {
            this.$store.commit('showcity', country);
        },
        
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