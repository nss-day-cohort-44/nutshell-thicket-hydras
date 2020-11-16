
// Getting the tasks from API

let tasks = []

export const getTask = () => {
    return fetch('http://localhost:8088/tasks')
    .then(response => response.json())
    .then(parsedTasks => {
        tasks = parsedTasks
        // console.log(tasks)
    })

}


export const useTasks = () => {
    return tasks.slice()
}
