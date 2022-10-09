var maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log('Max Safe Integer', maxSafeInteger);
console.log('Min Safe Integer', Number.MIN_SAFE_INTEGER);
console.log('Max Number', Number.MAX_VALUE);
console.log('Min Number', Number.MIN_VALUE);

for(let i=0; i<=25; i++){
    console.log(maxSafeInteger, "+", i, "=", maxSafeInteger + i);
}

console.log('Add', 5,10, 5+10);
console.log('Sub', 5,10, 5-10);
console.log('Mul', 5,10, 5*10);
console.log('Div', 5,9, 9/5, Math.floor(9/5));
console.log('Mod', 5,9, 9%5);
console.log('Exp', 5,9, 9**5);
