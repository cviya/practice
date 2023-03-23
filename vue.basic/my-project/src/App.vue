<template>
  <div>
    <input type="text" v-model="newTask">
    <button v-on:click="addTask">添加任务</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done">
        {{ task.name }}
        <button v-on:click="removeTask(index)">删除</button>
      </li>
    </ul>
    <p>已完成{{ completedCount }}项任务</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { name: '吃饭', done: false },
        { name: '睡觉', done: false },
        { name: '打豆豆', done: false }
      ],
      newTask: '',
    }
  },
  computed: {
    completedCount() {
      return this.tasks.filter(task => task.done).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ name: this.newTask.trim(), done: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}
</script>