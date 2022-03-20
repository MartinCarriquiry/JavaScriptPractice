function calculateArithmeticMean(list){

   const sumList = list.reduce(
       function(accumulatedValue = 0, nowItem){
           return accumulatedValue + nowItem;
       }
   )
   
   const averageList = sumList / list.length;
   
   return averageList;
   }


const list1 =[
    100,
    500,
    300,
    100000
];

const halfList = parseInt(list1.length / 2);
list1.sort(function(a, b){return a - b});

function isEven(smallNumber){
    if(smallNumber % 2 === 0){ // % = MOD
        return true;
    } else {
        return false;
    }

    let median;

    if (isEven(list1.length)){
        const element1 = list1[halfList - 1];
        const element2 = list1[halfList];

        const averageElement1And2 = calculateArithmeticMean([
            element1,
            element2
        ]);

        median = averageElement1And2;
    }else{
        median = list1[halfList];
    }


}

