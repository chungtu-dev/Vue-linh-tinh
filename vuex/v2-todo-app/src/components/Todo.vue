<template>
  <div>
    <span :class="{ completed: todo.completed }" @click="toggleTodoStatus">{{
      todo.title
    }}</span>
    <button @click="deleteTodo()">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    // deleteTodo(){
    //   this.$store.dispatch('deleteTodo', this.todo);
    // },

    // toggleTodoStatus(){
    //   this.$store.dispatch('toggleTodoStatus', this.todo)
    // }
    ...mapActions({
      deleteTodo: "deleteTodo",
      toggleTodoStatus: "toggleTodoStatus",
    }),
  },
};
</script>

<style lang="css" scoped>
.completed {
  text-decoration: line-through;
}
</style>