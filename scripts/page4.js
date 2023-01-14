let pg4Input1 = document.getElementById("pg4Input1");
let pg4Input2 = document.getElementById("pg4Input2");
let pg4Return = document.getElementById("pg4Return");
let pg4SubBtn = document.getElementById("pg4SubBtn");

let pg4SavedInput = "";
let pg4Url = "";


pg4SubBtn.addEventListener("click", function() {
 pg4Api(pg4Input1, pg4Input2)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg4Return.textContent = data
            console.log(data)
        }
    )
}

function pg4Api(pg4Input1, pg4Input2){
    var numbers = /^[0-9]*$/;
    if(pg4Input1.value.match(numbers) && pg4Input2.value.match(numbers)){
        pg4SavedInput = pg4Input1.value + "/" + pg4Input2.value;
        pg4Url = "https://allchallenges.azurewebsites.net/AllChallenges/GreaterOrLessThan/" + pg4SavedInput;
        urlCall(pg4Url);
    }else{
        pg4Return.textContent = "Enter a valid response";
    }
}