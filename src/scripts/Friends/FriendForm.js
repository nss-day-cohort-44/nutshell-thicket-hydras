import { getUsers, useUsers } from "../UserProvider.js"
import { saveFriend } from "./FriendsProvider.js"

const contentTarget = document.querySelector(".friendsContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("userAuthenticated", () => AddFriendButton())

// Renders on in Nutshell() when user logs into dashboard or registers
export const AddFriendButton = () => {
    return  contentTarget.innerHTML =  `
    
    
    <button id="addFriend">Add a Friend</button>`
}

//When clicked to allow user to search for users and add them as friends. 

export const FriendForm = () => {
    contentTarget.innerHTML =`<button id="saveFriend">Add a Friend</button>
    <input id="friendsList--friendName" type="text" placeholder="Search For Names"></input>`
}


//Adds other users to active user friend list  

eventHub.addEventListener("click" , event => { 
    if (event.target.id === "addFriend") {
    FriendForm()
        }
        saveFriend(newFriend)
    })

let newFriend = ""
console.log("userArray" , userArray)

eventHub.addEventListener("input" , e => {
const addFriend = () => {
    getUsers
    .then(() => {
        const userArray = useUsers()
    
        const newFriend = userArray.map(user => {
            return user.userName === document.getElementById("friendsList--friendName").value
        })
        console.log("NEW FRIEND" , newFriend)
        return newFriend

    }
    )
}
addFriend()





