import { saveTask } from "./DailyTaskProvider.js";


const eventHub = document.querySelector(".container")
// this is a single representation of a note

export const DailyTaskHTML = (taskObj) => {
    return `
    <div class="task">
    <input id="dailyTask--taskName" type="text" placeholder="Task Name">
    <textarea id="dailyTask--task" placeholder="Your Task Here"></textarea>
    <button id="save-task">Save Task</button>
    <button id="tasks-button">Tasks</button>
    </div>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "save-task") {

        const taskName = document.querySelector("#dailyTask--taskName").value
        const task = document.querySelector("#dailyTask--task").value


        const taskToSave = {
            taskName,
            task 
        }

        saveTask(taskToSave)


    }
})
