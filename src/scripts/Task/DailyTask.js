import { saveTask } from "./DailyTaskProvider.js";


const eventHub = document.querySelector(".container")
// this is a single representation of a note

export const DailyTaskHTML = (taskObj) => {
    return `
    
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
