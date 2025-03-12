fetch("../assets/news.json")
    .then(response => response.json())
    .then(news => loadNews(news));

function loadNews(myNews) {
    //console.log("loading campaigns.")
    // Find the element “col” in HTML
    var CardNews = document.getElementById("col");
    // Read every movie from the array
    for (var i = 0; i < myNews.news.length; i += 2) {
        let title = myNews.news[i].title;
        let subtitle = myNews.news[i].subtitle;
        let url = myNews.news[i].image;
        let description = myNews.news[i].description;
        let link = myNews.news[i].link;
        let desc = myNews.news[i].desc;

        // Create the main div
        let AddCardNews = document.createElement("div");
        AddCardNews.classList.add("col");

        let HTML = `
        <div class="row g-4">
            <div class="col-md-6">
                <a style="text-decoration:none" href="${link}">
                    <div class="glassmorphic-card-news h100"
                        style="background-image: linear-gradient(to right, hwb(0 8% 91% / 0.7) 0 100%), url('${url}'); min-height: 15rem;" alt="${desc}">
                        <div class="icon-card">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h1>${title}</h1>
                        <h4 style="color:whitesmoke"><i>${subtitle}</i></h4>
                        <p style="color:whitesmoke">${description}</p>
                    </div>
                </a>
            </div>`;

        if (i + 1 < myNews.news.length) {
            let title2 = myNews.news[i + 1].title;
            let subtitle2 = myNews.news[i + 1].subtitle;
            let url2 = myNews.news[i + 1].image;
            let description2 = myNews.news[i + 1].description;
            let link2 = myNews.news[i + 1].link;
            let desc2 = myNews.news[i].desc;

            HTML += `
            <div class="col-md-6">
                <a style="text-decoration:none" href="${link2}">
                    <div class="glassmorphic-card-news h100"
                        style="background-image: linear-gradient(to right, hwb(0 8% 91% / 0.7) 0 100%), url('${url2}'); min-height: 15rem;" alt="${desc}">
                        <div class="icon-card">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h1>${title2}</h1>
                        <h4 style="color:whitesmoke"><i>${subtitle2}</i></h4>
                        <p style="color:whitesmoke">${description2}</p>
                    </div>
                </a>
            </div>`;
        }

        HTML += `</div><hr>`;

        AddCardNews.innerHTML = HTML;
        CardNews.appendChild(AddCardNews);
    }
} // end of function