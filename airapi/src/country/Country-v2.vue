<template>
  <div class="countries">
    <div class="countriestable">
      <table>
        <thead>
          <tr>
            <th><button id="buttoncountryleft" style="margin-right: 2em;" @click="countryleft" disabled>&lt;</button><strong>Countries</strong><button id="buttoncountryright" style="margin-left: 2em;" class="" @click="countryright" enabled>&gt;</button></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in this.$store.state.secondlistofcountry">
                <td><div class="countriesdata">{{item.name}}</div><button @click="secondshowCities(item.code, item.name)" style="float: right;">Cities -&gt;</button></td>
            </tr>
        </tbody>
      </table>
      
      
    </div>
      <table class="citiestable">
        <thead>
          <tr>
            <th><button id="buttoncityleft" style="margin-right: 2em;" @click="cityleft" disabled>&lt;</button><strong>Cities in {{this.$store.state.citiesin2}}</strong><button id="buttoncityright" style="margin-left: 2em;" class="" @click="cityright" disabled>&gt;</button></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="city in this.$store.state.searchedcities">
                <td>
                    <div style="width: 15em;float: left;">{{city}}</div>
                    <button @click="showdata(city)" style="float: right;">Data</button>
                </td>
            </tr>
        </tbody>
      </table>
      <div class="data-section">
        <table class="data-table">
          <thead>
            <tr>
              <th><strong>Data for {{this.$store.state.cityname}}</strong></th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td></td> 
              </tr>
          </tbody>
        </table>
        <div class="border-line"></div>
      </div>
      <div class="data-section-bottom">

      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.$store.commit('secondloadcountry');
      this.$store.state.passarray = ['DZ', 'Algeria']
      this.$store.commit('secondshowcities');
    },
    methods: {
      secondshowCities(code, name) {
       this.$store.state.passarray = [code, name]
       this.$store.commit('secondshowcities');
      },
      countryleft() {
        if (this.$store.state.pagecountry > 1) {
          this.$store.state.pagecountry--
          this.$store.state.secondloadingcountry = false;
          this.$store.commit('secondloadcountry');
          console.log(this.$store.state.pagecountry)
        }
        if (this.$store.state.pagecountry > 1) {
          document.getElementById("buttoncountryleft").disabled = false;
        }else{
          document.getElementById("buttoncountryleft").disabled = true;
          document.getElementById("buttoncountryright").disabled = false;
        }
      },
      countryright() {
        if (this.$store.state.pagecountry < 4) {
          this.$store.state.pagecountry++
          console.log(this.$store.state.pagecountry)
          this.$store.state.secondloadingcountry = false;
          this.$store.commit('secondloadcountry');
        }
        
        if (this.$store.state.pagecountry < 4) {
          document.getElementById("buttoncountryright").disabled = false;
          document.getElementById("buttoncountryleft").disabled = false;
        }else{document.getElementById("buttoncountryright").disabled = true;}
      },
      cityleft() {
        if (this.$store.state.pagecity > 2) {
          this.$store.state.pagecity--
          this.$store.commit('secondshowcities');
        } else {
          this.$store.state.pagecity--
          this.$store.commit('secondshowcities');
          document.getElementById("buttoncityleft").disabled = true;
        }
      },
      cityright() {
        this.$store.state.pagecity++
        this.$store.commit('secondshowcities');
        document.getElementById("buttoncityleft").disabled = false;
      },
      showdata(city) {
        this.$store.state.cityname = city;
        //this.$store.commit('measurements');
      }
    },
  }
</script>

<style scoped>
.data-table {
  width: calc(100% - 1em);
}
.countriesdata {
width:15em;
float: left;
}
.data-section {
  float: left;
  width: calc(100% - (6em + 40em + 15px));
  height: calc(61.4em + 4px);
  border:2px solid #42b983;
  border-bottom: 2px solid white;
  padding: 0.5em;
  background-color: white;
  margin: 0.5em;
}
.data-section-bottom {
  float: left;
  width: calc(100% - 3.3em);
  height: 20em;
  border:2px solid #42b983;
  overflow:hidden;
  padding: 1em;
  background-color: white;
  margin: 0.5em;
  margin-top: calc(-0.6em - 1px);
  z-index: -1;
  position: relative;
}
td {
    padding: 0.5em;
    width: 20em;
    height: 2em;
    max-height: 2em;
}
table tbody tr:nth-child(2n) td {
  background:  #42b9832c;
}
table{
  font-family: 'Open Sans', sans-serif;
  width: auto;
  border-collapse: collapse;
  border: 3px solid #42b983;;
  margin: 0.5em;
  float: left;
  
}
table th {
  text-transform: uppercase;
  text-align: center;
  background:  #42b983;;
  color: #FFF;
  padding: 1em;
  
  
}

</style>