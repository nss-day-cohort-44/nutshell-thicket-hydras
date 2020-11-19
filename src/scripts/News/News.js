export const Article = (articleObj) => {
    return `
    <div class="article">
        <p><b>${articleObj.titleOfArticle}</b></p>
        <p>Date Article Entered:<b> ${new Date(articleObj.timestamp).toLocaleDateString('en-US')}</b></p>
        <p>Date of Article:<b>${articleObj.dateOfArticle}</b></p>
        <a href="${articleObj.urlOfArticle}"/a><p>URL:<b>${articleObj.urlOfArticle}</b></p></a>
        <p>Description:<b>${articleObj.descriptionOfArticle}</b></p>
        <button id="deleteArticle--${articleObj.id}">Remove Article</button>
    </div>
    `
}