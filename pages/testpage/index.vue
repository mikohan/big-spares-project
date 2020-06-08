<template>
  <div class="wrapper">
    <h1>Page for tests</h1>
    <div>
      <v-select
        v-model="selected"
        :option="options"
        :placement="placement"
      ></v-select>
      <span>{{ placement }}</span>
    </div>
    <div>
      <!-- <tree :tree-data="loadedCategories"></tree> -->
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import Tree from '~/components/Tree'
export default {


  data () {
    return {
      index: 1,
      options: [{
          value:1,
          label:'option1'
      },{
          value:2,
          label:'option2'
      }],
      selected:{
          value:1,
          label:'option1'
      },
      placement:'down'
    }
  },


  props: {
    treeData: Object
  },
  components: {
    Tree,
    vSelect,
  },
  computed: {
    // loadedCategories() {
    //   const categories = this.$store.getters.loadedCategories
    //   return categories
    // }
  },

  methods: {},
  // async fetch(context) {
  //   if (context.store.getters.loadedCategories.length === 0) {
  //     await context.store.dispatch('fetchCategories')
  //   }
  // },
  mounted() {
    // console.log(this.loadedCategories)
  }
}
</script>

<style lang="scss">
@import "~/node_modules/vue-select/src/scss/vue-select.scss";
.wrapper {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
h1 {
  margin-top: 50px;
  margin-bottom: 100px;
}
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>
