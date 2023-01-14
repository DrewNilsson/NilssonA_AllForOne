let pg3Input1 = document.getElementById("pg3Input1");
let pg3Input2 = document.getElementById("pg3Input2");
let pg3Return = document.getElementById("pg3Return");
let pg3SubBtn = document.getElementById("pg3SubBtn");

let pg3SavedInput = "";
let pg3Url = "";


pg3SubBtn.addEventListener("click", function() {
 pg3Api(pg3Input1, pg3Input2)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg3Return.textContent = data
            console.log(data)
        }
    )
}

function pg3Api(pg3Input1, pg3Input2){
    var letters = /^[A-Za-z]+$/;
    if(pg3Input1.value.match(letters)){
        pg3SavedInput = pg3Input1.value + "/" + pg3Input2.value;
        pg3Url = "https://allchallenges.azurewebsites.net/AllChallenges/AskingQuestions/" + pg3SavedInput;
        urlCall(pg3Url);
    }else{
        pg3Return.textContent = "Enter a valid response";
    }
}