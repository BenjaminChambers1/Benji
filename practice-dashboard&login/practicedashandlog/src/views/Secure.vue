<template>
<div id="secure">
  <h1>
     Mattress Direct | Dashboard
  </h1>
  <div class="navigation">
  <router-link class="main" to="/distributees">Distributees</router-link> 
  <router-link class="main" to="/Stock">Stock</router-link>
  </div>
  <router-view/>
  
</div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        }
    }
</script>

<style>
#secure {
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    padding: 20px;
    margin-top: 10px;
}
table{
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475C;
}
table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}
table td {
    padding-top: 0.25em;
    padding-bottom: 0.25em;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
  border-top: 2px solid  #44475C;
  border-bottom: 2px solid  #44475C;
}  
.navigation {
  font-size: 2em;
  width: 100%;
  height: 2em;
}
.main {
  width: 50%;
  padding-right: 1em;
  padding-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-decoration: none;
  
}
.main:hover {
  background-color: #CCCCCC;
}
</style>

