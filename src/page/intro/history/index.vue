<template>
<div class="introHeight" id="history">
     <div class="FlexBox">
        <div class="lineBox">
            <div class="main">
                제니스의 역사
            </div>
            <div class="sub">
                History
            </div>
        </div>            
    </div>
    <div class="contentDiv">
        <div class="response">
            <div v-for="(DB, key) in DBS" :key="key" class="warpping">
                <div class="year">{{DB.YY}}</div>
                <md-button class="md-icon-button md-raised md-dense" @click.native="clk(key)">
                    <md-icon>add</md-icon>
                </md-button>
            </div>
        </div>
        <div class="receive">
            <div class="selYear">{{DBS[sYear].YY}}</div>
            <Carousel3d ref="carousel">
                    
                <Slide v-for="(DB2, key) in DBS2[sYear]" :index="key" :key="key" :class="{isHideden : hddn(key)}">
                    <figure>
                        <div v-lazy:background-image="DB2.img" class="imgDiv"></div>
                        <figcaption>
                            {{DB2.Title}}
                        </figcaption>
                    </figure>                    
                </Slide>
            </Carousel3d>
        </div>
    </div>    
</div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'history',
  components:{
    Carousel3d,
    Slide
  },
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
          ],
          DBS2:[
              [//2009
                {
                    MM : '06',
                    Title : 'JINWHA 창업',
                    img : '/static/img/intro/history/'
                },
                {
                    MM : '11',
                    Title : '벤처 기업 선정',
                    img : '/static/img/intro/history/200911.png'
                },
                {
                    MM : '11',
                    Title : '벤처 기업 선정',
                    img : '/static/img/intro/history/200911.png'
                }                

              ],
              [//2010
                {
                    MM : '03',
                    Title : 'IT 소재용 기능성 양면 Tape 개발',
                    img : '/static/img/intro/history/'
                },
              ],
              [//2011
                {
                    MM : '01',
                    Title : '제니스 설립',
                    img : '/static/img/intro/history/201101.svg'
                },
                {
                    MM : '03',
                    Title : '품질경영시스템 인증',
                    img : '/static/img/intro/history/201103.png'
                },
                {
                    MM : '12',
                    Title : '제 1공장 준공',
                    img : '/static/img/intro/history/201112.svg'
                },        
              ],
              [//2012
                {
                    MM : '03',
                    Title : '환경경영시스템 인증',
                    img : '/static/img/intro/history/201203.png'
                },
                {
                    MM : '05',
                    Title : '전용 생산라인 및 시스템 구축',
                    img : '/static/img/intro/history/201205.png'
                },
                {
                    MM : '11',
                    Title : '지식경제부장관상 표창',
                    img : '/static/img/intro/history/201211.jpg'
                }
              ],
              [//2013
                {
                    MM : '03',
                    Title : 'INNO-BIZ 선정',
                    img : '/static/img/intro/history/201303.jpg'
                },
                {
                    MM : '05',
                    Title : '경기도유망중소기업선정',
                    img : '/static/img/intro/history/201310.png'
                },
                {
                    MM : '11',
                    Title : '기업부설연구소 인정',
                    img : '/static/img/intro/history/201311.png'
                }
              ],
              [//2014
                {
                    MM : '11',
                    Title : '창조기업 선정',
                    img : '/static/img/intro/history/201411.jpg'
                },
              ],
              [//2015
                {
                    MM : '05',
                    Title : '연구마을 입주',
                    img : '/static/img/intro/history/201505.png'
                },
                {
                    MM : '11',
                    Title : '경기도지사상 표창',
                    img : '/static/img/intro/history/201511.png'
                }
              ],       
          ],
          sYear : 0
      }
  },
  methods:{
      clk(val){
          this.sYear = val;
          this.$refs.carousel.goSlide(0);
      },
      hddn(vla){
          if(vla == 2 && this.sYear == 0){
              return true;
          } else{
              return false;
          };
      }
  }
}
</script>

<style>
#history .carousel-3d-container figure {
  margin:0;
}

#history .carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
#history .carousel-3d-slide.isHideden{
    visibility: hidden !important;
}
</style>

<style scoped>
.introHeight{
    display: flex;
    height : auto;
    flex-direction: column;
}

.FlexBox{
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;

    margin-bottom : 20px;

}
.lineBox{
    border-left :10px solid #E3000E;
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

.contentDiv{
    display: flex;
    justify-content: center;
}
.response{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    padding-right : 20px;
    border-right : 5px solid black;
    height : 100%;
    width : 150px;
}

.receive{
    width : 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.selYear{
    font-size: 2rem;
}

.warpping{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    
}
.year{
    font-size: 1.7rem;
    margin-right : 10px;
}
figure{
    height : 100%;
}
.imgDiv{
    height : 100%;
    width : 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    background-color: white;
}


@media(max-width:799px){
    .introHeight{
        height : 70vh;
    }
    .main{
        font-size: 2.3rem;
        line-height: 2.3rem;
    }
    .sub{
        font-size: 1.8rem;
        line-height: 1.8rem;
    }
    .selYear{
        font-size: 1.5rem;
    }
}
</style>