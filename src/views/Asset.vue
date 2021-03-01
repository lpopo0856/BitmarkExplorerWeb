<template>
  <div>
    <Asset/>
  </div>
</template>

<script>
import Asset from '@/components/Asset.vue'

export default {
  methods: {
    onSearch(value) {
      this.$router.push({ name: 'Asset:id', params: { id: value } })
    },
  },
  components: {
    Asset
  }
}
</script>