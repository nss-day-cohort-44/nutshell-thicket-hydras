import {TaskForm} from "./DailyTaskForm.js"

const contentTarget = document.querySelector(".button__addTask")
const eventHub = document.querySelector(".container")


export const renderTaskButton = () => {
    
    contentTarget.innerHTML = `
    <button id="newTaskButton">New Task</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
if (clickEvent.target.id === "newTaskButton") {
   
const taskButtonClicked = new CustomEvent("taskButtonClicked")
    console.log(taskButtonClicked)
    eventHub.dispatchEvent(taskButtonClicked)
}
})
eventHub.addEventListener("taskButtonClicked", () => {
    TaskForm()
})