<!--========================================
  영역명      : 배경이 되는 메뉴 메인 템플릿
  최초작성자   : 김제언
  최초작성일자 : 2017.01.31
  최종수정일자 : 2017.02.01
  사용모듈    :
              1) 상단
              2) 하단
  사용기능    : 
              1) scroll Event Checker              
============================================-->

<template>
    <div class="TemplateBackgorund">
        <Top></Top>   
        <router-view></router-view>
        <Bottom></Bottom>   
    </div>
</template>

<script>
import Top from './Top/'
import Bottom from './Bottom/'

export default {
    components:{
        Top ,  Bottom 
    },
    methods:{
      handleScroll(e){
        let Yposition = window.pageYOffset;
        if(Yposition > this.$store.state.scroll){
        //   this.$store.state.scroll = false;
        //   this.$store.state.scrollY = Yposition;
        } else if(Yposition -20 < 0){
        //   this.$store.state.scroll = true;
        //   this.$store.state.scrollY = 0;
        }
      }        
    },
    mounted () {
       window.addEventListener('scroll', this.handleScroll);
    }
}    
</script>

<style scoped>
.TemplateBackgorund{
    background-color: transparent;
    min-height : 100vh;
    min-width  : 100%;
    width  : 100%;

}
</style>