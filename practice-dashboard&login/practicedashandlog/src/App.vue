<template>
    <div id="app">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace><button>Logout</button></router-link>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "ben",
                    password: "123"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ component: LoginComponent });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #44475C;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 80em;
        margin: auto;
    }
</style>