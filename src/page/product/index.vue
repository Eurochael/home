<template>  
<div class="isFull">
    <div v-lazy:background-image="img" class="img">
        <div v-for="(btn, key) in btns"   
             :style="btn.p"
             :key="key"
             :class="btn.k"
             class="button animated infinite flash"></div>
    </div>
    <pTb></pTb>
</div>
</template>

<script>
import pTb from './pdTable'

export default{
    name : "produceimg",
    components:{
        pTb
    },
    data(){
        return{
            img : '/static/img/product/samsung.jpg',
            btns :[
               {   k : 'btnB',
                   p :  {
                            left : '10%',
                            top  : '70%'
                        }
               },
               {   k : 'btnB',
                   p :  {
                            left : '15%',
                            top  : '70%'
                        }
               },
               {   k : 'btnB', 
                   p :  {
                            left : '29.8%',
                            top  : '38.3%'
                        }
               },
               {   k : 'btnR',
                   p :  {
                            left : '32%',
                            top  : '39%'
                        }
               },
               {   k : 'btnG',
                   p :  {
                            left : '31.8%',
                            top  : '48%'
                        }
               },
               {   k : 'btnB',
                   p :  {
                            left : '31.5%',
                            top  : '54%'
                        }
               },
               {   k : 'btnB', 
                   p :  {
                            left : '32%',
                            top  : '66%'
                        }
               },
               {   k : 'btnB', 
                   p :  {
                            left : '37%',
                            top  : '50%'
                        }
               },
               {   k : 'btnB', 
                   p :  {
                            left : '37%',
                            top  : '44%'
                        }
               },
               {   k : 'btnG', 
                   p :  {
                            left : '50%',
                            top  : '27.8%'
                        }
               },
               {   k : 'btnR', 
                   p :  {
                            left : '52%',
                            top  : '45%'
                        }
               },
               {   k : 'btnB', 
                   p :  {
                            left : '71.5%',
                            top  : '45%'
                        }
               },
               {   k : 'btnB', 
                   p :  {
                            left : '72.5%',
                            top  : '59%'
                        }
               },
               {   k : 'btnR', 
                   p :  {
                            left : '73%',
                            top  : '16%'
                        }
               },
               {   k : 'btnR', 
                   p :  {
                            left : '78.5%',
                            top  : '17.5%'
                        }
               },
               {   k : 'btnG', 
                   p :  {
                            left : '83%',
                            top  : '32%'
                        }
               },
               {   k : 'btnB', 
                   p :  {
                            left : '91.7%',
                            top  : '46.5%'
                        }
               },
               {   k : 'btnR', 
                   p :  {
                            left : '87.5%',
                            top  : '49%'
                        }
               },
           ]
        }
    },
    methods:{
        tessst(){
            location.href = "zzz"
        }
    }
}
</script>

<style scoped> 
.isFull{
    padding : 20px;
    padding-top : 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.img{
    height : 500px;
    width : 800px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    position : relative;
    background-color: red;

}

div.button{
    border-radius: 1px;
    height : 2px;
    width : 2px;
    background-color: #E72F00;
    position : absolute;
    box-shadow: 0px 0px 10px 10px #E72F00;
    animation-duration: 4s;
    /*display: none;*/
}

@media screen and (max-width : 799px){
    .img{
        height : 200px;
        width : 320px;
    }
    div.button{
        border-radius: 0.5px;
        height : 1px;
        width : 1px;
        box-shadow: 0px 0px 5px 5px #E72F00;
    }
}
</style>