<template>
  <a-table :columns="columns" :data-source="BlockList" style="width: auto" rawKey="blockNumber"> 
    <a slot="blockHash" slot-scope="text" @click="onBlockHash(text)">{{ text }}</a>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "blockNumber",
    dataIndex: "blockNumber",
    key: "blockNumber",
  },
  {
    title: "blockHash",
    dataIndex: "blockHash",
    key: "blockHash",
    scopedSlots: { customRender: 'blockHash' },
  },
  {
    title: "blockCreatedAt",
    dataIndex: "blockCreatedAt",
    key: "blockCreatedAt",
  },
];
export default {
  data() {
    return {
      columns,
    };
  },
  computed: {
    BlockList () {
      return this.$store.state.BlockList
    }
  },
  methods: {
    onBlockHash(blockHash) {
      console.log(blockHash);
      this.$router.push({ name: 'Block:id', params: { id: blockHash } })
    },
  }
};
</script>