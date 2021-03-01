<template>
  <div>
    <Block/>
  </div>
</template>

<script>
import Block from '@/components/Block.vue'

export default {
  methods: {
    onSearch(value) {
      this.$router.push({ name: 'Block:id', params: { id: value } })
    },
  },
  components: {
    Block
  }
}
</script>