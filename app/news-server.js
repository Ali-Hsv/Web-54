fetch('https://682aeb9eab2b5004cb383ffe.mockapi.io/news/news')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("img-1").style.backgroundImage = `url("${data[0].avatar}")`;
        document.getElementById("img-2").style.backgroundImage = `url("${data[1].avatar}")`;
        document.getElementById("img-3").style.backgroundImage = `url("${data[2].avatar}")`;
        document.getElementById("img-4").style.backgroundImage = `url("${data[3].avatar}")`;
        document.getElementById("img-5").style.backgroundImage = `url("${data[4].avatar}")`;
        document.getElementById("img-6").style.backgroundImage = `url("${data[5].avatar}")`;

        document.getElementById("quick-info-1").innerText = `${data[0].quickINF}`;
        document.getElementById("quick-info-2").innerText = `${data[1].quickINF}`;
        document.getElementById("quick-info-3").innerText = `${data[2].quickINF}`;
        document.getElementById("quick-info-4").innerText = `${data[3].quickINF}`;
        document.getElementById("quick-info-5").innerText = `${data[4].quickINF}`;
        document.getElementById("quick-info-6").innerText = `${data[5].quickINF}`;

        document.getElementById("info-name-1").innerText = `${data[0].name}`;
        document.getElementById("info-name-2").innerText = `${data[1].name}`;
        document.getElementById("info-name-3").innerText = `${data[2].name}`;
        document.getElementById("info-name-4").innerText = `${data[3].name}`;
        document.getElementById("info-name-5").innerText = `${data[4].name}`;
        document.getElementById("info-name-6").innerText = `${data[5].name}`;
    }
)

