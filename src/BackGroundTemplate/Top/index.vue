<!--======================================
  영역명      : Template Top
  최초작성자   : 김제언
  최초작성일자 : 2017.02.01
  최종수정일자 : 2017.02.01
  사용모듈    :
              1) Logo : 회사 로고
              2) route : Route Link
==========================================-->
<template>
<div class="TopBackground" @mouseover="TopHoverEnter" @mouseleave="TopHoverLeave">   
    <div class="TopFirst">
      <Logo :imgChange=true></Logo>
    </div>
    <div class="TopSecond">
        <route></route>
    </div>
    <div class="TopLast">
        <el-button type="text">
            <i class="el-icon-edit" @click="dialogTableVisible = true"></i>
        </el-button>        
    </div>
    <el-dialog title="Login" v-model="dialogTableVisible">
        
    </el-dialog>
</div>Top
</template>
<script>
import Logo from '../../components/logo'
import route from './routingFile'


export default {
    name : "TemplateTopIndex",
    components:{
        Logo, route
    },
    data(){
        return{
            dialogTableVisible: false,
        }
    },
    methods :{
        TopHoverEnter(){
            this.$store.state.TopHoverState = true;
        },
        TopHoverLeave(){
            this.$store.state.TopHoverState = false;
        }
    }
}   

</script>
<style>
.TopBackground{
    position: fixed;
    width : 100%;
    height : 50px;
    top : 0;
    left : 0;
    background-color: rgba(255,255,255,0.3);
    z-index: 99;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

.TopBackground:hover{
    background-color: black;
}



.TopBackground>div{
    width : 100%;
    height : 100%;
}

.TopBackground>div.TopFirst{
    padding-left: 20px;
    display: flex;
    align-items: center;
}


.TopBackground>div.TopLast{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    
}

.el-iconmenu{
    height : 20px;
    width : 20px;
}

/*dialog*/
.el-dialog__wrapper>.el-dialog{
    width : 50%;
    left : 50%;
    transform: translateX(-50%);    
}
div.el-dialog__header{
    width : auto;
}


@media screen and (max-width : 799px){
    .TopBackground>div.TopFirst{
        padding-left : 10px;
    }
    .TopBackground>div.TopSecond{
        min-width : 60vw;
    }
    .TopBackground>div.TopLast{
        padding-right : 10px;
    }
    .TopFirst .Logo{
        width : 70px;
    }
}
</style>