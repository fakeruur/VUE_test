<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">+</button> | <button @click="sub">-</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addCount(5)">+5</button> |
    <button @click="changeName" :disabled="isTrue">改变</button>
    <h3>{{$store.state.man}}</h3>
    <h3>{{$store.getters.fullName}}</h3>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a  href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import {INCREAMENT} from '../store/mutations-type'

export default {
  name: 'HelloWorld',
  data(){
    return{
      msg:'"Welcome to Your Vue.js App"',
      isTrue:false
    }
  },
  methods:{
    add(){
      this.$store.commit(INCREAMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
    },
    changeName(){
      // this.$store.dispatch('aChangeName',{
      //   message:'hello',
      //   success:()=>{
      //     console.log('success');
      //   }
      // })
      this.$store
              .dispatch('aChangeName','我是携带的信息')
              .then(res=>{
                console.log('提交成功');
                console.log(res)
                this.isTrue=res
      })
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
