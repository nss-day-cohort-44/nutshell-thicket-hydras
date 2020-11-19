import { EventsList } from "./Events/EventsList.js"
import { AddFriendButton } from "./Friends/FriendForm.js"

import { FriendList } from "./Friends/FriendsList.js"


import { renderAddEventsButton } from "./Events/AddEventButton.js"
import { DailyTaskList } from "./Task/DailyTaskList.js"
import { renderTaskButton } from "./Task/DisplayNewTaskButton.js"
import { renderAddArticlesButton} from "./News/DisplayNewsButton.js"
import { ArticlesList } from "./News/NewsList.js"



export const Nutshell = () => {
    renderAddEventsButton()
    EventsList()
    AddFriendButton()

    DailyTaskList()

    FriendList()
    
    DailyTaskList()
    renderTaskButton()
    renderAddArticlesButton()
    ArticlesList()

    // Render all your UI components here

}
    // Render all your UI components here
