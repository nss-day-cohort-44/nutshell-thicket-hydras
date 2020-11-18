import { EventsList } from "./Events/EventsList.js"
import { AddFriendButton } from "./Friends/FriendForm.js"

import { DailyTaskList } from "./Task/DailyTaskList.js"


import { renderWitnessButton } from "./Events/DisplayNewEvents.js"




export const Nutshell = () => {
    EventsList()
    AddFriendButton()

    DailyTaskList()

    
    renderWitnessButton()

    // Render all your UI components here

}
    // Render all your UI components here
