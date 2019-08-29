import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');
export default new Vuex.Store({
  state: {
    searchedcities: [],
    citiesin2: 'Algeria',
    secondlistofcountry: [],
    secondloadingcountry: false,
    
    limitcountry: 20,
    pagecountry: 1,
    limitcity: 20,
    pagecity: 1,

    countryname: 'Algeria',
    countrycode: 'DZ',
    passarray: [],

    cityname: 'Algiers',
    searcheddata: [],

  },
  mutations: {
    secondloadcountrytest(state) {
      if (state.secondloadingcountry === false) {
        const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        for (let count1 = 0; count1 < alphabet.length; count1++) {
          var firstletter = alphabet[count1];
          for (let count2 = 0; count2 < alphabet.length; count2++) {
            var secondletter = alphabet[count2];
            console.log(firstletter, secondletter);
            axios.get(`https://api.openaq.org/v1/countries?code=${firstletter}${secondletter}`)
            .then(function (response) {
              var arrayofeverything = response.data.results;
              console.log(arrayofeverything);
              for (let count = 0; count < arrayofeverything.length; count++) {
                const element = arrayofeverything[count];      
                state.secondlistofcountry.push(element);
              }
              //console.log(state.secondlistofcountry);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              state.secondloadingcountry = true;
            });
            break;
          }
        }
      }
    },
    secondloadcountry(state) {
      if (state.secondloadingcountry === false) {    
        axios.get(`https://api.openaq.org/v1/countries?limit=${state.limitcountry}&page=${state.pagecountry}`)
        .then(function (response) {
          //console.log(response);
          var arrayofeverything = response.data.results;
          //console.log(arrayofeverything);
          state.secondlistofcountry = [];
          for (let count = 0; count < arrayofeverything.length; count++) {
            const element = arrayofeverything[count];      
            state.secondlistofcountry.push(element);
          }
          //console.log(state.secondlistofcountry);
        })
        .catch(function (error) {
          console.log(error);})
        .finally(function () {state.secondloadingcountry = true;});
      }
    },
    secondshowcities(state) {
      axios.get(`https://api.openaq.org/v1/cities?limit=${state.limitcity}&page=${state.pagecity}&country=${state.passarray[0]}`)
      .then(function (response) {
        //console.log(response)
        var arrayofeverything = response.data.results;
        console.log(arrayofeverything);
        state.searchedcities = [];
        for (let count = 0; count < arrayofeverything.length; count++) { //in the list of cities
          if(state.passarray[0] === arrayofeverything[count].country) {
            state.searchedcities.push(arrayofeverything[count].city);
            state.citiesin2 = state.passarray[1];
          }
        }
        if(state.searchedcities.length === 20) {
          document.getElementById("buttoncityright").disabled = false;
        }else{ document.getElementById("buttoncityright").disabled = true;}
      });
    },
    measurements(state) {
      axios.get('https://api.openaq.org/v1/measurements')
      .then(function (response) {
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
    }
  },
  actions: {}
  });
