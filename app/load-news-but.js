function handleClick(id) {
    console.log(`site - ${id}`);
    window.location.href = `./news.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("news.html")) {
        runNewsFunction();
    }
});

function runNewsFunction() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || isNaN(id)) {
        console.error("Некорректный ID");
        return;
    }

    fetch('https://682aeb9eab2b5004cb383ffe.mockapi.io/news/news')
        .then(res => res.json())
        .then(data => {
            if (!data[id]) {
                console.error(`Нет данных по id = ${id}`);
                return;
            }

            document.getElementById("img-1").style.backgroundImage = `url("${data[id].avatar}")`;
            document.querySelector(".mainText").textContent = data[id].data;
            document.getElementById("news-name").textContent = data[id].name;
        })
        .catch(err => {
            console.error("Ошибка при загрузке данных:", err);
        });
}
