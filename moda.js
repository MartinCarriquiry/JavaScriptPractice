const list1 = [1,2,3,1,1,2,4,1,2,2,5,1,];

const list1Count = {};

list1.map(
    function (element){
        if(list1Count[element]){
            list1Count[element] =+ 1;
        } else {
            list1Count[element] = 1;
        }
        
    }
);//map nos ayudara a recorrer nuestro array

const list1Array = Object.entries(list1Count).sort(
    function (accumulatedValue, nowValue){
        return accumulatedValue[1] - nowValue[1];
    }
);

const moda = list1Array[list1Array.length - 1];



