<template>
<md-whiteframe md-elevation="9">
    <md-table v-once>
        <md-table-header>
            <md-table-row>
            <md-table-head>종류</md-table-head>
            <md-table-head>특징</md-table-head>
            </md-table-row>
        </md-table-header>

        <md-table-body>
            <md-table-row v-for="(row, index) in 5"
                          @mouseover.native="testGet" 
                          :key="index">
            <md-table-cell>Dessert Name</md-table-cell>
            <md-table-cell v-for="(col, index) in 1" 
                           :key="index">10</md-table-cell>
            </md-table-row>
        </md-table-body>
    </md-table>    
</md-whiteframe>
</template>

<script>
export default{
    name : 'productTable',
    data(){
        return{
            
        }
    },
    methods:{
        testGet(){
            console.log('test');
        }
    }
}    
</script>