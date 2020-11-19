import { FriendHTML } from "./Friends.js"
import "./FriendForm.js"
import { getFriends , useFriends } from "./FriendsProvider.js"
import { getUsers , useUsers } from "../UserProvider.js"

FriendHTML

const contentTarget = document.querySelector(".friendsList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("friendStateChanged", () => FriendList())

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
          
        friendHTMLRepresentations = friends.map(friend => {
            const friendObj = users.find(user => friend.friendId === user.id)
            // console.log("friendObj" , friendObj)
            return friendObj
        })
        // console.log("friendHTMLRep" , friendHTMLRepresentations)
        contentTarget.innerHTML =
        `<h3>Friends List</h3>
        <div class="friendsListContainer">
        ${friendHTMLRepresentations.map(f =>  FriendHTML(f)).join("")}
        </div>
        `
        
        // console.log("friend" , friend)
        // contentTarget.innerHTML = 
    })

}



