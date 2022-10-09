// String Data Type

var greetings = "Hello 'World'";
console.log(greetings);

var greetingsWithSingleQuotes = 'Hello "World"';
console.log(greetingsWithSingleQuotes);

var greetingsWithDoubleQuotes = "Hello \"World\"";
console.log(greetingsWithDoubleQuotes);

var greetingsWithLineFeed = "Hello \n World";
console.log(greetingsWithLineFeed);

var greetingsWithUnicodeCharater = "Hello \u3020 World";
console.log(greetingsWithUnicodeCharater)

var greetingsWithTemplateString = `Hello 
World
I 
am 
Safe`
console.log(greetingsWithTemplateString);

var firstName = "Kunal";
var lastName = "Nimbalkar";
var greetingsWithTemplateStringAndParameters = `Hello ${firstName} ${lastName}`;
console.log(greetingsWithTemplateStringAndParameters);

// Number

var number = 123;
console.log(number);

var floatNumber = 123.345;
console.log(floatNumber)

var hexadecimalNumber = 0xFF23;
console.log(hexadecimalNumber);

var binaryNumber = 0b1010;
console.log(binaryNumber)

var octalNumber = 0o124563;
console.log(octalNumber);

var badOctalNumber = 0123;
console.log(badOctalNumber);

var stringToNumber = Number.parseInt("0123");
console.log(stringToNumber);

// Boolean 

var flag = true;
console.log(flag);

var numberToBoolean = !!(99);
console.log(numberToBoolean)

var numberToBooleanFalse = !!(0);
console.log(numberToBooleanFalse)

var numberToBooleanNegative = !!(-100);
console.log(numberToBooleanNegative)

var stringToBoolean = !!("bajfhjsbfjhsb");
console.log(stringToBoolean)

var emptyStringToBoolean = !!("");
console.log(emptyStringToBoolean)

var emptySpaceStringToBoolean = !!(" ");
console.log(emptySpaceStringToBoolean)

// DateTime

var now = new Date();
console.log(now);