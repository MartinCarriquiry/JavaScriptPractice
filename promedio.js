function calculateArithmeticMean(list){

 //   let sumList = 0;
//for (let i = 0; i < list.length; i++){
  //  sumList = sumList + list[i];
//}
const sumList = list.reduce(
    function(accumulatedValue = 0, nowItem){
        return accumulatedValue + nowItem;
    }
)//reduce: recibe una function y suma cada uno de nuestros elementos

const averageList = sumList / list.length;

return averageList;
}