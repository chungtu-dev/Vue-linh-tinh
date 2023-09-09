<template>
  <div class="container" style="max-width: 600px">
    <h2 class="text-center mt-5">Todo App</h2>

    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form control"
      />
      <button class="btn btn-warning rounded-0" @click=submitTask>Submit</button>
    </div>

    <table class="table table-bordered">
      <tr>
        <th scope="col">Task</th>
        <th scope="col" style="width: 120px">Status</th>
        <th scope="col" class="text-center">Delete</th>
        <th scope="col" class="text-center">Edit</th>
      </tr>

      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span
              :class="{ 'line-through': task.status === 'finished' }"
            ></span>
            {{ task.name }}
          </td>
          <td>
            <span
              class="pointer select"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',                
                'text-warning': task.status === 'in-process',
                'text-success': task.status === 'finished',
              }"
            >
            {{capitalizeFirstChart(task.status)}}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <p class="fa fa-trash pointer"></p>
            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-process", "finished"],
      tasks: [
        {
          name: "lau nha",
          status: "to-do",
        },
        {
          name: "giat do",
          status: "in-process",
        },
        {
          name: "nau com",
          status: "finished",
        },
      ],
    };
  },

  methods: {
    capitalizeFirstChart(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    submitTask(){
        if(this.task.length === 0) return;
        if(this.editedTask != null) {
            this.tasks[this.editedTask].name=this.task;
            this.editedTask=null;
        }
        else{
            this.tasks.push({
                name:this.task,
                status:'todo'
            })
        }
        this.task=""
    },
  },
};
</script>

<style lang="scss" scoped>
</style>