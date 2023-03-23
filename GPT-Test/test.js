const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const completedTasks = document.getElementById('completed-tasks');

// 定义一个函数，将任务添加到列表中
function addTask() {
  // 获取任务文本
  const taskText = taskInput.value;

  // 创建新的任务列表项
  const newTask = document.createElement('li');
  const newTaskCheckbox = document.createElement('input');
  const newTaskLabel = document.createElement('label');

  // 设置任务列表项的属性
  newTaskCheckbox.type = 'checkbox';
  newTaskCheckbox.id = `task-${taskList.children.length + 1}`;
  newTaskCheckbox.name = `task-${taskList.children.length + 1}`;
  newTaskCheckbox.value = taskText;
  newTask}