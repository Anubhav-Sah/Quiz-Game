console.log('Connected');

let roundHeading = document.getElementById('roundHeading');
let categoriesList = document.getElementById('categoriesList');
let startRoundBtn = document.getElementById('startRound');



let categories = JSON.parse(sessionStorage.getItem("categories"));
let categoryName = JSON.parse(sessionStorage.getItem("categoryName"));
let round = Number(sessionStorage.getItem("round"));

let usedCategories = [];

roundHeading.innerText = `Round Number : ${round}`;


categories.forEach((category) => {
    let option = document.createElement('option');
    option.innerText = categoryName[category];
    option.value = category;
    categoriesList.appendChild(option);
});


startRoundBtn.addEventListener("click", () => {
    startRoundBtn.disabled = true;
    error.innerText = '';
    let category = categoriesList.value;
    if (category === '') {
        alert("Select a category");
        startRoundBtn.disabled = false;
        return
    }

    startRoundBtn.innerText = 'Collecting Question...'

    // console.log(category);
    let fetching = async () => {
        try {
            let easyData = await fetchQuestions('easy', 2, category);
            let mediumData = await fetchQuestions('medium', 2, category);
            let hardData = await fetchQuestions('hard', 2, category);
            setTimeout(() => {
                startRoundBtn.innerText = 'Successfully Collected'
            }, 1000);
            sessionStorage.setItem('easyData', JSON.stringify(easyData));
            sessionStorage.setItem('mediumData', JSON.stringify(mediumData));
            sessionStorage.setItem('hardData', JSON.stringify(hardData));

            let index = categories.indexOf(categoriesList.value)
            categories.splice(index, 1);
            sessionStorage.setItem('categories', JSON.stringify(categories));

            window.location.href = '../html/question.html';
            
        }
        catch (error) {
            let errorPara = document.getElementById('error');
            errorPara.innerText = error;
            startRoundBtn.innerText = 'Start Round';
            startRoundBtn.disabled = false;
        }
        
    }

    fetching();




});

let fetchQuestions = (difficult, numQuestions, category) => {
    const url = "https://the-trivia-api.com/v2/questions";

    let query = {
        categories: category,
        difficulties: difficult,
        limit: numQuestions
    };

    let queryString = new URLSearchParams(query).toString();

    return fetch(`${url}?${queryString}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Something happened. Status: ${res.status}`);
            }
            return res.json();
        })
        .then(result => {
            if (!result) {
                throw new Error("No result found");
            }
            return result

        })
        .catch((error) => {
            throw error;
        })


}
