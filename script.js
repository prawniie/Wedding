//window.alert('Välkommen till vår bröllopssida!');


let tidKvarKnapp = document.getElementById("tidKvarKnapp");
let displayTimeLeft = true;
tidKvarKnapp.addEventListener("click", changeHeaderText);

function changeHeaderText() {
    displayTimeLeft = !displayTimeLeft;
    if(displayTimeLeft)
    {
        document.getElementById("tidKvar").style.display = "block";
    }
    else
    {
        document.getElementById("tidKvar").style.display = "none";
    }

}
changeHeaderText();
//annat sätt:
// let tidKvar = document.getElementById("tidKvar");
// tidKvar.innerText = "Ännu mindre än fyra månader kvar!";

//innerText tolkar bokstavligt till skillnad från innerHTML

//changeHeaderText(); kan också kalla på en funktion bara

//console.log för att skriva ut saker 

function printSomething() {
    alert('Hej');
}

function printOutInConsole() {
    console.log('Hej i consolen');
}

function changeHeaderColor() {
    document.getElementById("minRubrik").style.color = "red";
    document.getElementById("minRubrik").style.fontSize = "100px";

}

let knapp2 = document.getElementById("knapp02");
knapp2.addEventListener("click", printSomething);

let knapp4 = document.getElementById("knapp04");
knapp4.addEventListener("click", printOutInConsole);

let knapp5 = document.getElementById("knapp05");
knapp5.addEventListener("click", () => {
    console.log('Femte knappen nu..');
});

let knapp06b = document.getElementById("knapp06b");
knapp06b.addEventListener("click", changeHeaderColor);











//istället för click kan man köra andra kommandon typ tex mouseover, mouseleave

// //Olika sätt att göra funktioner:
// function testy() {
//     alert('xx')
// }
// testy();

// let testy2 = () => alert('xxxxx');
// testy2(); //Går att testa i browsern också


