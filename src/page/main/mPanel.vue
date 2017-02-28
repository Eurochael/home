<template>
<div class="mPanel_background" :class="{reverse : GetData.isRv}">

    <div class="mPanel_bkImg" v-lazy:background-image="GetData.img">
        <slot name="ImgDiv"></slot>
    </div>    
</div>
</template>

<script>
export default {
  name: 'hello',
  props:[
      'GetData'
  ],
  data () {
    return {
      img:'./static/img/hire/handshake.jpg'
    }
  }
}
</script>


<style scoped>
.mPanel_background{
  height : 40vh;
  display: flex;
  justify-content: center;
  background-color: #E6E6E6;
  
}
.mPanel_Content{
    height : 100%;
    width : 40%;
    display: flex;
    justify-content: center;    
    align-items: center;
    
}
.mPanel_bkImg{
    height : 100%;
    width : 60%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.mPanel_background.reverse{
    flex-direction: row-reverse;
}
@media(max-width:799px){
  .mPanel_Content{
      display: none;
    }
    .mPanel_bkImg{
        width : 100%;
    }  
}
          
</style>
