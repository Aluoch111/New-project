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



}