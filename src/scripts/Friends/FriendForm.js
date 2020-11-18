const contentTarget = document.querySelector(".friendsContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("userAuthenticated", () => AddFriendButton())

export const AddFriendButton = () => {
    return  contentTarget.innerHTML =  `
    
    
    <button id="saveFriend">Add a Friend</button>`
}

export const FriendForm = () => {
    contentTarget.innerHTML +=`<input id="friendsList--friendName" type="text" placeholder="Search For Names"></input>`}

eventHub.addEventListener("click" , event => { 

    if (event.target.id === "saveFriend") {
        FriendForm()
    }

 } 
 )





// eventHub.addEventListener("click", event => {

//     if (event.target.id === "witnessSelect") {
        
//         const customEvent = new CustomEvent("witnessClicked")
    
//         eventHub.dispatchEvent(customEvent)
//     }
// })
