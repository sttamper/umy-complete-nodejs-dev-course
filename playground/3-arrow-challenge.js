const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: false
  }, {
    text: 'Clean yard',
    completed: true
  }, {
    text: 'Film course',
    completed: false  
  }],
  getTasksToDo() {
    const tasksToDo = this.tasks.filter((task) => {
      return task.completed === false
    })
    return tasksToDo
  }
}

console.log(tasks.getTasksToDo());