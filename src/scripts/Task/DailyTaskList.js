import { DailyTaskHTML } from "./DailyTask.js";
import { TaskForm } from "./DailyTaskForm.js";
import { getTask, useTasks } from "./DailyTaskProvider.js";


const contentTarget = document.querySelector(".dailyTaskContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => DailyTaskList())



eventHub.addEventListener("taskButtonClicked", () => {
    TaskForm()
})
// TaskList is getting new task and then all the task and then displaying the task
// need to get button to display first

export const DailyTaskList = () => {
    getTask()
    .then(() => {
        const allTask = useTasks()
        render(allTask)
    })
}

const render = (taskArray) => {
    let taskHTML = ""
    

    for(const task of taskArray) {
        taskHTML += DailyTaskHTML(task)
    }


contentTarget.innerHTML += `
<p> Tasks </p>
${taskHTML}
<button id="newTaskButton">New Task</button>
`

}

// eventHub.addEventListener("deleteClick", clickEvent => {
//     if (clickEvent.target.id.startsWith("deleteTask--")) {
//         const [prefix, id] = clickEvent.target.id.split("--")

    
//        deleteTask(id).then(
//            () => {
//                const updatedTasks = useTasks()
//                render(updatedTasks)
//            }
//        )
//     }
// })



