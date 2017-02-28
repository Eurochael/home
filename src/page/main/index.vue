<template>
<div>
    <div class="CarouselHeight">
        <Carousel></Carousel>
    </div>
    <mPanel v-for="(mPDB, Key) in mPDBS" :key="Key" :GetData="mPDB">
      <a slot="ImgDiv" 
        :href="mPDB.way"
         class="hoverTransition" 
        :class="{coverColor : mPDB.col}">
        <div>
          <div class="ContentDivMain">{{mPDB.tit}}</div>
          <div class="ContentDivSub">{{mPDB.sub}}</div>
        </div>
      </a>        
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
            img:'./static/img/mainCarousel/3panel/lable.png',
            isRv: false,
            col : false,
            tit : "OUR",
            sub : "HEART",
            ktit : "우리의",
            ksub : "마음가짐",
            way : '/intro/#location',
          },
          {
            img:'./static/img/mainCarousel/3panel/product.jpg',
            isRv: true,
            col : true,
            tit : "OUT",
            sub : "PRODUCT",
            ktit : "상품",
            ksub : "목록조회",            
            way : '/intro/#location',
          },
          {
            img:'./static/img/mainCarousel/3panel/business.jpg',
            isRv: false,
            col : false,
            tit : "CALL",
            sub : "+82-31-673-1039",
            ktit : "연락처",
            ksub : "031-673-1039",            
            way : '/intro/#location',
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
.hoverTransition{
  width  : 100%;
  height : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
}
.hoverTransition:hover{
  background-color: rgba(0,0,0,0.7);
  color: white !important;
}

.hoverTransition.coverColor:hover{
  background-color: rgba(255,255,255,0.7);
  color: black !important;
}
.ContentDivMain{
  font-size: 3rem;
  line-height: 3rem;
}
.ContentDivSub{
  font-size: 2.35rem;
  line-height: 2.35rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

@media(max-width:799px){
  .CarouselHeight{
      height : 500px;
    }
  .hoverTransition{
    background-color: rgba(0,0,0,0.5);
    color: white !important;
    
  }

  .hoverTransition.coverColor{
    background-color: rgba(255,255,255,0.5);
    color: black !important;
  }
  .ContentDivMain{
    font-size: 2.35rem;
    line-height: 2.35rem;
  }
  .ContentDivSub{
    font-size: 1.5rem;
    line-height: 1.5rem;
  }   
}
</style>
