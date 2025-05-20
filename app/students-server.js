fetch("https://682aeb9eab2b5004cb383ffe.mockapi.io/news/class-news")
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const main = document.querySelector('main')

        data.forEach(obj => {
            const div = document.createElement('div')
            div.id = `Student-${obj.id}`
            div.className = 'student'
            div.innerHTML = `
                <div class="block">
                    <div class="personeProfile" id="personeImg-${obj.id}"></div>
                    <div class="mainInfo">
                        <h2 id="perosneName-${obj.id}">Name</h2>
                        <div class="personalInfo">
                            <div class="nameSkills">
                                <p>HTML:</p>
                                <p>CSS:</p>
                                <p>JS:</p>
                                <p>SQL:</p>
                            </div>
                            <div class="skillsPrecent">
                                <div class="progress-container">
                                    <div class="progress-bar" id="html-bar-${obj.id}"></div>
                                    <span class="progressText" id="html-${obj.id}">0%</span>
                                </div>
                                <div class="progress-container">
                                    <div class="progress-bar" id="css-bar-${obj.id}"></div>
                                    <span class="progressText" id="css-${obj.id}">0%</span>
                                </div>
                                <div class="progress-container">
                                    <div class="progress-bar" id="js-bar-${obj.id}"></div>
                                    <span class="progressText" id="js-${obj.id}">0%</span>
                                </div>
                                <div class="progress-container">
                                    <div class="progress-bar" id="sql-bar-${obj.id}"></div>
                                    <span class="progressText" id="sql-${obj.id}">0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="infoButtons">
                    <div class="iconsContainer">
                        <span class="tooltip">
                            <a href="#"><i class="fi fi-rr-envelope iconColor"></i></a>
                            <span class="tooltip-text">Email</span>
                        </span>
                        <span class="tooltip">
                            <a href="#"><i class="fi fi-rr-bookmark iconColor"></i></a>
                            <span class="tooltip-text">Save</span>
                        </span>
                    </div>
                    <button class="about" id="more-3">About</button>
                </div>
            `
            main.appendChild(div);

            const pesone_img = document.getElementById(`personeImg-${obj.id}`);
            pesone_img.style.backgroundImage = `url("${obj.img}")`;

            const pesone_name = document.getElementById(`perosneName-${obj.id}`);
            pesone_name.innerText = `${obj.name}`

            setTimeout(()=>{
                //html
                const html = document.getElementById(`html-bar-${obj.id}`);
                html.style.width = `${obj.HTML}%`

                const html_txt = document.getElementById(`html-${obj.id}`);
                html_txt.textContent = `${obj.HTML}%`
                //css
                const css = document.getElementById(`css-bar-${obj.id}`);
                css.style.width = `${obj.CSS}%`
                
                const css_txt = document.getElementById(`css-${obj.id}`);
                css_txt.textContent = `${obj.CSS}%`
                //js
                const js = document.getElementById(`js-bar-${obj.id}`);
                js.style.width = `${obj.JS}%`

                const js_txt = document.getElementById(`js-${obj.id}`);
                js_txt.textContent = `${obj.JS}%`
                //sql  
                const sql = document.getElementById(`sql-bar-${obj.id}`);
                sql.style.width = `${obj.SQL}%`

                const sql_txt = document.getElementById(`sql-${obj.id}`);
                sql_txt.textContent = `${obj.SQL}%`
            }, 500)
        });

        const searchInput = document.querySelector('.search-input');

        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase(); 
        
            data.forEach(obj => {
                const studentDiv = document.getElementById(`Student-${obj.id}`);
                const name = obj.name.toLowerCase();
            
                if (name.includes(searchTerm)) {
                    studentDiv.style.display = 'flex';
                } else {
                    studentDiv.style.display = 'none';
                }
            });
        });
    })