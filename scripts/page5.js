let pg5InputArray = new Array(
    document.getElementById("pg5Input1"),
    document.getElementById("pg5Input2"),
    document.getElementById("pg5Input3"),
    document.getElementById("pg5Input4"),
    document.getElementById("pg5Input5"),
    document.getElementById("pg5Input6"),
    document.getElementById("pg5Input7"),
    document.getElementById("pg5Input8"),
    document.getElementById("pg5Input9"),
    document.getElementById("pg5Input10")
)

let pg5Return = document.getElementById("pg5Return");
let pg5SubBtn = document.getElementById("pg5SubBtn");

let pg5SavedInput = "";
let pg5Url = "";
let isValid = true;

pg5SubBtn.addEventListener("click", function () {
  pg5Api(
    pg5InputArray
  );
});

function urlCall(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      pg5Return.textContent = data;
      console.log(data);
    });
}

function pg5Api(pg5InputArray) {
  var letters = /^[A-Za-z]+$/;

  for (let i = 0; i < pg5InputArray.length; i++) {
    if (pg5InputArray[i].value.match(letters) && pg5InputArray.value != "") {
      pg5SavedInput = pg5SavedInput + "/" + pg5InputArray[i].value;
      isValid = true;
    } else {
      pg5Return.textContent = "Enter a valid response";
      isValid = false;
      break;
    }
  }
  
  if (isValid) {
    pg5Url =
      "https://allchallenges.azurewebsites.net/AllChallenges/MadLib/" +
      pg5SavedInput;
    urlCall(pg5Url);
  }
  pg5SavedInput = "";

}
