import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { EventsList} from "./Events/EventsList.js"
import { TaskForm } from "./Task/DailyTaskForm.js"
import { DailyTaskList } from "./Task/DailyTaskList.js"
import { getTask } from "./Task/DailyTaskProvider.js"
//! equals not
if (!sessionStorage.length){
LoginForm()
RegisterForm()
}else{
    Nutshell()
}
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => Nutshell())

/*
if (sessionStorage.getItem === "activeUser", user.id) {
    Nutshell()
} else {
    RegisterForm()
}
1. Check if the user is authenticated by looking in session storage for `activeUser`
2. If so, render the Nutshell component
3. If not, render the login and registration forms
4. Also, if the user authenticates, and the login form is initially shown
ensure that the Nutshell component gets rendered
*/


