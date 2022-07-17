function report(){
    Event.preventDefault();

    let data = [] ;

        data [0]["shed_A"] = parseInt(document.getElementById("shed_A").value);
        data [1]["shed_B"] = parseInt(document.getElementById("shed_B").value);
        data [2]["shed_C"] = parseInt(document.getElementById("shed_C").value);
        data [3]["shed_D"] = parseInt(document.getElementById("shed_D").value);

    let sumData = data.shed_A + data.shed_A + data.shed_C + data.shed_D; 
    
    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<p>Your production in shed A is " + data.shed_A + " litres/day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed B is " + data.shed_B + " litres/day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed C is " + data.shed_C + " litres/day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed D is " + data.shed_D + " litres/day</p>";

    document.getElementById("outputData").innerHTML += "<p>Your total production per day is " + sumData + " litres/day</p>";


    dailyIncome = sumData * 45;

    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<p>Total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("outputData").innerHTML += "<p>Total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<Br>"


    incomeJan = dailyIncome * 31;
    incomeFeb= dailyIncome * 29;
    incomeMar = dailyIncome * 31;
    incomeApr = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJun = dailyIncome * 30;
    incomeJul = dailyIncome * 31;
    incomeAug = dailyIncome * 31;
    incomeSept = dailyIncome * 30;
    incomeOct= dailyIncome * 31;
    incomeNov = dailyIncome * 30;
    incomeDec = dailyIncome * 31;

    document.getElementById("outputData").innerHTML += "<p> Your total income for January is Ksh. " + incomeJanuary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for February is Ksh. " + incomeFebruary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for April is Ksh. " + incomeApril + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for June is Ksh. " + incomeJune + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for December is Ksh. " + incomeDecember + " </p>"

    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<hr>"

    incomeInLeapYear = dailyIncome * 366;

    document.getElementById("outputData").innerHTML += "<p>Your total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<Br>"

}