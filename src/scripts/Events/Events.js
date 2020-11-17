export const Event = (eventObj) => {
    return `
    <div class="witness">
        <p><b>${eventObj.nameOfEvent}</b></p>
        <p>${eventObj.dateOfEvent}</p>
        <p>${eventObj.locationOfEvent}</p>
        <button id="showWeather">show weather</button><button id="deleteEvent--${eventObj.id}">Remove Event</button>
    </div>
    `
}