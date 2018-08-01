<template>
  <div class="hello">
    <div>
      <h2>{{msg}}</h2>
      <hr/>
      <h3>{{$store.state.test1.count}}</h3>
      <h3>{{doneTodosCount}}</h3>
    </div>
    <div>
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
      <!-- <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button> -->
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    computed: {
        // doneTodosCount() {
        //     return this.$store.getters.doneTodosCount;
        // }
        ...mapGetters(["doneTodosCount"])
    },

    methods: {
        ...mapMutations(["add", "reduce"])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
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
