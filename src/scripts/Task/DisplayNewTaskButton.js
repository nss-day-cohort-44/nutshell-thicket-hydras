
const contentTarget = document.querySelector(".dailyTaskContainer")
const eventHub = document.querySelector(".container")


export const renderTaskButton = () => {
    
    contentTarget.innerHTML = `
   
    `
}

eventHub.addEventListener("click", (clickEvent) => {
if (clickEvent.target.id === "newTaskButton") {
   


const taskButtonClicked = new CustomEvent("taskButtonClicked")

    eventHub.dispatchEvent(taskButtonClicked)
}


})