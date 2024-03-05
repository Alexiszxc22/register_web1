// string -"alexis", 'alexis' , "21"
// number - 21, 21.1, 123e
// boolean - true, false, 1 or 0, -1 = false, >0
//object  - ["apple", "banana", "grape"]
            //[1,2,3,4]
            //[1,"apple", true]
            //[
            //   [1,2,3,4]
            //   ["apple", "banana", "grape"]
            //   ]
// undefined = null            

console.log("Hello World", 123, true, ["apple"]);
console.error("Hello");
console.warn("Hello");
// console.table();

let name = true;
console.log(typeof(name));

let txtUsername = document.querySelector("#txtUsername");
let btnRegister = document.querySelector("#btnRegister");

btnRegister.onclick = function (){
    register(txtUsername.value)
}

function register (username) {
    console.log(username)
}