import { FriendForm } from "./Friends/FriendForm.js"
const eventHub = document.querySelector(".container")


eventHub.addEventListener("userAuthenticated", () => Nutshell())

console.log("activeUser" , activeUser)



export const Nutshell = () => {
    // Render all your UI components here
    
    return FriendForm()
}
