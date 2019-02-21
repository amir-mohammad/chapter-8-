// let a,b;
// [a,b] = [100,200];
// console.log(a,b);
//rest pattern

// let [a,b,c,...rest] = [100,200,300,100,500,600,700];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// const {b,a} = {a:100 , b:200};

// console.log(a);
// console.log(b);
//Array Destructuring

// let People = ['jack','jeams','steve'];
// let [person1,person2,person3] = People;
// console.log(person1);
// console.log(person2);
// console.log(person3);
//Parse array return form function
// function getPerson(){
//     return ['jack','jeams','steve'];
// }

// const [person1,person2,person3] = getPerson();
//  console.log(person1);
// console.log(person2);
// console.log(person3);


//Object Destructuring

let Person = {
    name:'jack',
    lastname:'Jackson',
    age:'34',
    gender:'male'
}


const {name,lastname,age,gender} = Person;
console.log(name);
console.log(lastname);
console.log(age);
console.log(gender);





