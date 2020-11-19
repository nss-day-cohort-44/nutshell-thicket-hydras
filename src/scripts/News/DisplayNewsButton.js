import {ArticleForm} from "./NewsForm.js"
const contentTarget = document.querySelector(".button__addArticle")
const eventHub = document.querySelector(".container")

export const renderAddArticlesButton = () => {
    
    contentTarget.innerHTML = `
    <button id="addArticle">Add New Article</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "addArticle") {
      const addArticleButtonClicked = new CustomEvent("addArticleClicked")
      eventHub.dispatchEvent(addArticleButtonClicked)
  
    }
  })
eventHub.addEventListener("addArticleClicked", () => {
    ArticleForm()
})