let home_Score = document.getElementById("home-Score")

let guest_Score = document.getElementById("guest-Score")

function add(value, num) {
    if (value == true){
        console.log((num) +" point to guest")
        let score = parseInt(guest_Score.innerText)
        score += (num)
        guest_Score.innerText = score
    } if(value == null) {
        console.log((num) + " point to home")
        let score = parseInt(home_Score.innerText)
        score += (num)
        home_Score.innerText = score
    }
}

function reset() {
    home_Score.innerText = 0;
    guest_Score.innerText = 0;
}