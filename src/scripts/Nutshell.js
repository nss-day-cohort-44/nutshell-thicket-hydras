import { EventsList } from "./Events/EventsList.js"
import { AddFriendButton } from "./Friends/FriendForm.js"
import { FriendList } from "./Friends/FriendsList.js"

import { renderAddEventsButton } from "./Events/AddEventButton.js"



import { FriendForm } from "./Friends/FriendForm.js"
import { DailyTaskList } from "./Task/DailyTaskList.js"
import { renderTaskButton } from "./Task/DisplayNewTaskButton.js"





export const Nutshell = () => {
    renderAddEventsButton()
    EventsList()
    AddFriendButton()

    DailyTaskList()

    FriendList()
    
    
    DailyTaskList()
    renderTaskButton()

    // Render all your UI components here

}
    // Render all your UI components here
