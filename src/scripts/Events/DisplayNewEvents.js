import {EventForm} from "./EventsForm.js"
const contentTarget = document.querySelector(".button__addEvent")
const eventHub = document.querySelector(".container")

export const renderWitnessButton = () => {
    
    contentTarget.innerHTML = `
    <button id="addEvent">Add New Event</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "addEvent") {
      const addEventButtonClicked = new CustomEvent("addEventClicked")
      eventHub.dispatchEvent(addEventButtonClicked)
  
    }
  })
eventHub.addEventListener("addEventClicked", () => {
    EventForm()
})