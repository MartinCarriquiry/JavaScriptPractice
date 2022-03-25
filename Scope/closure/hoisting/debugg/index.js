var a = 'Hello';

function hello(){
    let b = 'Hello World';
    const c = 'Hello Worold!';
    if (true){
        let d = 'Hello World!!';

    }
}
hello();


const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log('moneybox $' + saveCoins);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);