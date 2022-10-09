let obj = {firstname: 'Kunal', lastname: 'Nimbalkar', age: 20};
console.log('FirstName', obj.firstname, obj['firstname']);
console.log('Object', obj, JSON.stringify(obj));

obj.address = { city: "Karad" };

console.log('Object', obj, JSON.stringify(obj));

delete obj.age;

console.log('Object', obj, JSON.stringify(obj));

for(let prop in obj) {
    console.log(prop, obj[prop]);
}

console.log('Properties', Object.keys(obj), Object.values(obj), Object.entries(obj))

Object.prototype.secret = "ahakjsdhkhsdk";

console.log('Object', obj, JSON.stringify(obj));
console.log('Secret', obj.secret);

for(let prop in obj) {
    console.log(prop, obj[prop], obj.hasOwnProperty(prop));
}

console.log('Properties', Object.keys(obj), Object.values(obj), Object.entries(obj))

let childObj = Object.create(obj);

console.log('Child Object', JSON.stringify(childObj), childObj.firstname, childObj.lastname, childObj.address, childObj.secret)
obj.age = 45;

let {firstname, lastname : LastName, ...restProperties} = obj;

console.log(firstname, LastName, restProperties)

console.log({firstname, lastname: LastName, ...restProperties})