import { getUsers, useUsers } from "../UserProvider.js"
import { saveFriend } from "./FriendsProvider.js"

const contentTarget = document.querySelector(".button__addFriend")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("userAuthenticated", () => AddFriendButton())

// Renders on in Nutshell() when user logs into dashboard or registers
export const AddFriendButton = () => {
    return contentTarget.innerHTML = `
    
    
    <button id="addFriend">Add a Friend</button>`
}
// render form for add friend that's invoked on below click event

export const FriendForm = () => {
    contentTarget.innerHTML = `<button id="saveFriend">Save Friend</button>
    <input id="friendsList--friendName" type="text" placeholder="Search For Names"></input>`
}


//When clicked to allow enter usernames and add them as friends. 

eventHub.addEventListener("click", event => {
    if (event.target.id === "addFriend") {
        FriendForm()
    }
}
)
// Adds other users to active user friend list by invoking addFriend()  

eventHub.addEventListener("click", event => {
    if (event.target.id === "saveFriend") {

addFriend()
        
    }
})

// console.log("userArray" , userArray

//Finds the friend by username and matches to the activeUser user that is entered in DOM then sends object to friends db. 
// This is invoked in the saveFriend click event
const addFriend = () => {
    
    getUsers()
    .then(() => {
        
        const userId = parseInt(sessionStorage.getItem("activeUser"))
       
    
        const userArray = useUsers()
        // console.log("USERARRAY" , userArray)

            const newFriend = userArray.find(user => {
                return user.username === document.getElementById("friendsList--friendName").value
                
                
            })
            
            console.log("NEW FRIEND", newFriend)   
            
            const catchFriendObj = {
                userId,
                userFriend: newFriend.id
            }
            if (userId === newFriend.id) {
                alert("Try making some friends")
            } else {
            console.log(catchFriendObj)
            saveFriend(catchFriendObj)
            }  
        })
    }