const object = {
    name: "Kirill",
    age: 14,
    gender: "man",
    married: false

}
let str = "";
for(obj in object) {
console.log(`Ключ - ${obj}, Значение - ${object[obj]}`)
str += object[obj];

}
console.log(`Все значения - ${str}`)