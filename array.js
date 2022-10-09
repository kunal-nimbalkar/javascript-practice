let arr = [1,2,3,4,5,6,7,8]


console.log(arr);

arr.push('one');
arr.push({f: 'Kunal', l: 'Numbalkar'});
let result = arr.pop();
console.log(arr, result, arr.length, arr[3], arr.includes(4))

arr = [1,2,3,4,5,6,7,8]

function isOdd(n){
    return n%2 !== 0;
}

let oddNumbers = arr.filter(isOdd);
console.log(oddNumbers)
let firstNumber = arr.find(isOdd)
console.log(firstNumber)
let findFirstIndex = arr.findIndex(isOdd);
console.log(findFirstIndex)

function square(n) {
    return n*n;
}

console.log(arr.map(square));

function sum(a,b) {
    return a + b;
}

console.log(arr.reduce(sum));

