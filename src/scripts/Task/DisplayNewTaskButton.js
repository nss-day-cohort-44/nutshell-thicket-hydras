
const contentTarget = document.querySelector(".buttons__witnesses")
const eventHub = document.querySelector(".container")


export const renderTaskButton = () => {
    
    contentTarget.innerHTML = `
    <button id="display-witnesses-button">Witness Statements</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
if (clickEvent.target.id === "newTaskButton") {
    // console.log("witness button was clicked")


const taskButtonClicked = new CustomEvent("taskButtonClicked")

    eventHub.dispatchEvent(taskButtonClicked)
}


})













