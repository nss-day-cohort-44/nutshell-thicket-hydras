import { FriendHTML } from "./Friends.js"
import "./FriendForm.js"
import { getFriends , useFriends , deleteFriend, getByFriendId } from "./FriendsProvider.js"
import { getUsers , useUsers } from "../UserProvider.js"



const contentTarget = document.querySelector(".friendsList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("friendStateChanged", () => FriendList())

const activeUser = parseInt(sessionStorage.getItem("activeUser"))




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

        // friendObjId = users.map(user => { 
        //     const friendID =  
        // })
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

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteFriend--")) {
        const [prefix, friendId] = clickEvent.target.id.split("--")
        // console.log("friendId" , friendId)
        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useEvents() and render the Event list again.
        */
       const friendIntId = parseInt(friendId)

       
    //    console.log("friendIntId" , friendIntId)
    getByFriendId(friendIntId)
    .then(
        (relationshipObject) => {
       deleteFriend(relationshipObject.id).then(
           () => {
            //    const updatedFriends = useFriends()
               FriendList()
           }
       )
    })
    }
})



