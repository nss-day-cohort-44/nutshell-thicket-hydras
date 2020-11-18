import { EventsList } from "./Events/EventsList.js"
import { FriendForm } from "./Friends/FriendForm.js"
import { renderWitnessButton } from "./Events/DisplayNewEvents.js"



export const Nutshell = () => {
    EventsList()
    FriendForm()
    renderWitnessButton()

    // Render all your UI components here
}
