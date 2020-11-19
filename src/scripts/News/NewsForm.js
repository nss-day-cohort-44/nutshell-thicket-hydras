import {saveArticle, useArticle} from "./NewsProvider.js"

const contentTarget = document.querySelector(".articleForm")
const eventHub = document.querySelector(".container")


export const ArticleForm = () =>{
    const eventArray = useArticle()
    render(eventArray)
}
 const render = () => {
    contentTarget.innerHTML = `
    <div class="event">
        <input id="article--title" type="text"placeholder="Title of the Article"/>
        <input id="article--dateEntered" type="date"/>
        <input id="article--url" type="url" placeholder="URL of Article"/>
        <textarea id="article--description" type="text" placeholder="Describe the Article"></textarea>
        <button id="saveArticle">Save Article</button>
    </div>
    `
}
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "saveArticle") {
        const titleOfArticle =document.querySelector("#article--title").value
        const timestamp = Date.now()
        const dateOfArticle = document.querySelector("#article--dateEntered").value
        const urlOfArticle = document.querySelector("#article--url").value
        const descriptionOfArticle = document.querySelector("#article--description").value

        const newArticle = {
            titleOfArticle,
            timestamp,
            dateOfArticle,
            urlOfArticle,
            descriptionOfArticle

        }
        saveArticle(newArticle)
    }
})