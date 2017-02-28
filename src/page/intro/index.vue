<template>
<div class="introHeight">
    <titlePic></titlePic>
</div>
</template>
<script>
import titlePic from './titlePic'

export default {
  name: 'intro',
  components:{
    titlePic,
  },
}
</script>

<style scoped>
.introHeight{
    height : auto;
}
</style>