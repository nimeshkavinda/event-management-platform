<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <FeatureEventCard></FeatureEventCard>
    <AboutPage></AboutPage>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import FeatureEventCard from '@/components/FeatureEventCard.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FeatureEventCard,
    
  }
}
</script>
