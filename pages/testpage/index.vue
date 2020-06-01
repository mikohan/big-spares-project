<template>
  <div class="wrapper">
    <h1>Page for tests</h1>
    <div>
      <tree :tree-data="loadedCategories"></tree>
    </div>
  </div>
</template>

<script>
import Tree from '~/components/Tree'
export default {
  props: {
    treeData: Object
  },
  components: {
    Tree
  },
  computed: {
    loadedCategories() {
      const categories = this.$store.getters.loadedCategories
      return categories
    }
  },

  methods: {},
  async fetch(context) {
    if (context.store.getters.loadedCategories.length === 0) {
      await context.store.dispatch('fetchCategories')
    }
  },
  mounted() {
    // console.log(this.loadedCategories)
  }
}
</script>

<style lang="scss" scoped>
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
