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
            <th><button id="buttoncityleft" style="margin-right: 2em; float: left;" @click="cityleft" disabled>&lt;</button><div class="citytitle"><strong>Cities in {{this.$store.state.citiesin2}}</strong></div><button id="buttoncityright" style="margin-left: 2em;" class="" @click="cityright" disabled>&gt;</button></th>
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
        <div class="data-title">Search</div>
        
      </div>
      <div class="data-section-bottom">
        <div class="data-title">{{this.$store.state.cityname}}</div>
          <div class="content-block-bottom">
            <div class="contentthird">
              Co-ordinates of {{this.$store.state.cityname}}: <br/> 
              Latitude: {{this.$store.state.averagelat}} <br/>
              Logitude: {{this.$store.state.averagelong}}
            </div>
            <div class="content-third">
              <div class="chart-resize"><canvas id="myChart" style="" width="400" height="400"></canvas></div>
            </div>
            
            <div class="content-third "><div class="chart-resize-pie"><canvas id="myPieChart" style="" width="400" height="400"></canvas></div></div>
          </div>
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
      this.$store.state.passarray = ['AU', 'Australia']
      this.$store.commit('secondshowcities');
      this.$store.commit('measurements');
      
      
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
      
      var ctx1 = document.getElementById('myPieChart');
      var myPieChart = new Chart(ctx1, {
        type: 'pie',
        data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
      });
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
        document.getElementById("buttoncountryright").disabled = false;
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
        this.$store.commit('changecity', city);
        this.$store.commit('measurements');
      }
    },
  }
</script>

<style scoped>
.chart-resize-pie{
  width: 13em;
  margin: auto;
  margin-top: -0.5em;
  position: relative;
}
.chart-resize{
  width: 15em;
  margin: auto;
  margin-top: -0.5em;
  position: relative;
}
.content-third:last-child {
  border-right: 1px solid  #42b98300;
}
.content-third {
  width: calc((58em / 3) - 1px);
  height: calc(100% - 2em);
  
  padding: 1em;
  border-right: 1px solid  #42b983;
  float: left;
}
.contentthird {
  width: calc((58em / 3) - 1px);
  height: calc(100% - 2em);
  
  padding: 1em;
  border-right: 1px solid  #42b983;
  float: left;
}
.countries {
  width:67.7em;
  height:85em;
  margin: auto;
}
.citytitle {
  text-align: center;
  width: 13em;
  max-width: 13em;
  float: left;
}
.content-block-bottom {
  width: 64em;
  height: calc(15em);
  background-color:rgb(235, 235, 235);
  margin-top: 4em;
  
}
.data-title {
  float: left;
  text-align: center;
  width: 100%;
  height: 2em;
  background-color: #42b983;
  padding-top: 1em;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
}
.data-table {
  width: 20em;
  margin-top: 0.3em;

}
table.data-table tbody td {
 height: 2.29em;
}
.countriesdata {
  width:15em;
  float: left;
}
.data-section {
  float: left;
  width: calc(21em);
  height: calc(61.4em + 4px);
  border:2px solid #42b983;
  border-bottom: 2px solid white;
  padding: 0.5em;
  background-color: white;
  margin: 0.5em;
  margin-left: 0em;
}
.data-section-bottom {
  float: left;
  width: calc(64.4em );
  height: 19em;
  border:2px solid #42b983;
  overflow:hidden;
  padding: 1em;
  background-color:white;
  margin: 0.5em;
  margin-bottom: 1em;
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