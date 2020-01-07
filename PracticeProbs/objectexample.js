/* let obj={}

let arr=[1,2,3,3,4,5,6,7,3,1,2,4,6,6,4,2,4,5,5,7,5,4,3]

for(let y=0;y<arr.length;y++){
    obj[arr[y]]=0;
}
//obj[arr[0]]=0;
let res=[]
console.log(obj)
for(let x in obj){
    console.log(x)
    res.push(x);
} */

let arr=["vyshu","srija","sowji"];
let res=arr.values();
for(let val of res)
console.log(val)

console.log(arr.splice(1,2,"rama","prasad"))
