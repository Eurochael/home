<template>
    <div class="testHeight">
        <Carousel></Carousel>
    </div>
</template>

<script>
import Carousel from './carousel'

export default {
  name: 'MainPage',
  components:{
    Carousel,
  },
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
.testHeight{
  min-height : 100vh;
}
</style>
