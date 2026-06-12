
console.log("Connected");

let player1Input = document.getElementById('player1');
let player2Input = document.getElementById('player2');

let startBtn = document.getElementById('startBtn');





let categories = ["music", "sport_and_leisure", "film_and_tv", "arts_and_literature", "history", "society_and_culture", "science", "geography", "food_and_drink", "general_knowledge"];

let categoryName = {
    'music': "Music",
    "sport_and_leisure": "Sport and Leisure ",
    "film_and_tv": "Film and T.V.",
    "arts_and_literature": "Arts and Literature",
    "history": "History",
    "society_and_culture": "Society and Culture",
    "science": "Science",
    "geography": "Geography",
    "food_and_drink": "Food and Drink",
    "general_knowledge": "General Knowledge"
};


let round = 1;

startBtn.addEventListener('click', () => {
    // console.log(player1Name, player2Name);
    let player1Name = player1Input.value.trim();
    let player2Name = player2Input.value.trim();


    if (player1Name === '' || player2Name === '') {
        alert("Please enter both name!");
        return
    }
    else if (player1Name === player2Name) {
        alert("Both name should not be same !");
        return
    }
    else {
        let player1Details = {
            'name': player1Name,
            'score': 0
        };

        let player2Details = {
            'name': player2Name,
            'score': 0
        };
        sessionStorage.setItem('categories', JSON.stringify(categories));
        sessionStorage.setItem('categoryName', JSON.stringify(categoryName));
        sessionStorage.setItem('player1Details', JSON.stringify(player1Details));
        sessionStorage.setItem('player2Details', JSON.stringify(player2Details));
        sessionStorage.setItem('round', round);
        window.location.href = '../html/roundPage.html'
    }
})