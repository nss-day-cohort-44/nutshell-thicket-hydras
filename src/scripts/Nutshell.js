import { EventsList } from "./Events/EventsList.js"
import { renderAddEventsButton } from "./Events/AddEventButton.js"
import { FriendForm } from "./Friends/FriendForm.js"
import { DailyTaskList } from "./Task/DailyTaskList.js"
import { renderTaskButton } from "./Task/DisplayNewTaskButton.js"




export const Nutshell = () => {
    renderAddEventsButton()
    EventsList()
    FriendForm()
    DailyTaskList()
    renderTaskButton()

    // Render all your UI components here
}
