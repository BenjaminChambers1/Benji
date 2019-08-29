<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to my website on APIs for open air quality data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
