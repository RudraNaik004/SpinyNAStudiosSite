// Read the file with movies :
fetch("../assets/campaigns.json")
    .then(response => response.json())
    .then(campaigns => loadCampaigns(campaigns));

function loadCampaigns(myCamp) {

    //console.log("loading campaigns.")
    // Find the element “col” in HTML
    var CardCampaign = document.getElementById("col");
    // Read every movie from the array
    for (var i = 0; i < myCamp.campaigns.length; i++) {
        let title = myCamp.campaigns[i].title;
        let subtitle = myCamp.campaigns[i].subtitle;
        let url = myCamp.campaigns[i].image;
        let description = myCamp.campaigns[i].description;
        // create a new HTML div division
        let AddCardCampaign = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddCardCampaign.classList.add("col");
        // create Bootstrap card
        if (i % 2 == 0) {
            AddCardCampaign.innerHTML = `
        <div class="container flex-grow-1">
            <div class="row g-4">
            <div class="col-md-5">
                    <div class="glassmorphic-card-img h100"
                        style="background-image: url('${url}');">
                        <div class="icon-card">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                    </div>
            </div>
            <div class="col-md-7">
                <div class="glassmorphic-card-long h100">
                    <div class="icon-card">
                          <i class="fas fa-paint-brush"></i>
                    </div>
                    <h3>${title}</h3>
                    <h5 style="color:whitesmoke">${subtitle}</h5>
                    <p>${description}</p>
                </div>
            </div>
            </div>
        </div>

        <hr> 
            `;
        } else {
            AddCardCampaign.innerHTML = `
        <div class="container flex-grow-1">
        <div class="row g-4">
        <div class="col-md-7">
            <div class="glassmorphic-card-long h100">
                <div class="icon-card">
                      <i class="fas fa-paint-brush"></i>
                </div>
                <h3>${title}</h3>
                <h5 style="color:whitesmoke">${subtitle}</h5>
                <p>${description}</p>
            </div>
        </div>
        <div class="col-md-5">
                <div class="glassmorphic-card-img h100"
                    style="background-image: url('${url}');">
                    <div class="icon-card">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                </div>
        </div>
        </div>
        </div>

        <hr>
        `;
        }
        // append new division
        CardCampaign.appendChild(AddCardCampaign);
    } // end of for
} // end of function

fetch("../assets/news.json")
    .then(response => response.json())
    .then(news => loadNews(news));

function loadNews(myNews) {
    var CardNews = document.getElementById("news");

    for (var i = 0; i < 3; i++) {
        let title = myNews.news[i].title;
        let subtitle = myNews.news[i].subtitle;
        let url = myNews.news[i].image;
        let description = myNews.news[i].description;
        let link = myNews.news[i].link;
        // create a new HTML div division
        let AddCardNews = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddCardNews.classList.add("col");
        // create Bootstrap card

        AddCardNews.innerHTML = `
        <div class="col">
                <a style="text-decoration:none" href="${link}">
                    <div class="glassmorphic-card-news h100"
                        style="background-image: linear-gradient(to right, hwb(0 8% 91% / 0.7) 0 100%), url('${url}'); max-height: 15rem;">
                        <div class="icon-card">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h3>${title}</h3>
                        <h4 style="color:whitesmoke"><i>${subtitle}</i></h4>
                        <p>${description}</p>
                    </div>
                </a>
        </div>
        `
        CardNews.appendChild(AddCardNews);
    }
}

