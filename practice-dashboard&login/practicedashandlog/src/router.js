import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/Login.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login",
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
            
        },
        {
            path: "/secure",
            name: "secure",
            component: function () { 
              return import('./views/Secure.vue');
            }
        },
        {
          path: '/distributees',
          redirect: {
              name: "distributees",
              component: function () { 
                return import('./views/Distributees.vue');
              }
          }
      },
    ]
});
