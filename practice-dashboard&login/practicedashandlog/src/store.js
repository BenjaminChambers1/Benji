import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    distributeesarray: [ 
      {name: 'Jarods Bed Store', email: 'jarodbedson@gmail.com', contact: '01384287651'},
      {name: 'Bed-ford & Sons' , email: 'bedfordshopcontact@mail.com', contact: '01384740128'},
      {name: 'Dudley Mattress Specialists' , email: 'dudleymatressspecicalists@outlook.com', contact: '01384645090'},
    ],
    Stockarray: [ 
      {id: 1, name: 'Single Spring', Stock: 25, DeliveryDate: '', DeliverySize: 30},
      {id: 2, name: 'Double Spring', Stock: 14, DeliveryDate: '', DeliverySize: 12},
      {id: 3, name: 'King Spring', Stock: 9, DeliveryDate: '', DeliverySize: 15},
      {id: 4, name: 'Queen Spring', Stock: 0, DeliveryDate: '', DeliverySize: 25},
      {id: 5, name: 'Single Memory Foam', Stock: 30, DeliveryDate: '', DeliverySize: 0},
      {id: 6, name: 'Double Memory Foam', Stock: 22, DeliveryDate: '', DeliverySize: 6},
      {id: 7, name: 'King Memory Foam', Stock: 10, DeliveryDate: '', DeliverySize: 10},
      {id: 8, name: 'Queen Memory Foam', Stock: 4, DeliveryDate: '', DeliverySize: 16},
      {id: 9, name: 'Matress Topper 1cm', Stock: 27, DeliveryDate: '', DeliverySize: 9},
      {id: 10, name: 'Matress Topper 2cm', Stock: 40, DeliveryDate: '', DeliverySize: 0},
    ]
  },
  mutations: {

  },
  actions: {

  }
});
