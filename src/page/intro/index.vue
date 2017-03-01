<template>
<div class="introHeight">
    <titlePic></titlePic>
    <value></value>
    <history></history>
</div>
</template>
<script>
import titlePic from './titlePic'
import value from './value'
import history from './history'

export default {
  name: 'intro',
  components:{
    titlePic,
    value,
    history,
  },
}
</script>

<style scoped>
.introHeight{
    height : auto;
}
</style>