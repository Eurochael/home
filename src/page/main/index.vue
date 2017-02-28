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
  height : 100vh;
}
@media(max-width:799px){
  .testHeight{
      height : 500px;
    }  
}
</style>
