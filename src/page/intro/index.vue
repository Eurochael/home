<template>
<div class="introHeight">
    <titlePic></titlePic>
    <value></value>
</div>
</template>
<script>
import titlePic from './titlePic'
import value from './value'

export default {
  name: 'intro',
  components:{
    titlePic,
    value,
  },
}
</script>

<style scoped>
.introHeight{
    height : auto;
}
</style>