const eventHub = document.querySelector(".container")
// Getting the tasks from API

const dispatchTaskStateChanged = () => {
    const taskStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(taskStateChangedEvent)
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


// saving entered tasks

export const saveTask = (tasks) => {

    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tasks)
    })
    .then(getTask)
    .then(dispatchTaskStateChanged)
    
}

// hopefully deleting tasks

export const deleteTask = tasksId => {
    return fetch(`http://localhost:8088/tasks/${tasksId}`, {
        method: "DELETE"
    })
        .then(getTask)
}



