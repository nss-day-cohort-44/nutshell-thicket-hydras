import { FriendHTML } from "./Friends.js"
import "./FriendForm.js"
import { getFriends , useFriends } from "./FriendsProvider.js"
import { getUsers , useUsers } from "../UserProvider.js"

FriendHTML

const contentTarget = document.querySelector(".friendsContainer")
const eventHub = document.querySelector(".container")

export const FriendList = () => {
    getFriends()
    .then(getUsers)
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
        const friend = friendHTMLRepresentations.map(f => {
            return f.username
        })
        console.log("friend" , friend)
        FriendHTML(friend)
    })
}
