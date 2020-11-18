import { renderWitnessButton } from "./DisplayNewEvents.js"
import {saveEvent, useEvents} from "./EventsProvider.js"

const contentTarget = document.querySelector(".button__addEvent")
const eventHub = document.querySelector(".container")


export const EventForm = () =>{
    const eventArray = useEvents()
    render(eventArray)
}
 const render = () => {
    contentTarget.innerHTML = `
    <div class="event">
        <input id="event--name" type="text"/>
        <input id="event--date" type="date"/>
        <input id="event--location" type="text"/>
        <button id="saveEvent">Save Event</button>
    </div>
    `
}
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "saveEvent") {
        const nameOfEvent = document.querySelector("#event--name").value
        const dateOfEvent = document.querySelector("#event--date").value
        const locationOfEvent = document.querySelector("#event--location").value

        const newEvent = {
            nameOfEvent,
            dateOfEvent,
            locationOfEvent
        }
        saveEvent(newEvent)
    }
})