import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    users: [
        {name: 'anuj'},
        {name: 'bunty'}
    ]
  },
  mutations: {
    incrementCounter (state, payload) {
      state.count += payload
    },
    addNewUser (state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    inrementAction ({commit}, payload) {
      commit('incrementCounter', payload)
    },
    addNewUserAction ({commit}, payload) {
      commit('addNewUser', payload)
    }
  },
  getters: {
    counter (state) {
      return state.count
    },
    users (state) {
      return state.users
    }
  }
})
