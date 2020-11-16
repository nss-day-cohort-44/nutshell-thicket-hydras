import { useTasks } from "./DailyTaskProvider.js"

const contentTarget = document.querySelector(".dailyTaskContainer")

// calling array of task to render

export const TaskForm = () => {
    const arrayOfTasks = useTasks()
    render(arrayOfTasks)
    console.log(arrayOfTasks)
}

const render = (arrayOfTasks) => {
    contentTarget.innerHTML =  `
    <input id="dailyTask--taskName" type="text" placeholder="Your Task Here">
    <textarea id="dailyTask--task" placeholder="Your Note Here"></textarea>
    <button id="saveNote">Save Note</button>
`
}

