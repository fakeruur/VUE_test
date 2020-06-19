<template>
    <div>
        hahahhahah
        <h2>你好，{{$route.params.userId}}</h2>
        <h3>{{data}}</h3>
    </div>
</template>

<script>
    import {request} from "../network/request";
    export default {
        name: "User",
        data(){
           return{
               data:''
           }
         },
    created(){
        request({
            url:'/get',
        }).then(res=>{
            this.data=res;
            console.log(res);
        }).catch(res=>{
        })
    }
    }



</script>

<style scoped>

</style>