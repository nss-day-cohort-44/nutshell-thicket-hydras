import { Event } from "./Events.js";
import { deleteEvent, getEvents, useEvents } from "./EventsProvider.js";


const contentTarget = document.querySelector(".events")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("eventStateChanged", () => EventsList())



// EventsList is getting new task and then all the events and then displaying the event
// need to get button to display first

export const EventsList = () => {
    getEvents()
    .then(() => {
        const allEvents = useEvents()
        render(allEvents)
    })
}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useEvents() and render the Event list again.
        */
       deleteEvent(id).then(
           () => {
               const updatedEvents = useEvents()
               render(updatedEvents)
           }
       )
    }
})

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