//number 12336545
//string "dsfadfasdfsa"
//boolean true false

//Symbol 

// let foo = Symbol('s1');
// let bar = Symbol('s2');

// let key = Symbol();
// let myObj ={};

// myObj.name ="jack";
// myObj[key] =123;

// for(let i in myObj){
//     console.log(i);
// }

// console.log(JSON.stringify(myObj));

let key = Symbol();
class User{
    constructor(){
        this.name = "jack";
        this.lastname = 'jackson';
        this[key] = '123';
    }
}

let user = new User();
console.log(JSON.stringify(user));


