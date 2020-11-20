import { FriendHTML } from "./Friends.js"
import "./FriendForm.js"
import { getFriends , useFriends , deleteFriend, getByFriendId } from "./FriendsProvider.js"
import { getUsers , useUsers } from "../UserProvider.js"



const contentTarget = document.querySelector(".friendsList")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("friendStateChanged", () => FriendList())


const activeUser = parseInt(sessionStorage.getItem("activeUser"))



// Returns rendered friend to the DOM by mapping through friends array
// and finding correpsonding user id

export const FriendList = () => {
    getFriends()
    .then(getUsers)
    .then()
    .then(
        () => {
        const friends = useFriends()
        const users = useUsers()
        // console.log("users" , users)
        // console.log("array of friends" ,  friends)
            
        let friendHTMLRepresentations = ""
        // let friendObjId = "" 
        friendHTMLRepresentations = friends.map(friend => {
            const friendObj = users.find(user => friend.userFriend === user.id)
            // console.log("friendObj" , friendObj)
            return friendObj
        })

// HTML Representation of each friend into the Friends List container
    

        // console.log("friendHTMLRep" , friendHTMLRepresentations)
        contentTarget.innerHTML =
        `<h3>Friends List</h3>
        <div class="friendsListContainer">
        ${friendHTMLRepresentations.map(f =>  FriendHTML(f)).join("")}
        
        </div>
        `
        // console.log("friend" , friends)
        
        // contentTarget.innerHTML = 
    })

}

// Click event on "delete button" that deletes friend from list and json

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteFriend--")) {
        const [prefix, friendId] = clickEvent.target.id.split("--")
        // console.log("friendId" , friendId)

       const friendIntId = parseInt(friendId)


// Invoke the function that performs the delete operation.  
//    console.log("friendIntId" , friendIntId)
    getByFriendId(friendIntId)
    .then(
        (relationshipObject) => {
       deleteFriend(relationshipObject.id).then(
           () => {
               FriendList()
           }
       )
    })
    }
})



