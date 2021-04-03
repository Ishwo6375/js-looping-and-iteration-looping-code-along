// Code your solutions in this file
function writeCards(namesArray, eventName) {
    let newArray = [];
    let thankYouMessage;
    for (let i = 0; i < namesArray.length; i++) {
        thankYouMessage = (`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);

        newArray.push(thankYouMessage);
    }
    return newArray;
}



function countDown(number) {
    while (number >=0) {
        console.log(number);
        number--;
    }
}