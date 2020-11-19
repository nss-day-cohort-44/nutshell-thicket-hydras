const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const friendStateChangedEvent = new CustomEvent("friendStateChanged")

    eventHub.dispatchEvent(friendStateChangedEvent)
    
}

let friends = ""


export const useFriends = () => {
    return friends.slice()
}

export const getFriends = () => {

    return fetch(`http://localhost:8088/friends`)
        .then(response => response.json())
        .then(parsedFriends => {
            friends = parsedFriends.filter(uf => {
                return uf.userId === parseInt(sessionStorage.getItem("activeUser"))

            }
            )
            // console.log("friends filtered" , friends)
        })
        

}

export const getByFriendId = (friendsId) => {
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
    
    return fetch(`http://localhost:8088/friends?userFriend=${friendsId}&userId=${activeUser}`)
        .then(response => response.json())
        .then(parsedFriends => {
            return parsedFriends[0]

            
            
            // console.log("friends filtered" , friends)
        })
        

}


// Where is any of this coming from?
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

export const deleteFriend = id => { 
    return fetch(`http://localhost:8088/friends/${id}`,{
        method: "DELETE"
    })
    .then(getFriends)
}

