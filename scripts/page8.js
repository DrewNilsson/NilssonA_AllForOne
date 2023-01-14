let pg8Input = document.getElementById("pg8Input");
let pg8Return1 = document.getElementById("pg8Return1");
let pg8Return2 = document.getElementById("pg8Return2");
let pg8Return3 = document.getElementById("pg8Return3");
let pg8Return4 = document.getElementById("pg8Return4");
let pg8Return5 = document.getElementById("pg8Return5");
let pg8SubBtn = document.getElementById("pg8SubBtn");

let pg8SavedInput = "";
let pg8Url = "";


pg8SubBtn.addEventListener("click", function () {
  pg8Api(pg8Input);
});

function urlCall(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      pg8Return1.textContent = "First Name: " + data.firstName;
      pg8Return2.textContent = "Last Name: " + data.lastName;
      pg8Return3.textContent = "Slack Name: " + data.slackName;
      pg8Return4.textContent = "Email: " + data.email;
      pg8Return5.textContent = "Hobbies: " + data.hobbies;

      console.log(data);
    });
}

function pg8Api(pg8Input) {
//   var letters = /^[A-Za-z]+$/;
  if (pg8Input.value != "") {
    pg8SavedInput = pg8Input.value;
    pg8Url = "https://allchallenges.azurewebsites.net/AllChallenges/GetStudent/" + pg8SavedInput;
    urlCall(pg8Url);
  } else {
    pg8Return1.textContent = "Enter a valid response";
  }
}

