<template>
<div class="introHeight">
    <div class="get">
        <div v-for="(DB, key) in DBS" :key="key" class="warpping">
            <div class="year">{{DB.YY}}</div>
            <md-button class="md-icon-button md-raised md-dense">
                <md-icon>add</md-icon>
            </md-button>
        </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'history',
  data(){
      return{
          DBS:[
              {
                  YY:"2009"
              },
              {
                  YY:"2010"
              },
              {
                  YY:"2011"
              },
              {
                  YY:"2012"
              },
              {
                  YY:"2013"
              },
              {
                  YY:"2014"
              },
              {
                  YY:"2015"
              }                                                                      

          ]
      }
  }
}
</script>

<style scoped>
.introHeight{
    height : 40vh;
}
.get{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    margin-left:50px;

    height : 100%;
    width : 150px;
}
.warpping{
    display: flex;
    justify-content: center;
    align-items: center;
}
.year{
    font-size: 1.7rem;
    margin-right : 10px;
}
</style>