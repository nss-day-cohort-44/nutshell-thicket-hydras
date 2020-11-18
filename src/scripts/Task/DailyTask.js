// import { TaskForm } from "./DailyTaskForm.js"
// import { DailyTaskList } from "./DailyTaskList.js"
// this is a single representation of a note


export const DailyTaskHTML = (taskObj) => {
    return `
    <div id="taskId" class="tasks"
    <p> Task Title:<b> ${taskObj.taskTitle}</b></p>
    <p> Task To Do: ${taskObj.taskText}</p>
    <p> Completion Date: ${taskObj.dateOfCompletition}</p>
    <p>Completed?<input class="completeBox" type = "checkbox" </input>
    <button id="deleteTask--${taskObj.id}">Delete</button>
    `
}


// Actually on DOM








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