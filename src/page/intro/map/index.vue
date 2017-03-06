<template>
  <div id="maps">
  <div class="FlexBox" v-in-viewport>
    <div class="lineBox">
      <div class="main">
          연락처
      </div>
      <div class="sub">
          CONTACT US
      </div>
    </div>
  </div>
  <div class="conBox">
    <md-whiteframe md-elevation="24" class="map" v-in-viewport>
      <gmap-map
        height="100%"
        :center="center"
        :zoom="15">
        <gmap-marker
          :position="center"
          :clickable="true"
          :draggable="true"
        ></gmap-marker>
      </gmap-map>
    </md-whiteframe>
    <div class="contentText">
       <table>
         <tbody>
           <tr>
             <td rowspan="2">
              <i class="material-icons">location_city</i>
             </td>
             <td>
              경기도 안성시 죽산면 용대길 144-34
             </td>
           </tr>
           <tr>
             <td>
              144-34, Yongdae-gil, Juksan-myeon, Anseong-si, Gyeonggi-do, Korea.
             </td>
           </tr>
           <tr>
             <td>
              <i class="material-icons">call</i>
             </td>
             <td>
              +82-31-673-1039
             </td>
           </tr>
           <tr>
             <td>
              <i class="material-icons">local_printshop</i>
             </td>
             <td>
              +82-31-673-3039
             </td>
           </tr>
         </tbody>
       </table>
    </div>
  </div>
</div>
</template>

<style>

    .vue-map-container{
        height : 100%;
    }
</style>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCMR_KjZPPylx_D6oFc7BHHQx2V-HEdDyE',
      v: '3.26'
    }
  });

  export default {
    data () {
      return {
        center: {lat: 37.0202830, lng: 127.4435390}
      }
    }
  }
</script>

<style scoped>
.map{
    height : 500px;
    width : 500px;
    background-color: black;
}
/*타이틀 영역*/
.FlexBox{
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    margin-top : 20px;
    margin-bottom : 20px;
}

.lineBox{
    border-left :10px solid #E3000E;
    padding-left: 10px;
    margin-bottom : 40px;
}

.main{
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom : 10px;
}

.sub{
    font-size: 2rem;
    line-height: 2rem;
}
/*타이틀 영역*/
.conBox{
  display: flex;
  justify-content: center;
}
.contentText{
  margin-left: 20px;
}
</style>