<template>
  <div class="appContainer">
    <div class="Container">
      <ToDoMenu @newTask="addTask" />
        <div class="tasksContainer">
          <ol class="olTasks">
            <li class="liTasks" v-for="task in Tasks" :key="task.id">
              <ToDoTask :startDate="task.startDate" :expand="task.expand" :desc="task.desc" :id="task.id"
                :done="task.done" :name="task.name" @checkboxClick="isExpand(task.id)" @taskCheckbox="isDone(task.id)"
                @removeToDo="removeTask(task.id)" />
            </li>
          </ol>
        </div>
    </div>
    <h4 class="tasksCompleted">{{ tasksCompleted }}</h4>
  </div>
  <NameSurname />
</template>

<script>
import ToDoMenu from "../components/ToDoMenu.vue";
import ToDoTask from "../components/ToDoTask.vue";
import NameSurname from "@/components/NameSurname.vue";

export default {
  name: 'App',
  components: {
    ToDoTask,
    ToDoMenu,
    NameSurname
  },
  data() {
    return {
      currentDate: new Date().toDateString(),
      Tasks: [{
        name: 'name',
        desc: 'desc',
        done: false,
        expand: false,
        startDate: this.currentDate,
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + 'name'
      }]
    }
  },
  methods: {
    addTask(name, desc) {
      this.Tasks.unshift({
        name: name,
        desc: desc,
        done: false,
        expand: false,
        startDate: this.currentDate,
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + name
      })
    },
    isDone(id) {
      const task = this.Tasks.find((task) => task.id === id)
      task.done = !task.done
    },
    isExpand(id) {
      const task = this.Tasks.find((task) => task.id === id)
      task.expand = !task.expand
    },
    removeTask(id) {
      const task = this.Tasks.findIndex((task) => task.id === id);
      this.Tasks.splice(task, 1)
    }
  },
  computed: {
    tasksCompleted() {
      const completed = this.Tasks.filter((task) => task.done).length
      return 'Ukończyłeś ' + completed + ' z ' + this.Tasks.length + ' zadań.'
    },
  }
}
</script>

<style>
* {
  font-family: 'Chivo Mono', monospace;
  user-select: none;
  box-sizing: border-box;
}

.appContainer {
  position: absolute;
  z-index: -1;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.Container {
  background-color: rgb(230, 230, 230);
  border-radius: 15px;
  width: 50vmin;
  height: 70vh;
  -webkit-box-shadow: 0px 10px 30px -2px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 10px 30px -2px rgba(66, 68, 90, 1);
  box-shadow: 0px 10px 30px -2px rgba(66, 68, 90, 1);
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(220, 220, 220);
  border-radius: 10px;
}

.olTasks {
  list-style-type: none;
  padding: 0 10px 0 10px;
}

.tasksContainer {
  overflow-y: scroll;
  overflow-x: hidden;
}

.liTasks {
  list-style-type: none;
  background-color: rgb(234, 234, 234);
  border: 1pt solid rgb(190, 190, 190);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
</style>