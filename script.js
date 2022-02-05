// jquert test för input värde som skall skrivas ut i en paragraf ( Calc)
//$(document).on("click", "#add", function () { //onclick function för knapp med id Add
//  let num1 = $("#inputNum").val() // en variabel med innehållet från inputfältet (txtNum)
// let numAdd = num1; // variabel med innehåll av Num1 och ett + tecken
//$("#calculation").text(numAdd); // skriver ut värdet av numAdd i paragrafen med id calc

//});




var buttonAdd = $("#add"); // variable för plus knappen som heter buttonAdd
var buttonMinus = $("#minus"); //variable för minus knappen som heter buttonMinus
var buttonSum = $("#sum"); //variable för likamed knappen som heter buttonSum
var inputNumber = $("#inputNumber"); //variabel för textfältet där man skriver in siffrorna
var calculation = $("#calculation"); //variabel av siffrorna som skrivs ut ifrån textfältet i en paragraf med id "calculation"
var result = $("#result"); //variable för uträkning av siffrorna ifrån calculation fältet (sker när man trycker på likamed knappen)
var inputVal = inputNumber.val(); //variabel för att hämta värdet ifrån textfältet som skall in i min array och sparas
var array = []; //arrayen som är tom där man skall psuha in värden(siffror)

//funktion för plus knappen

buttonAdd.on("click", function () {
    $("#result").empty(); // här rensar vi resultat som är en paragraf med id = #result
    console.log(inputNumber.val()); // här kontrollerar vi att vi får värdet från inputNumber som är vårt input-fält
    array.push(parseFloat(inputNumber.val())); // här gör vi en push av värdet från input-fältet till vår array
    console.log(array); // här kontrollerar vi i console att vår array tagit emot värdet
    arrayNum = inputNumber.val();


    if (array.length == 1) {
        calculation.append(arrayNum);

    } else {
        calculation.append("+" + arrayNum);
    }

    inputNumber.val("");
    return false;
});

//funktion för minus knappen

buttonMinus.on("click", function () {
    $("#result").empty(); // här rensar vi resultat som är en paragraf med id = #result
    console.log(inputNumber.val()); // här kontrollerar vi att vi får värdet från inputNumber som är vårt input-fält
    array.push(parseFloat(-inputNumber.val())); // här gör vi en push av värdet från input-fältet till vår array
    console.log(array); // här kontrollerar vi i console att vår array tagit emot värdet
    arrayNum = inputNumber.val();


    if (array.length == 1) {
        calculation.append(arrayNum);

    } else {
        calculation.append("-" + arrayNum);
    }

    inputNumber.val("");
    return false;
});

//funktion för likamed knappen

buttonSum.on("click", function () {
    $("#calculation").empty();

    // var sumOf = array.reduce((a, b) => a + b);

    var sumOf = array.reduce(function (a, b) {
        return a + b;

    }, 0);
    result.append(" " + sumOf);
    array = [];

    return false;
});

$(document).ready(function () {

    $("#inputNumber").keypress(function (e) {
        var keyCode = e.which;

        if (!((keyCode >= 48 && keyCode <= 57 || keyCode == 46))) {
            e.preventDefault();
            alert("🤌🏽 Bara siffror och punkt är tillåtet...Capisce 🤌🏽 ")
        }

    });
});