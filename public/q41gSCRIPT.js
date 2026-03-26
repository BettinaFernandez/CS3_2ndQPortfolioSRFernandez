let currentRating = 0; //displaying and function of stars to be user-interactable
const listDiv = document.getElementById('output');
const stars = document.querySelectorAll(".stars i");
stars.forEach((star,index1) => {
    star.addEventListener("click", () => {
        currentRating = index1 + 1;
        console.log(index1);
        stars.forEach((star,index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
})

function saveRacket() {
    const name = document.getElementById('racket-name').value;
    const rank = document.getElementById('rank').value;

    const all = JSON.parse(localStorage.getItem('rackets') || "[]"); //reading

    let existing = false;

    for(let i =0; i < all.length; i++){ //getting the average of the stars (update in CRUD)
        if(all[i].name === name) {
            let current = all[i].count || 1;
            let inTotal = (all[i].stars*current) + currentRating;
            let neww = current + 1;

            all[i].stars = inTotal / neww
            all[i].count = neww
            all[i].rank = rank;

            existing = true
            break;
        }
    }
    if(!existing) {
        all.push({ name: name, rank: rank, stars: currentRating, count: 1 }); //create in crud
    }
    
    localStorage.setItem('rackets', JSON.stringify(all));

    render();
}
function render() { //displaying the average
    const all = JSON.parse(localStorage.getItem('rackets') || "[]");
    let html = "<h2>Racket List 🏸</h2>";

    for (let i =0; i < all.length; i++) {
        let r = all[i]
        let outputStar = "★".repeat(Math.round(r.stars));
        html += "<div class='racket-output'>" + "<strong>" + r.name + "</strong> : " + r.rank +" " + "<span class='goldstars'>" + outputStar + "</span>" + "<button type= 'button' class = 'deleteButton' onclick = 'deleteRacket(" + i + ")'> Remove Racket </button ></div>";
    }

    listDiv.innerHTML = html;
}

function deleteRacket(index) { //deleting the rackets (delete in CRUD)
    const all = JSON.parse(localStorage.getItem('rackets') || "[]");
    const racketName = all[index].name

    if(confirm("Are you sure you want to delete " + racketName + "?")){
        all.splice(index, 1)

            localStorage.setItem('rackets', JSON.stringify(all))

            render();
        
    }
}

render();
