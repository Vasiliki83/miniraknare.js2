// $(document).ready(function () { // initierar jquery när dokument är redo
//     // let value = $(#)

// jquert test för input värde som skall skrivas ut i en paragraf ( Calc)
$(document).on("click", "#add", function () { //onclick function för knapp med id Add
    let num1 = $("#txtNum").val() // en variabel med innehållet från inputfältet (txtNum)
    let numAdd = num1 + "+"; // variabel med innehåll av Num1 och ett + tecken
    $("#calc").text(numAdd); // skriver ut värdet av numAdd i paragrafen med id calc




});