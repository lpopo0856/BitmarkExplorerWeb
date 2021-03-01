<template>
  <div>
    <a-input-search
      placeholder="search blockhash"
      style="width: 800px"
      @search="onSearch"
    />
    <a-divider></a-divider>
    <p>
      Latest Blocks
    </p>
    <a-divider dashed />
    <BlockList/>
  </div>
</template>

<script>
import BlockList from '@/components/BlockList.vue'

export default {
  methods: {
    onSearch(value) {
      this.$router.push({ name: 'Block:id', params: { id: value } })
    },
  },
  components: {
    BlockList
  }
}
</script>