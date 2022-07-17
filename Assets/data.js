export const shedA = [
    { '1/1/2022': 100 },
    { '2/1/2022': 200 },
    { '3/1/2022': 200 },
    { '4/1/2022': 200 },
    { '5/1/2022': 200 }
]

export const shedB = [
    { '1/1/2022': 230 },
    { '2/1/2022': 150 }
]

export const shedC = [
    { '1/1/2022': 230 },
    { '2/1/2022': 180 }
]

// arr is an array of intergers
function sum(arr) {
    let sum = 0;
    for(let i; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

function average(arr) {
    return sum(arr) / arr.length;
}

function totalProduction() {
    const averageShedA = average(Object.values(shedA));

    console.log(`Your production in Shed A ${averageShedA} litres per day `)
}