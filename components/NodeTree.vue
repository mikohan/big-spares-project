<template>
  <li class="node-tree">
    <span class="label">{{ node.name }} -- {{ node.id }}</span>

    <ul v-if="node.children && node.children.length">
      <node v-for="child in node.children" :node="child" :key="child.id"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'node',
  props: {
    node: Object
  },
  created() {
    // console.log('NodeTree', this.node)
  }
}
</script>
