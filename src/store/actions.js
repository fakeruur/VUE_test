export default {
    // aChangeName(context,payload){
    //     setTimeout(()=>{
    //         context.commit('aChangeName')
    //         payload.success()
    //     },100)
    aChangeName(context,payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('aChangeName')    //context上下文
                console.log(payload);
                resolve('true')
            },1000)
        })
    }
}