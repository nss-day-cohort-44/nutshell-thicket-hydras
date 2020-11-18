import { Event } from "./Events.js";
import { getEvents, useEvents } from "./EventsProvider.js";


const contentTarget = document.querySelector(".events")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("eventStateChanged", () => EventsList())



// TaskList is getting new task and then all the task and then displaying the task
// need to get button to display first

export const EventsList = () => {
    getEvents()
    .then(() => {
        const allEvents = useEvents()
        render(allEvents)
    })
}

const render = (eventArray) => {
    let eventHTML = ""

    for(const event of eventArray) {
        eventHTML += Event(event)
    }


contentTarget.innerHTML = `
<h3>Events</h3>
${eventHTML}
`

}