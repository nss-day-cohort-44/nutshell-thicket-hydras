const contentTarget = document.querySelector(".friendsContainer")


eventHub.addEventListener("userAuthenticated", () => FriendForm())

export const FriendForm = () => {
    return  contentTarget.innerHTML =  `
    <input id="dailyTask--taskName" type="text" placeholder="Your Task Here">
    <textarea id="dailyTask--task" placeholder="Your Note Here"></textarea>
    <button id="saveNote">Save Note</button>`
}