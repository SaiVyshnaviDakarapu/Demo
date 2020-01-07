let m=new Map();
m.set('x',10)
console.log(m)
m.set('y',20)
console.log(m)
m.set(10,20)
console.log(m)
console.log(m.size)
console.log(m.get(10))
console.log(m.delete(10))
console.log(m)
console.log(m.has('e'))
console.log(m.clear())
console.log(m)


//Plain pbject to Map
let obj={
    name:'vyshnavi',
    10:3000,
    surname:'dakarapu'
}

let y=new Map(Object.entries(obj))
console.log(y.get('name'))

let arr=[['a','1'],['b','2']]

//map chaining
let map = new Map();
map.set('banana', 1).set('orange', 2).set('meat', 4);

//iteratirs
for(let key of map.keys())
console.log("------------------>"+`${key}`)
for(let value of map.values())
console.log("------------------>"+`${value}`)
for(let [key,value] of map)
console.log("------------------>"+`${key}`+"------"+`${value}`)

map.forEach((value, key, map)=>{
console.log("   @@@@@@ "+`${key}`+" @@@@ "+`${value}`)
})

let john = { name: "ysh" };

let maps = new Map();
maps.set(john, "...");

john = null; 
for(let key of maps.keys())
console.log("------------------>"+`${key}`+'========'+key.name)
for(let value of maps.values())
console.log("------------------>"+`${value}`)

let john1 = { name: "ysh" };
let weakMap = new WeakMap();
weakMap.set(john1, "...");
let visitedSet = new WeakSet();

let johny = { name: "Johny" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(johny); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(johny); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(johny)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

johny = null;
console.log(visitedSet.has(johny))
//console.log(johny.name)