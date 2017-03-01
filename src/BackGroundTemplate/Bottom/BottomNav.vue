<template>
<div class="BtmNavBackground">
    <ul v-for="menu in menus" class="btNav">
        <li class="MainTitle" @click="$store.commit('scrollTop')">
            <!--<router-link> -->
             <router-link :to="menu.addr" >
            {{menu.name}}

           </router-link>
        </li>
        <li class="SubTitle">
           <a v-for="subMenu in menu.subMenu" :href="subMenu.addr"> 
                       {{subMenu.name}}
           </a>          
        </li>
    </ul>
</div>    
</template>

<script>
export default{
    name : 'bottomNav',
    data(){
        return{
            menus : [
                {
                    name : '소개',
                    addr  : '/intro',
                    subMenu : [
                      {
                          name: '경영이념',
                          addr: '/intro#value'
                      },

                      {
                          name: '오시는길',
                          addr: '/intro#location'
                      },                                            
                      {
                          name: '비전',
                          addr: '/intro#future'
                      },                      
                      {
                          name: '히스토리',
                          addr: '/intro#history'
                      },                                                                  
                    ]
                },
                {
                    name : '제품',
                    addr  : '/product',
                    subMenu : [
                      {
                          name: '제품조회',
                          addr: '/product#productSearch'
                      },
                      {
                          name: 'QUESTION',
                          addr: '/product#question'
                      },
                    ]
                    
                },
                {
                    name : '채용',
                    addr  : '/hire',
                    subMenu : [
                      {
                          name: '일하는 방식',
                          addr: '/hire#work'
                      },
                      {
                          name: '복지제도',
                          addr: '/hire#cost'
                      },
                      {
                          name: '지원하기',
                          addr: '/hire#hire'
                      },                                            
                    ]
                },                                
            ]
        }
    }

}    
</script>

<style scoped>

.BtmNavBackground{
    background-color: #3C3D41;
    display: flex;
    width : 100%;
    align-items: flex-start !important;
    min-height : 10vh !important;
}
.btNav{
    width : 150px;    
}

.MainTitle{
    font-size: 1.5rem;
    height : 50px;
}

.md-theme-default .TemplateBackgorund  .MainTitle>a,  
.md-theme-default .TemplateBackgorund .MainTitle>a:active{
    height : 100%;
    width : 100%;
    color: #00A5E5;
    background-color: transparent;

}

.md-theme-default .TemplateBackgorund .SubTitle>a{

    height : 30px;
    width : 100%;
    color: #E6E6E6;
}

.SubTitle{
    display: flex;
    flex-direction: column;
}


ul{
    list-style: none;
    padding : 0;
}
ul>li, ul>li>a, ul>li>a:active {
    display: flex;
    justify-content: center;
    align-items: center;
}

.md-theme-default .TemplateBackgorund a:hover{
    color:black;
    background-color: #D4D1CC;
}

@media screen and (max-width : 799px){
    a:hover{
        color:#E6E6E6;
        background-color: inherit;
    }    
}
</style>