
//Helpers
function isPair(number){
    return (number % 2 === 0);
 }
 
 function calculateArithmeticMean(list){
 
     const sumList = list.reduce(
         function(accumulatedValue = 0, nowItem){
             return accumulatedValue + nowItem;
         }
     )
     
     const averageList = sumList / list.length;
     
     return averageList;
     }
 
// Calculator of medians

function medianSalary(list){
    const half = parseInt(list.length / 2);
    
        if (isPair(list.length)){
            const halfPerson1 = list[half - 1];
            const halfPerson2 = list[half];
    
            const median = calculateArithmeticMean([halfPerson1, halfPerson2]);
            return median;
    
        }else{
            const halfPerson = list[half];
            return halfPerson;
        }
    
    
    }


// Median General

const salaryArs = argentina.map(
    function(person){
        return person.salary;
    }
);

const salaryArsSorted = salaryArs.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);



const medianGeneralArs = medianSalary(salaryArsSorted);

//Median of top 10%


const spliceStart = (salaryArsSorted.length * 90)/100;
const spliceCount = salaryArsSorted.length - spliceStart;

const salarysArsTop10 = salaryArsSorted.splice(
    spliceStart,
    spliceCount,
);

const medianTop10Ars = medianSalary(salarysArsTop10);

console.log(
   medianGeneralArs,
   medianTop10Ars
);