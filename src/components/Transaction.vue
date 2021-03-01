<template>
  <a-descriptions title="Transaction Info" bordered :column=4 style="width: auto">
    <a-descriptions-item label="txId" :span="2">
      {{Transaction.txBitmarkId}}
    </a-descriptions-item>
    <a-descriptions-item label="txStatus" :span="1">
      {{Transaction.txStatus}}
    </a-descriptions-item>
    <a-descriptions-item label="txSequence" :span="1">
      {{Transaction.txSequence}}
    </a-descriptions-item>
    <a-descriptions-item label="txSignature" :span="4">
      {{Transaction.txSignature}}
    </a-descriptions-item>
    <a-descriptions-item label="txOwner" :span="4">
      {{Transaction.txOwner}}
    </a-descriptions-item>
    <a-descriptions-item label="txCountersignature" :span="4">
      {{Transaction.txCountersignature}}
    </a-descriptions-item>
    <a-descriptions-item label="txAssetId" :span="4">
      {{Transaction.txAssetId}}
      <button v-if="Transaction.txAssetId" @click="onAssetId(Transaction.txAssetId)">check</button>
    </a-descriptions-item>
    <a-descriptions-item label="txPreviousId" :span="2">
     {{Transaction.txPreviousId}}
    </a-descriptions-item>
    <a-descriptions-item label="txBitmarkId" :span="2">
      {{Transaction.txBitmarkId}}
    </a-descriptions-item>
    <a-descriptions-item label="txBlockNumber">
      {{Transaction.txBlockNumber}}
    </a-descriptions-item>
    <a-descriptions-item label="txHead">
      {{Transaction.txHead}}
    </a-descriptions-item>
    <a-descriptions-item label="txPayId">
      {{Transaction.txPayId}}
    </a-descriptions-item>
    <a-descriptions-item label="txBlockOffset">
      {{Transaction.txBlockOffset}}
    </a-descriptions-item>
    <a-descriptions-item label="txEdition" :span="2">
      {{Transaction.txEdition}}
    </a-descriptions-item>
    <a-descriptions-item label="txExpiresAt" :span="2">
      {{Transaction.txExpiresAt}}
    </a-descriptions-item>
    <a-descriptions-item label="txPayments" :span="4">
      {{Transaction.txPayments}}
    </a-descriptions-item>
    <a-descriptions-item label="txSharesInfo" :span="4">
      {{Transaction.txSharesInfo}}
    </a-descriptions-item>
  </a-descriptions>
</template>
<script>

export default {
  computed: {
    Transaction() {
      console.log(this.$store.state.Transaction)
      return this.$store.state.Transaction;
    },
  },
  created() {
    console.log("GetTransaction: "+this.$route.params.id);
    this.$store.dispatch("GetTransaction", this.$route.params.id);
  },
  methods: {
    onAssetId(AssetId) {
      console.log(AssetId);
      this.$router.push({ name: 'Asset:id', params: { id: AssetId } })
    }
  },
  destroyed() {
    console.log('destroying')
    this.$store.commit("CleanTransaction")
  },
};
</script>