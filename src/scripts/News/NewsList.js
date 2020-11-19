import { Article } from "./News.js";
import { deleteArticle, getArticle, useArticle } from "./NewsProvider.js";


const contentTarget = document.querySelector(".articles")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("articleStateChanged", () => ArticlesList())



// EventsList is getting new task and then all the events and then displaying the event
// need to get button to display first

export const ArticlesList = () => {
    getArticle()
    .then(() => {
        const allArticles = useArticle()
        render(allArticles)
    })
}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useEvents() and render the Event list again.
        */
       deleteArticle(id).then(
           () => {
               const updatedArticles = useArticle()
               render(updatedArticles)
           }
       )
    }
})

const render = (articleArray) => {
    let articleHTML = ""

    for(const article of articleArray) {
        articleHTML += Article(article)
    }


contentTarget.innerHTML = `
<h3>Articles</h3>
${articleHTML}
`

}