<template>
<div class="valueBack" id="value">
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
    <div class="FlexBox2">
    <md-card md-with-hover v-for="(data, key) in lowDatas" :key="key">
        <md-card-header>
            <div class="md-title">{{data.title}}</div>
            <!--<div class="md-subhead">Subtitle here</div>-->
        </md-card-header>        
        <md-card-media>
            <div v-lazy:background-image="data.img" class="imgDv">

            </div>
        </md-card-media>
        <md-card-content>
            {{data.content}}
        </md-card-content>
    </md-card>
    </div>            
</div>    
</template>

<script>

export default {
  name: 'value',
  data(){
      return{
            lowDatas : [
                                {
                                    img : '/static/img/intro/value/tech2.jpg',
                                    title : 'Technology',
                                    content : '엔지니어링, 과학과 경영의 원리를 연결하여 기술적 역량을 계획, 개발하고 실행을 통하여 조직의 전략과 운영상의 목표들을 만들고 달성하는 것이다.',
                                },
                                {
                                    img : '/static/img/intro/value/eco.jpg',
                                    title : 'Environment',
                                    content : ' 환경친화적인 청정기술 개발과 공정선택으로 자원과 에너지 사용을 최적 화함으로써 사업활동과 환경과의 조화를 추구한다.',
                                },
                                {
                                    img : '/static/img/intro/value/customer.jpg',
                                    title : 'Customer',
                                    content : '구매한 제품이나 서비스의 성능이 기대를 충족시키는 경험을 했을 때 고객이 느끼는 상태를 의미한다.',
                                },
                                {
                                    img : '/static/img/intro/value/human.jpg',
                                    title : 'Humanity',
                                    content : '인류 발전에 기여하는 기업이 되기 위해, 바른 길을 걸어가도록 노력하는 것을 의미한다.',
                                }
                        ],
          nso: '/static/img/intro/value/eco.jpg'
      }
  }
}
</script>

<style scoped>
.valueBack{
    height : auto;
    padding : 20px;
}

.valueBack .FlexBox2{
    
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
}

.FlexBox2>div{
    width : 100%;
}
.FlexBox2>div:not(:last-child){
    margin-right : 20px;
}
.imgDv{
    height : 200px;
    width : 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
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


@media(max-width:799px){
    .main{
        font-size: 2.3rem;
        line-height: 2.3rem;
    }
    .sub{
        font-size: 1.8rem;
        line-height: 1.8rem;
    }
    .valueBack>div{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .FlexBox2>div{
        width : 100%;
    }
    .FlexBox2>div:not(:last-child){
        margin-right : 0;
        margin-bottom : 20px;
    }
    .imgDv{
        min-height : 100px;
    }
}
</style>