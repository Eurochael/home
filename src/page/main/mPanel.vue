<template>
<div class="mPanel_background" :class="{reverse : GetData.isRv}">
    <div class="mPanel_Content">
        <slot name="ContentDiv"></slot>
    </div>
    <div class="mPanel_bkImg" v-lazy:background-image="GetData.test">
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
      test:'./static/img/hire/handshake.jpg'
    }
  }
}
</script>


<style scoped>
.mPanel_background{
  height : 33vh;
  display: flex;
  
}
.mPanel_Content{
    height : 33vh;
    width : 40%;
    display: flex;
    justify-content: center;    
    align-items: center;
    
}
.mPanel_bkImg{
    height : 33vh;
    width : 60%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.mPanel_background.reverse{
    flex-direction: row-reverse;
}
          
</style>
