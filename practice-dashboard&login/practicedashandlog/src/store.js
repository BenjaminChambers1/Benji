import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    distributeesarray: [ 
      {id: 1, name: 'Jarods Bed Store', email: 'jarodbedson@gmail.com', contact: '01384287651'},
      {id: 2, name: 'Bed-ford & Sons' , email: 'bedfordshopcontact@mail.com', contact: '01384740128'},
      {id: 3, name: 'Dudley Mattress Specialists' , email: 'dudleymatressspecicalists@outlook.com', contact: '01384645090'},
    ]
  },
  mutations: {

  },
  actions: {

  }
});
