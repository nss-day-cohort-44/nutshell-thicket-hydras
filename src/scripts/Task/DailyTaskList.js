import { DailyTaskHTML } from "./DailyTask.js";
import { deleteTask, getTask, useTasks } from "./DailyTaskProvider.js";


const contentTarget = document.querySelector(".tasksLists")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("taskStateChanged", () => DailyTaskList())



// TaskList is getting new task and then all the task and then displaying the task
// need to get button to display first

export const DailyTaskList = () => {
    getTask()
    .then(() => {
        const allTask = useTasks()
        render(allTask)
    })
}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteTask--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useEvents() and render the Event list again.
        */
       deleteTask(id).then(
           () => {
               const updatedTasks = useTasks()
               render(updatedTasks)
           }
       )
    }
})

const render = (taskArray) => {
    let taskHTML = ""
    

    for(const task of taskArray) {
        taskHTML += DailyTaskHTML(task)
    }


contentTarget.innerHTML = `
<h3> Tasks </h3>
${taskHTML}

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



