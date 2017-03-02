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
        <md-card class="contentDiv">
            <md-tabs md-dynamic-height md-elevation=1 id="his">
                <md-tab  
                            v-for="(DB, key) in DBS" 
                            :key="key"
                            :id="DB.YY" 
                            :md-label="DB.YY">
                <div class="contFlex" >
                    <md-whiteframe v-for="(DB2, key2) in DBS2[key]"
                                    :key="key2"
                                    md-elevation="9">
                    <figure>
                        <div v-lazy:background-image="DB2.img" class="imgDiv"></div>
                        <figcaption>
                            <p class="moreThan">{{DB2.MM}}</p>
                            {{DB2.Title}}
                        </figcaption>
                    </figure>                         
                    </md-whiteframe>
                    </div>        
                </md-tab>
            </md-tabs>
        </md-card>                        
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
  }
}
</script>

<style>
@media screen and (max-width:799px){
    .md-tabs .md-tab-header{
        padding : 0;
        font-size: 0.5rem;
        min-width : 40px;
    }
}
</style>

<style scoped>
.introHeight{
    display: flex;
    height : auto;
    flex-direction: column;
    background-color: #F8F8F8;
}

/*타이틀 영역*/
.FlexBox{
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    margin-top : 20px;
    margin-bottom : 20px;

}
.lineBox{
    border-left :10px solid #E3000E;
    padding-left: 10px;
    margin-bottom : 40px;
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
/*타이틀 영역*/
.contentDiv{
    display: flex;
    justify-content: center;
    width : 800px;
}
.contFlex{
    width : 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
}
div.md-whiteframe{
    width : 100%;
}
div.md-whiteframe:not(:last-child){
    margin-bottom : 20px;
}

figure {
  margin:0;
}

figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  padding-top : 0;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.moreThan{
    font-weight: bold;
    font-size: 2rem;
}

.imgDiv{
    height : 25vh;
    width : 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
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
    .contentDiv{
        width : 310px;
    }
    .imgDiv{
        height : 200px;
    }
    .moreThan{
        font-weight: bold;
        font-size: 1.2rem;
    }
}
</style>