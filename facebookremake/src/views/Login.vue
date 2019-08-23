<template>
  <div class="login">
    <TopBar/>
    <MainBody/>
    <Footer/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MainBody from '@/components/MainBody.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'login',
  components: {
    TopBar,
    MainBody,
    Footer,
  }
}
</script>
