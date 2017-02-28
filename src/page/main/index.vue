<template>
<div>
    <div class="CarouselHeight">
        <Carousel></Carousel>
    </div>
    <mPanel v-for="(mPDB, Key) in mPDBS" :key="Key" :GetData="mPDB">
      <div slot="ContentDiv">
        테스트
        </div>
      <div slot="ImgDiv">
        테스트2
        </div>        
    </mPanel>
</div>    
</template>

<script>
import Carousel from './carousel'
import mPanel from './mPanel'

export default {
  name: 'MainPage',
  components:{
    Carousel,
    mPanel
  },
  data () {
    return {
        mPDBS:[
          {
            test:'./static/img/hire/handshake.jpg',
            isRv: false,

          },
          {
            test:'./static/img/mainCarousel/3panel/greeting.svg',
            isRv: true,

          },
          {
            test:'./static/img/mainCarousel/3panel/handshake.png',
            isRv: false,

          },
        ]      
    }
  }
}
</script>


<style scoped>
.CarouselHeight{
  height : 100vh;
  
}
@media(max-width:799px){
  .CarouselHeight{
      height : 500px;
    }  
}
</style>
