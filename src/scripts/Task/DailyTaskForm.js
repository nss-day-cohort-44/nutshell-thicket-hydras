import { saveTask, useTasks } from "./DailyTaskProvider.js"

const contentTarget = document.querySelector(".tasksForm")
const eventHub = document.querySelector(".container")
// calling array of task to render

export const TaskForm = () => {
    const arrayOfTasks = useTasks()
    render(arrayOfTasks)
}

const render = () => {
    contentTarget.innerHTML =  `
    <input id="dailyTask--taskName" type="text" placeholder="Your Task Title Here">
    <textarea id="dailyTask--task" placeholder="Your Task Here"></textarea>
    <input id="dailyTask--dateOfCompletition" type="date"/>
    <button id="dailyTask--saveTask">Save Task</button>
`
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "dailyTask--saveTask") {
        

        const taskText = document.querySelector("#dailyTask--task").value
        const taskTitle = document.querySelector("#dailyTask--taskName").value
        const dateOfCompletition = document.querySelector("#dailyTask--dateOfCompletition").value

    const taskToSave = {
        taskText,
        taskTitle,
        dateOfCompletition
    }

        saveTask(taskToSave)
}
    
}
)