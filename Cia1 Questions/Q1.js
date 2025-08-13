function Square(num){
    return num*num;
}

function processData(arr, callback){
    const result = [];
    for(let i=0; i<arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processData(numbers, Square);

console.log(squaredNumbers);