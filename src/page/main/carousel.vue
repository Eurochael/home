<template>
<slider width="100%"
        height="100%"
        animation="fade"
        :interval="3000"
        :speed="1000">
  <slider-item  v-for="(data, key) in DBS"
                :key="key"
                :style="{ backgroundColor: '#3f51b5' }">
    <div class="Slide_Background" v-lazy:background-image="data.img">
        <div class="FlexBox">
            <div class="main">
                {{data.Title}}
            </div>
            <div class="sub">
                It' Real Adhesion Tape
            </div>            
        </div>
    </div>
  </slider-item>
</slider>  
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
            DBS:[
                {
                    img : './static/img/mainCarousel/mainPage1.jpg',
                    Title   : "보이지 않는 곳의 혁신",
                },
                {
                    img : './static/img/mainCarousel/mainPage2.jpg',
                    Title   : "당신의 생활 속에 언제나",
                },
                {
                    img : './static/img/mainCarousel/mainPage3.jpg',
                    Title   : "테이프의 영역을 넘었다",
                }                                
            ]
        }
    },

}
</script>

<style scoped>
.Slide_Background{
    height : 100%;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
}

.FlexBox{
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    background-color: rgba(255,255,255,0.5);
    min-height : fit-content;

    width : 500px;
    height: 300px;
    border-radius: 20px;
    
}
.main{
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 30px;
    font-family: 'Nanum Brush Script', cursive;
}

.sub{
    font-size: 2rem;
    font-family: 'Nanum Brush Script', cursive;
    color : #E72F00;
}


@media(max-width:799px){
    .FlexBox{
        width : 300px;
        height: 200px;        
    }
    .main{
        font-size: 2.5rem;
    }
    .sub{
        font-size: 2rem;
    }
}

          
</style>