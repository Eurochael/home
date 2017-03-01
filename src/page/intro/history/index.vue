<template>
<div class="introHeight">
     <div class="FlexBox">
        <div class="lineBox">
            <div class="main">
                우리의 핵심 가치
            </div>
            <div class="sub">
                Our Core Values
            </div>
        </div>            
    </div>    
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
    height : 50vh;
}

.FlexBox{
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;

    margin-bottom : 20px;

}
.lineBox{
    border-left :10px solid black;
    padding-left: 10px;
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

.get{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    margin-left:50px;

    height : 70%;
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