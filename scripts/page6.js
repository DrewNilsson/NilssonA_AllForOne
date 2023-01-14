let pg6Input = document.getElementById("pg6Input");
let pg6Return = document.getElementById("pg6Return");
let pg6SubBtn = document.getElementById("pg6SubBtn");

let pg6savedInput = "";
let pg6Url = "";


pg6SubBtn.addEventListener("click", function() {
    pg6Api(pg6Input)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg6Return.textContent = data
            console.log(data)
        }
    )
}

function pg6Api(pg6Input){
    var numbers = /^[0-9]*$/;
    if(pg6Input.value.match(numbers) && pg6Input.value != ""){
        pg6savedInput = pg6Input.value;
        pg6Url = "https://allchallenges.azurewebsites.net/AllChallenges/OddOrEven/" + pg6savedInput;
        urlCall(pg6Url);
    }else{
        pg6Return.textContent = "Enter a valid response";
    }
}