let pg2NumInput1 = document.getElementById("pg2NumInput1");
let pg2NumInput2 = document.getElementById("pg2NumInput2");
let pg2Return = document.getElementById("pg2Return");
let pg2SubBtn = document.getElementById("pg2SubBtn");

let pg2SavedInput = "";
let pg2Url = "";


pg2SubBtn.addEventListener("click", function() {
 pg2Api(pg2NumInput1, pg2NumInput2)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg2Return.textContent = data
            console.log(data)
        }
    )
}

function pg2Api(pg2NumInput1, pg2NumInput2){
    var numbers = /^[0-9]*$/;
    if(pg2NumInput1.value.match(numbers) && pg2NumInput2.value.match(numbers) && (pg2NumInput1.value && pg2NumInput2.value != "")){
        pg2SavedInput = pg2NumInput1.value + "/" + pg2NumInput2.value;
        pg2Url = "https://allchallenges.azurewebsites.net/AllChallenges/AddTwoNumbers/" + pg2SavedInput;
        urlCall(pg2Url);
    }else{
        pg2Return.textContent = "Enter a valid response";
    }
}