// import { TaskForm } from "./DailyTaskForm.js"
// import { DailyTaskList } from "./DailyTaskList.js"
import { deleteTask, getTask, useTasks } from "./DailyTaskProvider.js"


const contentTarget = document.querySelector(".dailyTaskContainer")
const eventHub = document.querySelector(".container")
// const eventHub2 = document.querySelector(".completeBox")
// this is a single representation of a note


export const DailyTaskHTML = (taskObj) => {
    return `
    <div id="taskId" class="tasks">
    <p class="taskObj"> Task Title: ${taskObj.taskTitle}</p>
    <p class="taskObj"> Task To Do: ${taskObj.taskText}</p>
    <p class="taskObj"> Completion Date: ${taskObj.dateOfCompletition}</p>
    <input id="checkBox" class="completeBox" type = "checkbox" </input>
    <button class="deleteTaskButton" id="deleteTask--${taskObj.id}">Delete</button>
    </div>
    `
}

// clickevent for save task button through New task

eventHub.addEventListener("click", e => {
    if(e.target.id === "dailyTask--saveTask")
    getTask()
    // .then(useTasks())
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
//     if(e.target.id === "checkBox") {
//         console.log("BOX CLICKED", e)
//     //     const removeTask = document.getElementById(taskId);
//     //     removeTask.parentNode.removeChild(removeTask)
//     // }
//     // DailyTaskList()

//     }
// })


