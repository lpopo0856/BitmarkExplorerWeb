<template>
  <a-table
    :columns="columns"
    :data-source="TransactionList"
    style="width: auto"
  >
  <a slot="txId" slot-scope="text" @click="onTxId(text)">{{ text }}</a>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "txId",
    dataIndex: "txId",
    key: "txId",
    ellipsis: true,
    scopedSlots: { customRender: 'txId' },
  },
  {
    title: "txOwner",
    dataIndex: "txOwner",
    key: "txOwner",
    ellipsis: true,
  },
  {
    title: "txAssetId",
    dataIndex: "txAssetId",
    key: "txAssetId",
    ellipsis: true,
  },
  {
    title: "txBitmarkId",
    dataIndex: "txBitmarkId",
    key: "txBitmarkId",
    ellipsis: true,
  },
  {
    title: "txBlockNumber",
    dataIndex: "txBlockNumber",
    key: "txBlockNumber",
    ellipsis: true,
  },
];
export default {
  data() {
    return {
      columns,
    };
  },
  computed: {
    TransactionList() {
      return this.$store.state.TransactionList;
    },
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("GetTransactionList", this.$route.params.id);
  },
  methods: {
    onTxId(TxId) {
      console.log(TxId);
      this.$router.push({ name: 'Transaction:id', params: { id: TxId } })
    },
  },
  destroyed() {
    console.log('destroying')
    this.$store.commit("CleanTransactionList")
  },
};
</script>