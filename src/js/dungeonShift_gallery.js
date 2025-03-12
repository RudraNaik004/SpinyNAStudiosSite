console.log("JS STARTS HERE!!")
fetch("../assets/data.json")
    .then(response => response.json())
    .then(myPics => loadDSPics(myPics));

function loadDSPics(myPics) {
    var CardPics = document.getElementById("dsPics");

    for (var i = 0; i < myPics.dungeonShift.length; i++) {
        let desc = myPics.dungeonShift[i].description;
        let url = myPics.dungeonShift[i].url;
        let version = myPics.dungeonShift[i].version;
        let title = myPics.dungeonShift[i].title;

        //encode URL to account for Spaces
        let encodedUrl = encodeURIComponent(url);
        // create a new HTML div division
        let AddCardPics = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddCardPics.classList.add("col");
        // create Bootstrap card

        AddCardPics.innerHTML = `
          <div class="card shadow-sm">
            <img src=${encodedUrl} alt=${title} style= "width: 325px" />
            <div class="card-body">
              <p class="card-text">${desc}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-body-secondary">${version}</small>
              </div>
            </div>
          </div>
        `
        CardPics.appendChild(AddCardPics);
    }
}