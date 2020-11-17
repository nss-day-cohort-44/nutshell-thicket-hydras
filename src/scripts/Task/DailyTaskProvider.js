const eventHub = document.querySelector(".container")
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

export const saveTask = (tasks) => {

    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tasks)
    })
    .then(getTask)
    
}

// export const deleteTask = tasksId => {
//     return fetch(`http://localhost:8088/tasks/${tasksId}`, {
//         method: "DELETE"
//     })
//         .then(getTask)
// }



