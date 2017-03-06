<template>
<router-link to="/" >
    <div  class="Logo" :class="{hover : imageChange}" ></div>
</router-link>
</template>

<script>
export default{
    name : "logo",
    props : [
        'imgChange'
    ],
    computed:{
        imageChange(){
            if(this.imgChange)
            {
                return this.$store.state.TopHoverState;
            }
        }
    }
}
</script>

<style scoped>
.Logo{
    width : 99px;
    height : 20px;
    background-image: url("../../assets/logoE2.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;

}

.hover{
    background-image: url("../../assets/logoW.svg")
}

</style>