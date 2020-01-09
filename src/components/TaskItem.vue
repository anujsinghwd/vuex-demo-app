<template>
    <div>
        <li class="todo-item" :key="user.user_id" data-key="user.user_id">
            <input id="user.user_id" type="checkbox"/>
            <label for="user.username" class="tick js-tick"></label>
            <span> {{ user.username }}</span>
            <button v-on:click="removeTodo(user)" class="delete-todo js-delete-todo">
                <svg><use href="#delete-icon"></use></svg>
            </button>
        </li>
    </div>
</template>

<script>
export default {
    name: 'TaskItem',
    props: ['user'],
    computed: {
      users () {
        return this.$store.getters.users
      }
    },
    methods: {
        removeTodo(index){
            this.$store.dispatch('removeTodoAction', {username: index.username, user_id: index.user_id})
        }
    }
}
</script>