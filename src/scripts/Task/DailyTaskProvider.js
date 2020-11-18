const eventHub = document.querySelector(".container")
// Getting the tasks from API
const dispatchStateChangeEvent = () => {
    const taskListStateChanged = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskListStateChanged)
}




let tasks = []


// Getting all Tasks here 

export const getTask = () => {
    return fetch('http://localhost:8088/tasks')
    .then(response => response.json())
    .then(parsedTasks => {
        tasks = parsedTasks
        // console.log(tasks)
    })

}

// slicing(copying) the tasks to be able to use them

export const useTasks = () => {
    return tasks.slice()
}

export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(getTask)
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
    .then(dispatchStateChangeEvent)

    
}

// hopefully deleting tasks




