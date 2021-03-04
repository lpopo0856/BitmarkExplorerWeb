import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BlockList: [],
    TransactionList: [],
    Transaction: {},
    Asset: {},
  },
  mutations: {
    SetBlockList(state, content) {
      state.BlockList = content
    },
    SetTransactionList(state, content) {
      state.TransactionList = content
    },
    SetTransaction(state, content) {
      state.Transaction = content
    },
    SetAsset(state, content) {
      state.Asset = content
    },
    CleanBlockList(state) {
      state.BlockList = []
    },
    CleanTransactionList(state) {
      state.TransactionList = []
    },
    CleanTransaction(state) {
      state.Transaction = {}
    },
    CleanAsset(state) {
      state.Asset = {}
    }
  },
  actions: {
    // GetBlockList(context) {
    //   axios.get('/api/block?page_id=1')
    //     .then(function (response) {
    //       console.log(response)
    //       context.commit('SetBlockList',response.data)
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // },
    GetTransactionList(context, blockId) {
      console.log(blockId)
      axios.get(`/api/block/${blockId}`)
        .then(function (response) {
          console.log(response)
          context.commit('SetTransactionList',response.data.transactions)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    GetTransaction(context, txId) {
      axios.get(`/api/transaction/${txId}`)
        .then(function (response) {
          console.log(response)
          context.commit('SetTransaction',response.data)
          console.log(context.state.Transaction)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    GetAsset(context, assetId) {
      console.log(assetId)
      axios.get(`/api/asset/${assetId}`)
        .then(function (response) {
          console.log(response)
          context.commit('SetAsset',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    SOCKET_latestBlock(context, data) {
      context.commit('SetBlockList',data)
    }
  },
  modules: {
  }
})
