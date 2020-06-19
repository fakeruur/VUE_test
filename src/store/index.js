import Vuex from 'vuex'
import Vue from 'vue'



import {INCREAMENT} from './mutations-type'
import moduleA from './modules/moduleA'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state ={
    counter:1000,
    computer:'华为',
    man:{
        name:'lihui',
        age:18,
        sex: 'male'
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        moduleA  //a放在state中---用：$store.state.a.name
    }
})
export default store