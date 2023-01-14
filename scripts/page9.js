let pg9Input = document.getElementById("pg9Input");
let pg9Return = document.getElementById("pg9Return");
let pg9SubBtn = document.getElementById("pg9SubBtn");

let pg9savedInput = "";
let pg9Url = "";


pg9SubBtn.addEventListener("click", function() {
    pg9Api(pg9Input)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg9Return.textContent = data
            console.log(data)
        }
    )
}

function pg9Api(pg9Input){
    var letters = /^[A-Za-z]+$/;
    if(pg9Input.value.match(letters) && pg9Input.value != ""){
        pg9savedInput = pg9Input.value;
        pg9Url = "https://allchallenges.azurewebsites.net/AllChallenges/Picker/" + pg9savedInput;
        urlCall(pg9Url);
    }else{
        pg9Return.textContent = "Enter a valid response";
    }
}