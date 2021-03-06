import {saveEvent, useEvents} from "./EventsProvider.js"

const contentTarget = document.querySelector(".eventForm")
const eventHub = document.querySelector(".container")


export const EventForm = () =>{
    const eventArray = useEvents()
    render(eventArray)
}
 const render = () => {
    contentTarget.innerHTML = `
    <div class="event">
        <p>Event Name:</p><input id="event--name" type="text"/>
        <input id="event--date" type="date"/>
        <p>Event's Location:</p><input id="event--location" type="text"/>
        <button id="saveEvent">Save Event</button>
    </div>
    `
}
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "saveEvent") {
        const nameOfEvent = document.querySelector("#event--name").value
        const dateOfEvent = document.querySelector("#event--date").value
        const locationOfEvent = document.querySelector("#event--location").value
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        const newEvent = {
            nameOfEvent,
            dateOfEvent,
            locationOfEvent,
            activeUser
        }
        saveEvent(newEvent)
    }
})