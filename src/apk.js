/*var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}*/

function hai() {
    
}

export const hai = () => {
    
}

<button onClick={() => {
    console.log("Hello World")
}}>

</button>

//let age = 16
/*let name = "Pedro"*/
if (age>10) {
    name ="perdro"
}else {
    name ="Jack"
}

/*let name = age >10 && "Pedro"
let name = age >10 || "Pedro"*/

//let name = age >10 ? "Pedro" : "Jack"

const Component = () => {
    return age>10 ? <div>Pedro</div> : <div>Jack</div>
}//Ternanry operators


/*const name ="pedro";
const age = 20;
const person = {
    //name: "Pedro",
    name,
    //age: 20,
    age,
    isMarried: false
}*/

const person = {
    name: "Pedro",
    age: 20,
    isMarried: false
}

const person2 = {...person, name: "Jack"} //Here the name of the person 2 is only diffrent from that of person one 
//works same with arrays

/*const names = ["pedro","jack","Jessica"]
const names2 = [...names, "Joel"]*/

const namme = person.name 
const age2 = person.age

//Destructuring property
 //const {Name : name , age2: age} = person;
console.log(Name);

//manupulating fcn .map(),.filter()


/* ======MAP FUNCTION=======

let names = ["Pedro","Jessica","Carol"]

/*names.map((name) => {
    console.log(name);
})//gives output as Pedro\nJessica\nCarol
*/ 

/*names.map((name) => {
    return name + "1";
})//when executed the array becomes let names = ["Pedro1","Jessica1","Carol1"]

names.map((name) => {
    return <h1> {name} </h1>
})
*/


// =======FILTER FUNSCTION=======
let names = ["Pedro","Pedro","Jesicca","Carol"]
names.filter((name) => {
    return name !== "Pedro";
})//will modify the array which removes the name Pedro From it.

Async + Await + Fetch 
/*async function getData(){
    try{
        const response = await fetch("https://api.github.com/users");
*/