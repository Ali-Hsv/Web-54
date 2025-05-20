fetch("https://682aeb9eab2b5004cb383ffe.mockapi.io/news/news")
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const main = document.querySelector('.innerSite')

        data.forEach(obj => {
            const minus = obj.id - 1;
            console.log(minus);
            const div = document.createElement('div')
            div.className = "newsBlock"
            div.id = `doc${obj.id}`
            div.innerHTML = `
                <div class="imgBlock" id="img-${obj.id}"></div>
                <div class="InfoBlock-right">
                    <h2 id="info-name-${obj.id}">Title</h2>
                    <div class="textBox">
                        <p id="quick-info-${obj.id}">Loading Text...</p>
                    </div>
                    <button class="more" onclick="handleClick(${minus})">More</button>
                </div>
            `
            main.appendChild(div);

            const img = document.getElementById(`img-${obj.id}`);
            img.style.backgroundImage = `url("${obj.avatar}")`;

            const title = document.getElementById(`info-name-${obj.id}`);
            title.innerText = `${obj.name}`

            const quick_title = document.getElementById(`quick-info-${obj.id}`);
            quick_title.innerText = `${obj.quickINF}`
        });

        const searchInput = document.querySelector('.search-input');

        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase(); 
        
            data.forEach(obj => {
                const studentDiv = document.getElementById(`info-name-${obj.id}`);
                const block = document.getElementById(`doc${obj.id}`)
                const name = obj.name.toLowerCase();
            
                if (name.includes(searchTerm)) {
                    block.style.display = 'flex';
                } else {
                    block.style.display = 'none';
                }
            });
        });
    })