<template>
<div class="testHeight">
<Carousel></Carousel>
</div>
</template>

<script>
import Carousel from './makeCarousel'
export default {
  name: 'hello',
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
  height : 100vh;
}
</style>
