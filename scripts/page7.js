let pg7Input = document.getElementById("pg7Input");
let pg7Return = document.getElementById("pg7Return");
let pg7SubBtn = document.getElementById("pg7SubBtn");

let pg7savedInput = "";
let pg7Url = "";


pg7SubBtn.addEventListener("click", function() {
    pg7Api(pg7Input)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg7Return.textContent = data
            console.log(data)
        }
    )
}

function pg7Api(pg7Input){
    var letters = /^[A-Za-z]+$/;
    if(pg7Input.value.match(letters) && pg7Input.value != ""){
        pg7savedInput = pg7Input.value;
        pg7Url = "https://allchallenges.azurewebsites.net/AllChallenges/Reverse/" + pg7savedInput;
        urlCall(pg7Url);
    }else{
        pg7Return.textContent = "Enter a valid response";
    }
}