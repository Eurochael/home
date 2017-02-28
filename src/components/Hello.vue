<template>
<div class="testHeight">

  <div>
    <md-card>
    <md-card-media>
      <img src="/static/img/logo.svg" alt="People">
    </md-card-media>

    <md-card-header>
      <div class="md-title">Title goes here</div>
      <div class="md-subhead">Subtitle here</div>
    </md-card-header>

    <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
  <md-button class="md-raised">Default</md-button>
  <md-button class="md-raised md-primary">Primary</md-button>
  <md-button class="md-raised md-accent">Accent</md-button>
  <md-button class="md-raised md-warn">Warn</md-button>
  <md-button class="md-raised md-primary" disabled>Disabled</md-button>
  <md-button class="md-raised md-dense">Dense</md-button>
</div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
.testHeight{
  height : 100vh;
}
</style>
