// import { TaskForm } from "./DailyTaskForm.js"
// import { DailyTaskList } from "./DailyTaskList.js"
import { getTask, useTasks } from "./DailyTaskProvider.js"


const contentTarget = document.querySelector(".dailyTaskContainer")
const eventHub = document.querySelector(".container")
// this is a single representation of a note


export const DailyTaskHTML = (taskObj) => {
    return `
    <div id="taskId" class="tasks"
    <p> Task Title: ${taskObj.taskTitle}</p>
    <p> Task To Do: ${taskObj.taskText}</p>
    <p> Completion Date: ${taskObj.dateOfCompletition}</p>
    <button id="deleteTask--${taskObj.id}">Delete</button>
    <input class="completeBox" type = "checkbox" </input>
    `
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "dailyTask--saveTask")
    getTask()
    .then(useTasks())
    .then(() => {
        const allTasks = useTasks()
        render(allTasks)
    }
        
    )
    
})

const render = (taskArray) => {
    let taskHTMLRepresentation = ""
    for (const task of taskArray)  {

        taskHTMLRepresentation += DailyTaskHTML(task)
}



// Actually on DOM

contentTarget.innerHTML = `
    <h3>Task</h3>
    ${taskHTMLRepresentation}
    <button id="newTaskButton">New Task</button>
    
`
}

// Working on checkbox here
// eventHub.addEventListener("completeBoxChecked", e => {
//     if(e.target.class === "completeBox") {
//         const removeTask = document.getElementById(taskId);
//         removeTask.parentNode.removeChild(removeTask)
//     }
//     console.log("BOX CLICKED")
// })


// DailyTaskList()
// })
