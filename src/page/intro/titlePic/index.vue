<template>
<div v-lazy:background-image="img" class="introMainBack">
    <div class="FlexBox animated hinge flip" >
        <div class="main">
            상상을 현실로 만드는 기업
        </div>
        <div class="sub">
            It' Real Adhesion Tape
        </div>            
    </div>
</div>    
</template>
<script>
export default {
  name: 'MainPage',
  data () {
    return {
            img : '/static/img/intro/carousel/book.jpg'
        }
    }
}
</script>

<style scoped>
/*전환효과*/


.FlexBox.in-viewport.fully-in-viewport {
  animation-duration: 5s;
  animation-fill-mode: both;
  animation-name: showcolorWhite;
}

@keyframes showcolorWhite {
  50%{
    background-color: rgba(255,255,255,0.7);
    color: black !important;        
  }
}

/*전환효과*/


.introMainBack{
    height : 100vh;
    width : 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
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