import { getUsers, useUsers } from "../UserProvider.js"
import { saveFriend } from "./FriendsProvider.js"

const contentTarget = document.querySelector(".friendsContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("userAuthenticated", () => AddFriendButton())

// Renders on in Nutshell() when user logs into dashboard or registers
export const AddFriendButton = () => {
    return contentTarget.innerHTML = `
    
    
    <button id="addFriend">Add a Friend</button>`
}

//When clicked to allow user to search for users and add them as friends. 

export const FriendForm = () => {
    contentTarget.innerHTML = `<button id="saveFriend">Save Friend</button>
    <input id="friendsList--friendName" type="text" placeholder="Search For Names"></input>`
}


// Adds other users to active user friend list  

eventHub.addEventListener("click", event => {
    if (event.target.id === "addFriend") {
        FriendForm()
    }
}
)

eventHub.addEventListener("click", event => {
    if (event.target.id === "saveFriend") {

addFriend()
        
    }
})






// console.log("userArray" , userArray)



const addFriend = () => {
    
    getUsers()
    .then(() => {
        
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        console.log("This is active user ", activeUser)
        
        const userArray = useUsers()
        // console.log("USERARRAY" , userArray)
            const newFriend = userArray.find(user => {
                return user.username === document.getElementById("friendsList--friendName").value
                
                
            })
            
            console.log("NEW FRIEND", newFriend.id)

            
            
            
            const catchFriendObj = {
                activeUser,
                friendId: newFriend.id
            }
            console.log(catchFriendObj)
            saveFriend(catchFriendObj)
            
        })
    }
    
    
    // addFriend()