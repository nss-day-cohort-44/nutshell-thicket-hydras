const eventHub = document.querySelector(".container")

// 
const dispatchStateChangeEvent = () => {
    const friendStateChangedEvent = new CustomEvent("friendStateChanged")

    eventHub.dispatchEvent(friendStateChangedEvent)
    
}

let friends = ""


export const useFriends = () => {
    return friends.slice()
}

// Gets all friends string from db and convert to json. Exports to FriendsList  
export const getFriends = () => {

    return fetch(`http://localhost:8088/friends`)
        .then(response => response.json())
        .then(parsedFriends => {
// Filters through friends array and filters just those related to active user

            friends = parsedFriends.filter(uf => {
                return uf.userId === parseInt(sessionStorage.getItem("activeUser"))

            }
            )
            // console.log("friends filtered" , friends)
        })
        

}

// 
export const getByFriendId = (friendsId) => {
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
    
    return fetch(`http://localhost:8088/friends?userFriend=${friendsId}&userId=${activeUser}`)
        .then(response => response.json())
        .then(parsedFriends => {
            return parsedFriends[0]

            
            
            // console.log("friends filtered" , friends)
        })
        

}


// Saves friend object that is added in FriendsForm to database.json
export const saveFriend = friend => {
    return fetch('http://localhost:8088/friends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    })
    .then(getFriends)
    .then(dispatchStateChangeEvent)
    
}

// Deletes friends from Friend List by targeting the friends.id
export const deleteFriend = id => { 
    return fetch(`http://localhost:8088/friends/${id}`,{
        method: "DELETE"
    })
    .then(getFriends)
}

