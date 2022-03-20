const myArray = [5, 5, 8, 1, 22, 15, 12];

const minimumNumber = Math.min.apply(null, myArray);

const maximumNumber = Math.max.apply(null, myArray);


function averageRange(minimumNumber, maximumNumber){
    middleRange = parseInt(minimumNumber + maximumNumber)/ 2;

    return console.log(middleRange);
}

averageRange(minimumNumber, maximumNumber);
