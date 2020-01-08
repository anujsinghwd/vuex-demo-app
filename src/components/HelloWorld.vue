<template>
  <div>
    {{ counter }}
    <br />
    <button @click="incrementCounter">increment</button>
    <br />
    <ul>
      <li v-for="user in users" :key="user.name">{{user.name}}</li>
    </ul>
    <div>
      <div>
        <input type="text" v-model="username" />
        <br />
        <button @click="addNewUser">Add User</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return{
      username: ''
    }
  },
  methods: {
    incrementCounter(){
        this.$store.dispatch('inrementAction', 1)
    },
    addNewUser(){
        this.$store.dispatch('addNewUserAction', {name: this.username})
        this.usersname = ""
    }
  },
  computed: {
      counter () {
        return this.$store.getters.counter
      },
      users () {
        return this.$store.getters.users
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
