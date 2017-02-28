<!--======================================
  영역명      : Route Link
  최초작성자   : 김제언
  최초작성일자 : 2017.02.01
  최종수정일자 : 2017.02.01
  사용모듈    :
              1) Logo
==========================================-->


<template>
<div class="routingBackground" @click="$store.commit('scrollTop')">
    <router-link v-for="(menu, key) in menus"
                 :key="key" 
                 :to="menu.addr" 
                 :class="{ white: $store.state.TopHoverState }">
        {{menu.name}}
    </router-link>
</div>    
</template>

<script>
export default{
    name : "Routing",
    data() {
        return{
            menus : [
                {
                    name : "소개",
                    addr : "/intro",
                },
                {
                    name : "제품",
                    addr : "/product",
                },
                {
                    name : "채용",
                    addr : "/hire",
                }
            ]
        }
    }
}    
</script>

<style scoped>
.routingBackground{
    width : 100%;
    height : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.routingBackground>a{
    height : 40px;
    width  : 100px;
    padding-top : 10px;
    display: inline-flex;
    justify-content: center;
    font-size : 1.35rem;
    font-family: 'Jeju Gothic', sans-serif;
}

.routingBackground>a:hover{
    padding-bottom: 10px;
    border-bottom : 2px solid rgba(227, 0, 14, 0.7);
}

.white{
    color : white;
}
@media screen and (max-width : 799px){
    .routingBackground>a{
        width: 60px;
    }
}

</style>