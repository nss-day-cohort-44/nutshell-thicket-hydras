import { EventsList } from "./Events/EventsList.js"
import { AddFriendButton, FriendForm } from "./Friends/FriendForm.js"
import { renderWitnessButton } from "./Events/DisplayNewEvents.js"



export const Nutshell = () => {
    EventsList()
    AddFriendButton()
    renderWitnessButton()

    // Render all your UI components here
}
