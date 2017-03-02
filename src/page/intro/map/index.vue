<template>
<div class="height">   
     <div class="map">
      <gmap-map
        height="100%"
        :center="center"
        :zoom="15">
        <gmap-marker
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
</div>
</template>

<style>
    .height{
        height : 100vh;
    }
    .map{
        height : 500px;
        width : 500px;
        background-color: black;
    }
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
        center: {lat: 37.0202830, lng: 127.4435390},
        markers: [{
          position: {lat: 37.0202830, lng: 127.4435390}
        }]
      }
    }
  }
</script>