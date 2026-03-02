let currentRating = 0;
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

    const all = JSON.parse(localStorage.getItem('rackets') || "[]");
    all.push({ name, rank, stars: currentRating });
    localStorage.setItem('rackets', JSON.stringify(all));

    render();
}
function render() {
    const all = JSON.parse(localStorage.getItem('rackets') || "[]");
    let html = "<h2>Racket List</h2>";

    for (let r of all) {
        html += "<div class='racket-output'>" + "<strong>" + r.name + "</strong> : " + r.rank +" " + "<span class='goldstars'>" + "★".repeat(r.stars) + "</div>";
    }

    listDiv.innerHTML = html;
}

render();