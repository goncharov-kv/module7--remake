const langruage = {
    PL: "Java Script"
}
const object = {
    name: "Kirill",
    age: 14,
    gender: "man",
    married: false,
    ...langruage
    

}

delete object.gender;
console.log(object)