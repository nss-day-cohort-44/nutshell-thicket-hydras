
export const FriendHTML = (newFriend) => {
    // console.log("newFriend" , newFriend.id)
    return `

        <div class="friendsHTML">

        <div class="friendName"> ${newFriend.username}</div>
        <button id="deleteFriend--${newFriend.id}">Delete</button>
        
        
    `
    

}