//Generator and Iterator

// Generator is a funciton that can be stop in midway and continue form the stop location if necessary

// function* names(){
//     yield 'Scott';
//     yield 'Jeames';
//     yield 'Jack';
// }
 
// let name = names();
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());

// function* generateId(){
//     let id = 1;
//     while(true){
//         yield id;
//         id++;
//     }
// }

// let gId = generateId();
// console.log(gId.next().value);
// console.log(gId.next().value);
// console.log(gId.next().value);
// console.log(gId.next().value);
// console.log(gId.next().value);
// console.log(gId.next().value);
// console.log(gId.next().value);

let names = ['Scott' , 'Jeams' , 'jack'];

// names.forEach(name => {
//     console.log(name);
// });

function* namesIterator(names){
    for(let i = 0 ; i < names.length; i++){
        yield names[i];
    }
}

let name = namesIterator(names);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);