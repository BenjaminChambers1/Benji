
Vue.component('demo', {
  template: '<li>This text is coming from another component</li>'
});

Vue.component('daysoftheweek', {
  props: ['date'],
  template: '<li>{{ date.day }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
      message: 'This message was brought to you from a js file',
    },
    methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('');
      }
    }
});

var app1 = new Vue({
   el: '#app-1',
  data: {
    listOfDevelopynEmployees: [
      {employee: 'Melvyn'},
      {employee: 'James'},
      {employee: 'Yash'},
      {employee: 'Jacob'},
      {employee: 'Ben'},
    ],
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    tempMessage: 'hey, how are you doing?'
  },
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    weekList: [
      { id: 0, day: 'Monday' },
      { id: 1, day: 'Tuesday' },
      { id: 2, day: 'Wednesday' },
      { id: 3, day: 'Thursday' },
      { id: 4, day: 'Friday' },
      { id: 5, day: 'Saturday' },
      { id: 6, day: 'Sunday' },
    ]
  }
});

var app4 = new Vue ({
  el:'#app-4',
  data: {
    isButtonDisabled: true,
    rawHTML: '<div style="color:blue">Hello this is rendered using v-html with a blu style</div>'
  },
  methods: {
    disableButton() {
      this.isButtonDisabled = !this.isButtonDisabled;
    },
    func() {
      this.disableButton();
    }
  },
});