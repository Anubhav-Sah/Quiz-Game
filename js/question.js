console.log('connected');

let player1Score = document.getElementById('player1Score');
let player2Score = document.getElementById('player2Score');
let option = document.querySelectorAll('.option');
let roundNumber = document.getElementById('roundNumber');
let category = document.getElementById('category');
let difficultLvl = document.getElementById('difficultLvl');
let playerTurn = document.getElementById('playerTurn');
let questionText = document.getElementById('questionText');
// let options = document.getElementById('options');
let nextQuestion = document.getElementById('nextQuestion');


let round = Number(sessionStorage.getItem('round'));
let categoryName = JSON.parse(sessionStorage.getItem('categoryName'));

let player1Details = JSON.parse(sessionStorage.getItem("player1Details"));
let player2Details = JSON.parse(sessionStorage.getItem("player2Details"));
let i = 0;
let points = {
    'easy': 10,
    'medium': 15,
    'hard': 20
};


let showScore = () => {
    player1Score.innerText = `${player1Details.name}'s Score : ${player1Details.score}`;
    player2Score.innerText = `${player2Details.name}'s Score : ${player2Details.score}`;
};

let random = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr; // Return the shuffled array
}

// option[0].disabled =true;
let showQuestion = (arr, opt,playerDetails,variable) => {
    // console.log(arr);
    option.forEach(element => {
        element.style.pointerEvents = 'auto';
        element.style.cursor = 'pointer';
        element.style.backgroundColor = '#f9f9f9'
    });
    nextQuestion.disabled = true;

    questionText.innerText = `Question : ${arr.question.text}`;
    category.innerText = `Category : ${categoryName[arr.category]}`;
    difficultLvl.innerText = `Difficulty Level : ${arr.difficulty.charAt(0).toUpperCase() + arr.difficulty.slice(1)}`;
    
    for (let i = 0; i < 4; i++) {
        // console.log(option);
        option[i].innerText = opt[i];


        option[i].onclick = () => {
            option.forEach(element => {
                element.style.pointerEvents = 'none';
                element.style.cursor = 'not-allowed';
            });
            let correctAnwers = arr['correctAnswer'];
            if (option[i].innerText == correctAnwers) {
                option[i].style.backgroundColor = 'lightgreen';
                // playerDetails.score+=marks[arr.difficulty];
                nextQuestion.disabled = false;
                playerDetails.score += points[arr.difficulty];
                // console.log(playerDetails.score);
                showScore();
                // console.log(`${variable},${JSON.stringify(playerDetails)}`)
                
                // console.log("QUestion is correct")
                
                // sessionStorage.setItem()
            }
            else {
                option[i].style.backgroundColor = 'red';
                option.forEach(element => {
                    if (element.innerText === arr.correctAnswer) {
                        element.style.backgroundColor = 'lightgreen';
                    }
                });
                nextQuestion.disabled = false;
                // console.log("QUestion is Wrong");                
            }
        };
    }
}


let loadQuestion = (renderData) => {

    if (i==5){
        nextQuestion.innerText= "Go to Summary Page";
    }
    if (i >= renderData.length) {
        sessionStorage.setItem(`player1Details`,JSON.stringify(player1Details));
        sessionStorage.setItem(`player2Details`,JSON.stringify(player2Details));
        window.location.href = '../html/roundSummary.html';
    }
    let data = renderData[i];
    let opt = [...data.incorrectAnswers, data.correctAnswer];
    random(opt);

    if (i % 2 == 0) {
        playerTurn.innerText = `${player1Details.name}'s Turn`
        showQuestion(data, opt, player1Details,'player1Details');
    }
    else {
        playerTurn.innerText = `${player2Details.name}'s Turn`
        showQuestion(data, opt,player2Details,'player2Details')
        
    }

    // console.log(opt);

}


nextQuestion.disabled = true;
roundNumber.innerText = `Round : ${round}`;
showScore();
let easyData = JSON.parse(sessionStorage.getItem('easyData'));
let mediumData = JSON.parse(sessionStorage.getItem('mediumData'));
let hardData = JSON.parse(sessionStorage.getItem('hardData'));


let allQuestion = [...easyData, ...mediumData, ...hardData];
nextQuestion.addEventListener('click', () => {
    i += 1;
    loadQuestion(allQuestion);
});

loadQuestion(allQuestion);








// categories
// :
// "\"music\""
// categoryName
// :
// "{\"music\":\"Music\",\"sport_and_leisure\":\"Sport and Leisure \",\"film_and_tv\":\"Film and T.V.\",\"arts_and_literature\":\"Arts and Literature\",\"history\":\"History\",\"society_and_culture\":\"Society and Culture\",\"science\":\"Science\",\"geography\":\"Geography\",\"food_and_drink\":\"Food and Drink\",\"general_knowledge\":\"General Knowledge\"}"
// easyData
// :
// "[{\"category\":\"music\",\"id\":\"622a1c357cc59eab6f94ff10\",\"correctAnswer\":\"Madonna\",\"incorrectAnswers\":[\"Eric Clapton\",\"Nicki Minaj\",\"Alanis Morissette\"],\"question\":{\"text\":\"Which American singer and songwriter released the song 'Like a Virgin'?\"},\"tags\":[\"songs\",\"musicians\",\"general_knowledge\",\"1980's\",\"music\"],\"type\":\"text_choice\",\"difficulty\":\"easy\",\"regions\":[],\"isNiche\":false},{\"category\":\"music\",\"id\":\"622a1c397cc59eab6f950d4b\",\"correctAnswer\":\"One Direction\",\"incorrectAnswers\":[\"The Beatles\",\"NWA\",\"Oasis\"],\"question\":{\"text\":\"Which band was Niall Horan a member of?\"},\"tags\":[\"music\",\"pop_music\",\"bands\"],\"type\":\"text_choice\",\"difficulty\":\"easy\",\"regions\":[],\"isNiche\":false}]"
// hardData
// :
// "[{\"category\":\"music\",\"id\":\"625064dde12f6dec240bdfd3\",\"correctAnswer\":\"Jeannie C. Riley\",\"incorrectAnswers\":[\"Quiet Riot\",\"Michael Sembello\",\"Nena\"],\"question\":{\"text\":\"Who had a hit in 1968 with Harper Valley Pta?\"},\"tags\":[\"songs\",\"one_hit_wonders\",\"music\"],\"type\":\"text_choice\",\"difficulty\":\"hard\",\"regions\":[],\"isNiche\":false},{\"category\":\"music\",\"id\":\"622a1c397cc59eab6f950c72\",\"correctAnswer\":\"Linkin Park\",\"incorrectAnswers\":[\"Alice in Chains\",\"Hollywood Undead\",\"System of a Down\"],\"question\":{\"text\":\"Which American rock band released the studio album 'A Thousand Suns'?\"},\"tags\":[\"music\"],\"type\":\"text_choice\",\"difficulty\":\"hard\",\"regions\":[],\"isNiche\":false}]"
// mediumData
// :
// "[{\"category\":\"music\",\"id\":\"622a1c397cc59eab6f950be3\",\"correctAnswer\":\"Black Sabbath\",\"incorrectAnswers\":[\"Skunk Anansie\",\"Kasabian\",\"Emerson, Lake & Palmer\"],\"question\":{\"text\":\"Which British heavy metal band released the song 'Paranoid'?\"},\"tags\":[\"music\"],\"type\":\"text_choice\",\"difficulty\":\"medium\",\"regions\":[],\"isNiche\":false},{\"category\":\"music\",\"id\":\"622a1c397cc59eab6f950c41\",\"correctAnswer\":\"Coldplay\",\"incorrectAnswers\":[\"Level 42\",\"Deep Purple\",\"Feeder\"],\"question\":{\"text\":\"Which British band released the song 'Clocks'?\"},\"tags\":[\"songs\",\"music\"],\"type\":\"text_choice\",\"difficulty\":\"medium\",\"regions\":[],\"isNiche\":false}]"
// player1Details
// :
// "{\"name\":\"Anup\",\"score\":0}"
// player2Details
// :
// "{\"name\":\"Priya\",\"score\":0}"
// round
// :
// "1"
