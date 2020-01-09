import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    users: [
        {username: 'Milk Order', user_id: '3432-4njv-32c-2342'}
    ]
  },
  mutations: {
    incrementCounter (state, payload) {
      state.count += payload
    },
    addNewUser (state, payload) {
      state.users.push(payload)
    },
    removeTodo(state, payload) {
      state.users.filter((user, i) => {
        if(user.user_id === payload.user_id){
          state.users.splice(i, 1)
        }
      })
    }
  },
  actions: {
    inrementAction ({commit}, payload) {
      commit('incrementCounter', payload)
    },
    addNewUserAction ({commit}, payload) {
      commit('addNewUser', payload)
    },
    removeTodoAction ({commit}, payload) {
      commit('removeTodo', payload)
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
