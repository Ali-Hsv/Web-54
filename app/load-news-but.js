//todo:========Buttons========//

function handleClick(id) {
    console.log(`site - ${id}`);
    window.location.href = `./news.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("news.html")) {
        runNewsFunction();
    }
});

function runNewsFunction(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id"); 
    console.log(`ID from URL: ${id}`);

    fetch('https://682aeb9eab2b5004cb383ffe.mockapi.io/news/news')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("img-1").style.backgroundImage = `url("${data[id].avatar}")`;
        document.querySelector(".mainText").textContent = `${data[id].data}`;
        document.getElementById("news-name").textContent = `${data[id].name}`;
    }
)
}