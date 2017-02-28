<template>
<div class="Carousel_Background">
<slider width="100%"
        height="100%"
        animation="fade"
        :interval="3000"
        :speed="1000">
  <slider-item :style="{ backgroundColor: '#3f51b5' }">테스트 가능?</slider-item>
  <slider-item :style="{ backgroundColor: '#eee' }"></slider-item>
  <slider-item :style="{ backgroundColor: '#f44336' }"></slider-item>
  <slider-item :style="{ backgroundColor: '#3f51b5' }">테스트 가능?</slider-item>
  <slider-item :style="{ backgroundColor: '#eee' }"></slider-item>  
  <slider-item :style="{ backgroundColor: '#f44336' }"></slider-item>
  <slider-item :style="{ backgroundColor: '#3f51b5' }">테스트 가능?</slider-item>  
</slider>  

</div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default{
    name : 'test',
    components: {    
        Slider,
        SliderItem        
    },    
    data(){
        return{

        }
    },

}
</script>

<style>
.floatin{
    display: block;
    position: absolute;
    top: 40%;
    left: 0%;
    color: white;
}
.Carousel_Background{
    height : 100%;
    width : 100%;
    overflow: hidden;
}



          
</style>