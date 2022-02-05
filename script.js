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
    arrayNum = inputNumber.val(); // en variabel som lagarar värdet ifrån inputfältet


    if (array.length == 1) { // en if sats som säger att OM arrayens längd är == 1 SÅ..
        calculation.append(arrayNum); //då ska värdet läggas till i calculation 

    } else { // else sats som säger att ANNARS så ska även plus tecken läggas till med värdet
        calculation.append("+" + arrayNum);
    }

    inputNumber.val(""); // ställer om/ rensar textfätet
    return false;
});

//funktion för minus knappen

buttonMinus.on("click", function () {
    $("#result").empty(); // här rensar vi resultat som är en paragraf med id = #result
    console.log(inputNumber.val()); // här kontrollerar vi att vi får värdet från inputNumber som är vårt input-fält
    array.push(parseFloat(-inputNumber.val())); // här gör vi en push av värdet från input-fältet till vår array
    console.log(array); // här kontrollerar vi i console att vår array tagit emot värdet
    arrayNum = inputNumber.val(); // en variabel som lagarar värdet ifrån inputfältet



    if (array.length == 1) { // en if sats som säger att OM arrayens längd är == 1 SÅ..
        calculation.append(arrayNum); //då ska värdet läggas till i calculation

    } else { // else sats som säger att ANNARS så ska även minus tecken läggas till med värdet
        calculation.append("-" + arrayNum);
    }

    inputNumber.val(""); //rensar textfältet/inputfältet     
    return false; // ställer om/ rensar textfätet
});

//funktion för likamed knappen

buttonSum.on("click", function () {
    $("#calculation").empty(); // rensar calculaction paragrafen

    var sumOf = array.reduce(function (a, b) { // variabel som sparar värderna i en funktion som...
        return a + b; // räknar ut summan av arrayens värden

    }, 0);
    result.append(" " + sumOf); // här läggs summan till under paragrafen result 
    array = []; //rensar arrayen

    return false; /// ställer om/ rensar calculation
});


// funktion för att begänsar vad som skall skrivas in i inputfältet. 
$(document).ready(function () {

    $("#inputNumber").keypress(function (e) { //funktion som känner av ett event när knappar trycks av användaren
        var keyCode = e.which; //variabel som känner av specifika knapptryck(e.which)

        if (!((keyCode >= 48 && keyCode <= 57 || keyCode == 46))) { //if-sats som begränsar att endast vissa knappar kan tryckas in i inputfältet
            e.preventDefault(); // metod som stoppar en handling från att hända, som i detta fall är ogiltiga tecken i inputfältet
            alert("🤌🏽 Bara siffror och punkt är tillåtet...Capisce 🤌🏽 ") //alert meddelande som kommer upp när ogitiga tecken skrivs i inputfältet
        }

    });
});