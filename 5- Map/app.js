// map is an object that can hold key value pairs data and you can assign any type for key and value


let [key1,key2,key3] =  ['string value' , {} , function(){}];

//create map object

 let map1 = new Map();
//set key to the map
map1.set(key1 , 'value of key 1');
map1.set(key2 , 'value of key 2');
map1.set(key3 , 'value of key 3');

//get value of map

// console.log(map1.get(key1));

// console.log(map1.get(key2));

// console.log(map1.get(key3));

//size of map

//console.log(map1.size);
//Iterating Map



//Loop using for  ... of get keys and values
// for(let [key , value] of map1){
//     console.log(key + ' : ' + value);
// }

//Iterate of key only
// for (let key of map1.keys()){
//     console.log(key);
// }

//Iterate of values only
// for(let value of map1.values()){
//     console.log(value);
// }


//loop with foreach

// map1.forEach((value, key)=>{
//     console.log(key + ' : ' + value);
// });

//Convert to Array
// let keyvalArray = Array.from(map1);
// console.log(keyvalArray);

//crate an array of the value

// let keyArray = Array.from(map1.keys());
// console.log(keyArray);

//create an array of the key
// let valArray = Array.from(map1.values());
// console.log(valArray);