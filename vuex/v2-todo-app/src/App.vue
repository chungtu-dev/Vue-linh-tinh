<template>
  <div class="app">
    <h3>Completd: {{ completedTodos }}</h3>
    <h3>Pending: {{ pendingTodos }}</h3>
    <todos-list />
    <todo-form />
  </div>
</template>

<script>
import TodosList from "./components/TodosList.vue";
import TodoForm from "./components/TodoForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TodosList,
    TodoForm,
  },

  computed: {
    // completedTodos(){
    //   return this.$store.getters.completedTodos
    // },
    // pendingTodos(){
    //   return this.$store.getters.pendingTodos
    // }
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos",
    }),
  },
};
</script>

<style lang="css" scoped>
</style>