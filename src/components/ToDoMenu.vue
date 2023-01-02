<template>
    <form @submit.prevent="Submit" class="menu">
        <h1 class="todoapp">To Do </h1>
        <input placeholder="Nazwa" type="text" name="newTaskName" id="newTaskName" autocomplete="off"
            v-model.lazy.trim="taskName">
        <input placeholder="Opis" type="text" name="newTaskDesc" id="newTaskDesc" autocomplete="off"
            v-model.lazy.trim="taskDesc">
        <button type="submit" class="newTask">add </button>
    </form>
</template>

<script>
export default {
    name: 'ToDoMenu',
    methods: {
        Submit() {
            if (this.taskName === "") return
            if (this.taskDesc === "") return
            this.$emit('newTask', this.taskName, this.taskDesc)
            this.taskName = ''
            this.taskDesc = ''
        }
    },
    data() {
        return {
            taskName: '',
            taskDesc: ''
        }
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1pt solid rgb(190, 190, 190);
    overflow: hidden;
}

.menu * {
    margin: 8px;
}

.todoapp {
    font-size: 24px;
}

.newTask {
    border: none;
    font-size: 20px;
    width: 50%;
    height: 20%;
    cursor: pointer;
    border-radius: 10px;
}

input {
    background-color: rgb(230, 230, 230);
    border: none;
    width: 50%;
    height: 20%;
    border-bottom: 1px solid black;
    outline: 0;
}

input:focus {
    border-bottom: 1px solid #42b983;
}
</style>