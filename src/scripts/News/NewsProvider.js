const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const articleListStateChanged = new CustomEvent("articleStateChanged")
    eventHub.dispatchEvent(articleListStateChanged)
}



let articles = []

export const useArticle = () => {
    return articles.slice()
}

export const getArticle = () => {
    return fetch("http://localhost:8088/articles")
    .then(response => response.json())
    .then (
        parsedArticles => {
            // console.log(parsedEvents)
            articles = parsedArticles
        })
}
export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticle)
}
export const saveArticle = (articles) => {

    return fetch('http://localhost:8088/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articles)
    })
    .then(getArticle)
    .then(dispatchStateChangeEvent)
    
}