<template>
<div class="BottomBackground">   
    <div class="bottom_logo">
        <img src="../../assets/bottom/gray.png">
    </div>
    <Bottom></Bottom>
    <div class="COPYRIGHT">
        COPYRIGHT ⓒ ZENITH. ALL RIGHTS RESERVED.
    </div>
    <Logo></Logo>
</div>
</template>
<script>
import Logo from '../../components/logo'
import Bottom from './BottomNav'

export default {
    components:{
        Logo, Bottom
    }
}   

</script>
<style scoped>
.BottomBackground{
    background-color: transparent;
    border-top : 2px solid #E3000E;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.COPYRIGHT{
    display: flex;
    justify-content: center;
    align-items: center;
}

.BottomBackground>div{
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width : 100%;
    min-height : 35px;
    height: auto;
}

.BottomBackground>div.bottom_logo{
    background-color: whitesmoke;
}
.bottom_logo>img{
    width : 25%;
}


@media screen and (max-width : 799px){
    .bottom_logo>img{
        width : 90%;
    }
    .COPYRIGHT{
        font-size: 90%;
    }
}

</style>