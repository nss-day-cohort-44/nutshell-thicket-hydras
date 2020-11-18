import { EventsList } from "./Events/EventsList.js"

import { DailyTaskList } from "./Task/DailyTaskList.js"

import { FriendForm } from "./Friends/FriendForm.js"
import { renderWitnessButton } from "./Events/DisplayNewEvents.js"




export const Nutshell = () => {
    EventsList()

    DailyTaskList()

    FriendForm()
    renderWitnessButton()

    // Render all your UI components here

}
    // Render all your UI components here
