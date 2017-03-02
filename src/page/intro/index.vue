<template>
<div class="introHeight" id="intro">
    <titlePic></titlePic>
    <value></value>
    <history></history>
    <Gmap></Gmap>
</div>
</template>
<script>
import titlePic from './titlePic'
import value from './value'
import history from './history'
import Gmap from './map'

export default {
  name: 'intro',
  components:{
    titlePic,
    value,
    history,
    Gmap,
  },
}
</script>

<style scoped>
.introHeight{
    height : auto;
}

</style>