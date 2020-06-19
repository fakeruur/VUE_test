import {INCREAMENT} from "./mutations-type";

export default {  //类似methods
    [INCREAMENT](state){
        this.state.counter++
    },
    decrement(){
        this.state.counter--
    },
    incrementCount(state,count){
        this.state.counter += count;
    },
    aChangeName(state){
        this.state.man.name='李四'
    },
}