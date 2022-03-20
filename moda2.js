const list2 = [2,2,2,2,2,2,4,4,4,5,5,5,5,5,6,7,8,9];

function mode(array){
    return array.sort((a,b) =>
        array.filter(v => v===a).length - array.filter(v => v==b).length).pop();

    
}
console.log(mode(list2));