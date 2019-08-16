<template>
<div class="distributeeinput">
    <div>
    <div>Name of new Stock</div>
        <input class="input is-medium" v-validate="'required|'"
        name="text" type="input" placeholder="Name of New Stock" v-model="newStockName">
        <span class="is-danger">{{ errors.first('text') }}</span>
    </div>
    <div>
    <div>Number of Stock Item</div>
    
        <input class="input is-medium" v-validate="'required|decimal:0'"
        name="number" type="input" placeholder="amount required" v-model="newStockAmount">
        <span class="is-danger">{{ errors.first('number') }}</span>
    </div>
    
    <button v-on:click="AddNewStock(newStockName, newStockAmount)">Add</button>
  </div>
</template>

<script>
    export default {
        name: 'DistInput',
        data() {
            return {
                newStockName: "",
                newStockAmount: "",
            }
        },
        methods: {
            AddNewStock() {
                this.$store.state.Stockarray.push({name: this.newStockName, Stock: this.newStockAmount, DeliveryDate: '', DeliverySize: 0});
                this.newStockName = '';
                this.newStockAmount = '';
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
