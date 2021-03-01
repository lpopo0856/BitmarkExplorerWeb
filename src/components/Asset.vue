<template>
  <a-descriptions title="Asset Info" bordered :column=4 style="width: auto">
    <a-descriptions-item label="assetId" :span="4">
      {{Asset.assetId}}
    </a-descriptions-item>
    <a-descriptions-item label="assetName" :span="4">
      {{Asset.assetName}}
    </a-descriptions-item>
    <a-descriptions-item label="assetFingerprint" :span="4">
      {{Asset.assetFingerprint}}
    </a-descriptions-item>
    <a-descriptions-item label="assetSignature" :span="4">
      {{Asset.assetSignature}}
    </a-descriptions-item>
    <a-descriptions-item label="assetRegistrant" :span="2">
      {{Asset.assetRegistrant}}
    </a-descriptions-item>
    <a-descriptions-item label="assetSequence" :span="1">
      {{Asset.assetSequence}}
    </a-descriptions-item>
    <a-descriptions-item label="assetStatus" :span="1">
     {{Asset.assetStatus}}
    </a-descriptions-item>
    <a-descriptions-item label="assetBlockNumber" :span="1">
      {{Asset.assetBlockNumber}}
    </a-descriptions-item>
    <a-descriptions-item label="assetBlockOffset" :span="1">
      {{Asset.assetBlockOffset}}
    </a-descriptions-item>
    <a-descriptions-item label="assetExpiresAt" :span="1">
      {{Asset.assetExpiresAt}}
    </a-descriptions-item>
    <a-descriptions-item label="assetRawMetadata" :span="4">
      {{Asset.assetRawMetadata}}
    </a-descriptions-item>
    <a-descriptions-item label="assetMetadata" :span="4">
      {{Asset.assetMetadata}}
    </a-descriptions-item>
  </a-descriptions>
</template>
<script>

export default {
  computed: {
    Asset() {
      return this.$store.state.Asset;
    },
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("GetAsset", this.$route.params.id);
  },
  destroyed() {
    console.log('destroying')
    this.$store.commit("CleanAsset")
  },
};
</script>