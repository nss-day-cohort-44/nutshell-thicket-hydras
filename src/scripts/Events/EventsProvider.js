const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const eventListStateChanged = new CustomEvent("eventStateChanged")
    eventHub.dispatchEvent(eventListStateChanged)
}



let events = []

export const useEvents = () => {
    return events.slice()
}

export const getEvents = () => {
    return fetch("http://localhost:8088/events")
    .then(response => response.json())
    .then (
        parsedEvents => {
            console.log(parsedEvents)
            events = parsedEvents
        })
}
export const saveEvent = (events) => {

    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent)
    
}