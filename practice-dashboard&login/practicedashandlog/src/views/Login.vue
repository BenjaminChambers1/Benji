<template>
<div>
    <div class="title">The Matress Direct Dashboard</div>
    <div id="login">
        <h2>Login</h2>
        <!--<input class="input-type" type="username" name="username" v-model="input.username" placeholder="Username" />-->
        <input class="input is-medium" v-validate="'required|text'"
        name="username" type="text" placeholder="Username" v-model="input.username">
        <input class="input-type" type="password" name="password" v-model="input.password" placeholder="Password" />
        <button class="input-type" type="button" v-on:click="login()">Login</button>
        <div>{{errorMessage}}</div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and/or password is incorrect");
                        alert("The username and/or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 4em;
        padding: 20px;
        height: auto;
    }
    .input-type {
        /* float: left;
        margin-left: 3em;
        margin-right: 10em; */
    }
    .title {
        text-align: center;
        margin-top: 4em;
        font-size: 2em;
    }
</style>
