const contentTarget = document.querySelector(".friendsContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("userAuthenticated", () => FriendForm())

export const FriendForm = () => {
    return  contentTarget.innerHTML =  `
    <input id="friendsList--friendName" type="text" placeholder="Search For Names">
    
    <button id="saveFriend">Add Friend</button>`
}