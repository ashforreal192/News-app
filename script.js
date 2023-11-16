const container = document.querySelector
(".container")

const optionsContainer = document.querySelector
(".options-container")

const country = "in"
// "in" stands for india

const options = [
    "general", "entertainment", "health", "science", "sports", "technology"
]

// 100 requests per day
let requestUrl

// Create cards from data
const generateUI = (articles) => {
for (let item of articles) {
    let card = document.createElement("div")
    card.classList.add("news-card")
    card.innerHTML = `<div
    class = "news-image-container">
    <img src="${item.urlToImage || "./newspaper.jpg"}
    " alt = "" />
    </div>
    <div class = "news-content">
        <div class = "news-title">
            ${item.title}
        </div>
        <div class = "news-description">
            ${item.description || item.content || ""}
        </div>
        <a href = "${item.url}" targer = "_blank"
        class = "view-button">Read More</a>
    </div>`
}
}


const init = () => {
    optionsContainer.innerHTML = ""
    getNews()
    createOptions()
}

window.onload = () => {
    requestUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`
    init()
}