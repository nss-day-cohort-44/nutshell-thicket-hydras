export const Event = (eventObj) => {
    return `
    <div class="event">
        <p>Name of Event:<b>${eventObj.nameOfEvent}</b></p>
        <p>Event date:<b>${eventObj.dateOfEvent}</b></p>
        <p>Located:<b>${eventObj.locationOfEvent}</b></p>
        <button id="showWeather">show weather</button><button id="deleteEvent--${eventObj.id}">Remove Event</button>
    </div>
    `
}