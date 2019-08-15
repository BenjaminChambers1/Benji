<template>
<div class="distributeeinput">
    <div>
    <div>Name of Company/Distributee</div>
        <input class="input is-medium" v-validate="'required|'"
        name="text" type="input" placeholder="Name of Distributee" v-model="newDistName">
        <span class="is-danger">{{ errors.first('text') }}</span>
    </div>
    <div>
    <div>Email</div>
    
        <input class="input is-medium" v-validate="'required|email'"
        name="email" type="input" placeholder="email required" v-model="newDistEmail">
        <span class="is-danger">{{ errors.first('email') }}</span>
    </div>
    <div>
    <div>Contact Number</div>
    
        <input class="input is-medium" v-validate="'required|decimal:0|min:11|max:11'"
        name="contact" type="input" placeholder="Contact Number" v-model="newDistContact">
        <span class="is-danger">{{ errors.first('contact') }}</span>
    </div>
    <button v-on:click="AddNewDistributee(newDistName, newDistEmail, newDistContact)">Add</button>
  </div>
</template>

<script>
    export default {
        name: 'DistInput',
        data() {
            return {
                newDistName: "",
                newDistEmail: "",
                newDistContact: "",
                newEntry: [''],
            }
        },
        methods: {
            AddNewDistributee() {
                this.$store.state.distributeesarray.push({name: this.newDistName, email: this.newDistEmail, contact: this.newDistContact});
                console.log(this.newDistName, this.newDistEmail, this.newDistContact);
            }
        }
    }
</script>

<style scoped>
button {
    padding: 1em;
}
input {
    padding: 1em;
    min-width: 30em;
    width:auto;
}
</style>
