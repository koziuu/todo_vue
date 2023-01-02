<template>
  <div class="task">
    <p class="name"><b>{{ name }}</b></p>
    <p class="taskDesc" v-if="expand">{{ desc }}</p>
    <p class="taskDesc" v-if="expand">{{ startDate }}</p>
    <div class="taskButtons">
      <button class="taskRemove" @click="removeTask"><img src="../assets/trash.png" alt="trash"></button>
      
      <button class="checkbox" :class="{ checkboxClick: done }" :id="id" @click="$emit('taskCheckbox')"><img src="../assets/check.png" alt="check"></button>

      <button class="expand" @click="$emit('checkboxClick')"><img :class="{ rotateImage: expand }" src="../assets/down.png" alt="expand"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoTask',
  props: {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: String,
      default: '---'
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    removeTask() {
      this.$emit("removeToDo")
    }
  },
}
</script>

<style scoped>
.taskButtons {
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.taskButtons * {
  text-align: center;
  cursor: pointer;
  height: 32px;
  width: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
}

.checkbox {
  background-color: #4279b9;
}

.checkboxClick {
  background-color: #42b983;
}

.taskRemove {
  background-color: rgb(228, 24, 33);
  border: none;
}

.taskShowContent {
  background-color: rgb(100, 100, 228);
}

button {
  border-radius: 10px;
}

.name {
  font-size: 20px;
}

.desc {
  font-size: 18px;
}

.expand {
  background-color: #a542b9;
}

.taskDesc {
  transition: all 1s;
}

.rotateImage {
  rotate: 180deg;
}

.task {
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  overflow: hidden;
  width: 100%;
}

</style>