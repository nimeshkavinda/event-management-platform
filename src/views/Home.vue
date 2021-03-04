<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AboutPage></AboutPage>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AboutPage from '@/views/About.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    AboutPage
  }
}
</script>
