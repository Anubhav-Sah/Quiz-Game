console.log("Connected");


let nextRound = document.getElementById('nextRound');
let endQuiz = document.getElementById('endQuiz');


let categories = JSON.parse(sessionStorage.getItem('categories'));


if (categories.length < 1){
    nextRound.disabled = true;
}

nextRound.addEventListener('click',()=>{
    let round = Number(sessionStorage.getItem('round'));
    round+=1
    sessionStorage.setItem('round',round);
    window.location.href = '../html/roundPage.html';
})


endQuiz.addEventListener('click',()=>{
    window.location.href = '../html/final.html';
})












// IsThisFirstTime_Log_From_LiveServer
// : 
// "true"
// [object Object]
// : 
// "{\"name\":\"Priya\",\"score\":10}"
// categories
// : 
// "[\"sport_and_leisure\",\"film_and_tv\",\"arts_and_literature\",\"history\",\"society_and_culture\",\"science\",\"geography\",\"food_and_drink\",\"general_knowledge\"]"
// categoryName
// : 
// "{\"music\":\"Music\",\"sport_and_leisure\":\"Sport and Leisure \",\"film_and_tv\":\"Film and T.V.\",\"arts_and_literature\":\"Arts and Literature\",\"history\":\"History\",\"society_and_culture\":\"Society and Culture\",\"science\":\"Science\",\"geography\":\"Geography\",\"food_and_drink\":\"Food and Drink\",\"general_knowledge\":\"General Knowledge\"}"
// easyData
// : 
// "[{\"category\":\"music\",\"id\":\"622a1c397cc59eab6f950c45\",\"correctAnswer\":\"The Beach Boys\",\"incorrectAnswers\":[\"The Velvet Underground\",\"The Monkees\",\"Fleetwood Mac\"],\"question\":{\"text\":\"Which American rock band released the song 'Wouldn't It Be Nice'?\"},\"tags\":[\"music\"],\"type\":\"text_choice\",\"difficulty\":\"easy\",\"regions\":[],\"isNiche\":false},{\"category\":\"music\",\"id\":\"636a528a990390307063f3a4\",\"correctAnswer\":\"Bob Marley and The Wailers\",\"incorrectAnswers\":[\"Lenny Kravitz\",\"Andy Williams\",\"The Guess Who\"],\"question\":{\"text\":\"The song 'I Shot the Sheriff' had a well-known cover by Eric Clapton, but who recorded the original?\"},\"tags\":[\"music\",\"cover_song\",\"songs\",\"musicians\"],\"type\":\"text_choice\",\"difficulty\":\"easy\",\"regions\":[],\"isNiche\":false}]"
// hardData
// : 
// "[{\"category\":\"music\",\"id\":\"6488889b5dba6c873ef6506b\",\"correctAnswer\":\"Justin Timberlake\",\"incorrectAnswers\":[\"Usher\",\"Bruno Mars\",\"Ed Sheeran\"],\"question\":{\"text\":\"Which pop star won the Grammy Award for Best Male Pop Vocal Performance in 2007, with the song \\\"What Goes Around... Comes Around\\\"?\"},\"tags\":[\"music\",\"songs\"],\"type\":\"text_choice\",\"difficulty\":\"hard\",\"regions\":[],\"isNiche\":false},{\"category\":\"music\",\"id\":\"622a1c397cc59eab6f950d0c\",\"correctAnswer\":\"The Beatles\",\"incorrectAnswers\":[\"Deep Purple\",\"Feeder\",\"Uriah Heep\"],\"question\":{\"text\":\"Which English rock band released the song 'Come Together'?\"},\"tags\":[\"music\"],\"type\":\"text_choice\",\"difficulty\":\"hard\",\"regions\":[],\"isNiche\":false}]"
// mediumData
// : 
// "[{\"category\":\"music\",\"id\":\"622a1c397cc59eab6f950ce4\",\"correctAnswer\":\"Queen\",\"incorrectAnswers\":[\"Level 42\",\"Deep Purple\",\"Feeder\"],\"question\":{\"text\":\"Which British rock band released the song 'Under Pressure'?\"},\"tags\":[\"music\"],\"type\":\"text_choice\",\"difficulty\":\"medium\",\"regions\":[],\"isNiche\":false},{\"category\":\"music\",\"id\":\"622a1c357cc59eab6f94fe98\",\"correctAnswer\":\"Rihanna\",\"incorrectAnswers\":[\"Drake\",\"Nicki Minaj\",\"Ricky Martin\"],\"question\":{\"text\":\"Which singer released the song 'SOS'?\"},\"tags\":[\"songs\",\"music\"],\"type\":\"text_choice\",\"difficulty\":\"medium\",\"regions\":[],\"isNiche\":false}]"
// player1Details
// : 
// "{\"name\":\"Anup\",\"score\":0}"
// player2Details
// : 
// "{\"name\":\"Priya\",\"score\":10}"
// round
// : 
// "1"
// length
// : 
// 10