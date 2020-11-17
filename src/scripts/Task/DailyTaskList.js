import { DailyTaskHTML } from "./DailyTask.js";
import { getTask, useTasks } from "./DailyTaskProvider.js";


const contentTarget = document.querySelector(".dailyTaskContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => DailyTaskList())


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


contentTarget.innerHTML = `
<h3>Tasks</h3>
${taskHTML}
`

}