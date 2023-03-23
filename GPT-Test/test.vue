<template>
  <div>
    <input type="text" v-model="newTask">
    <button v-on:click="addTask">添加任务</button>
    <ul>
      <li v-for="(task, index) in tasks">
        <input type="checkbox" v-model="task.done">
        {{ task.name }}
      </li>
    </ul>
    <p>已完成{{ count }}项任务</p>
  </div>
</template>

<script>
export default {
  data: {
    tasks: [
      { name: '吃饭', done: false },
      { name: '睡觉', done: false },
      { name: '打豆豆', done: false }
    ],
    count: 0,
    newTask: ''
  },
  computed: {
    count: function() {
      return this.tasks.filter(function(task) {
        return task.done;
      }).length;
    }
  },
  methods: {
    addTask: function() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ name: this.newTask.trim(), done: false });
        this.newTask = '';
      }
    }
  }
}
</script>