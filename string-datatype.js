let greetings = "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.";
console.log('Text', greetings);

let words = greetings.split(" ");
console.log(words);

let allSmall = "hello";
let mixed = "Hello";
let allCaps = "HELLO";

console.log("All small", "Is it all small", allSmall === allSmall.toLowerCase())
console.log("Mixed", "Is it all small", mixed === mixed.toLowerCase())
console.log("allCaps", "Is it all small", allCaps === allCaps.toLowerCase())


console.log("All small", "Is it all caps", allSmall === allSmall.toUpperCase())
console.log("Mixed", "Is it all caps", mixed === mixed.toUpperCase())
console.log("allCaps", "Is it all caps", allCaps === allCaps.toUpperCase())


console.log("All small", "Is it all mixed", !((allSmall === allSmall.toUpperCase()) || (allSmall === allSmall.toLowerCase())) )
console.log("Mixed", "Is it all mixed", !((mixed === mixed.toUpperCase()) || (mixed === mixed.toLowerCase())) )
console.log("allCaps", "Is it all mixed", !((allCaps === allCaps.toUpperCase()) || (allCaps === allCaps.toLowerCase())) )

//Variable    IsSmall     IsCaps    Result
//              true        false   false
//              false       false   true
//              true        true    Not Possible
//              false       true    false

function isSmall(word){
    return word === word.toLowerCase();
}

function isCaps(word){
    return word === word.toUpperCase();
}

function isMixed(word){
    return !(isSmall(word) || isCaps(word));
}

function test(text1, text2, word, condition){
    console.log(text1, text2, condition(word));
}

test("All Small", "Is it all small", allSmall, isSmall)
test("Mixed", "Is it all small", mixed, isSmall)
test("All Caps", "Is it all small", allCaps, isSmall)


test("All Small", "Is it all mixed", allSmall, isMixed)
test("Mixed", "Is it all mixed", mixed, isMixed)
test("All Caps", "Is it all mixed", allCaps, isMixed)


test("All Small", "Is it all caps", allSmall, isCaps)
test("Mixed", "Is it all caps", mixed, isCaps)
test("All Caps", "Is it all caps", allCaps, isCaps)


var allSmallWords = words.filter(isSmall);
var allMixedWords = words.filter(isMixed);
var allCapsWords = words.filter(isCaps);

console.log('Small Words', allSmallWords)
console.log('Mixed Words', allMixedWords)
console.log('Caps Words', allCapsWords)

function getAllSmallWords(words) {
    let result = [];
    for(let i=0; i<words.length; i++){
        if (isSmall(words[i])){
            result.push(words[i])
        }
    }
    return result;
}

console.log('Small Words', getAllSmallWords(words));

function getAllMixedWords(words) {
    let result = [];
    for(var item in words){
        if (isMixed(words[item])){
            result.push(words[item])
        }
    }    

    return result;
}

console.log('Mixed Words', getAllMixedWords(words))

function getAllCapsWord(words) {
    let result = [];
    for(var item of words){
        if (isCaps(item)) {
            result.push(item)
        }
    }

    return result;
}

console.log('Caps Words', getAllCapsWord(words))


let data = "ajsggjagdasfasdgjad";

console.log('Replace', data, data.replace("a", "z"));
console.log('Replace All', data, data.replaceAll("a", "z"));
console.log('Includes', data, data.includes("azf"));
console.log('Index Of', data, data.indexOf("asf"));
console.log('Padding', data, data.padEnd(25, "*"));
