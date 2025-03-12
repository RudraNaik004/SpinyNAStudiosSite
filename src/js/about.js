fetch("../assets/data.json")
    .then(response => response.json())
    .then(devs => loadDevs(devs));

function loadDevs(myDevs) {
    var CardDevs = document.getElementById("devs");

    for (var i = 0; i < 3; i++) {
        let name = myDevs.devs[i].name;
        let url = myDevs.devs[i].link;
        let linkedin = myDevs.devs[i].linkedin;
        let email = myDevs.devs[i].email;
        let desc = myDevs.devs[i].desc;
        // create a new HTML div division
        let AddCardDevs = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddCardDevs.classList.add("col");
        // create Bootstrap card

        AddCardDevs.innerHTML = `
        <div class="col-lg-4" style="margin:auto">W
            <h2 class="fw-normal">${name}</h2>
            <p>${email}</p>
            <p><a class="btn glassmorphic-btn" href="${linkedin}">linkedin &raquo;</a></p>
        </div>
        `

        //<img src = "./Images/Kobe Laws.jpg" alt="Kobe Laws"  width="140" height="140">`
        CardDevs.appendChild(AddCardDevs);
    }
}