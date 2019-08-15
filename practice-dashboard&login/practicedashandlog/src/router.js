import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/Login.vue"
import SecurePage from "./views/Secure.vue"

import Distributees from "./views/Distributees.vue"

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
            component: SecurePage, 
                
            children: [
                {
                    path: '/distributees',
                    name: "distributees",
                    component: Distributees,
                    
                    children: [{
                        path: '/distributees/input',
                        name: "distributees/input",
                        component: function () { 
                        return import('./views/subViews/DistributeesInput.vue');
                    }}]
                
                },
                
                    {
                    path: '/stock',
                    name: "stock",
                    component: function () { 
                    return import('./views/Stock.vue');
                    }
                },
            ]
        },
    ]
});
