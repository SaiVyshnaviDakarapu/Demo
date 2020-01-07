/* let arr=[1,2,3,4,1,2,5,3,4,5]
let x=arr.sort();
let y=[];
for(let i=0;i<x.length;i++){
    if(x[i+1]==x[i])
    y.push(x[i]);
}
//let z=[];
console.log(arr+"--------------------"+y)
let z=(arr.filter((element,index)=>{
     element!=arr[index] 
     console.log(element)
     index++
     //z.push(element)
}))
console.log(arr+"--------------------"+y)


 */
function removeDuplicate(arr) {        
   // var c;        
    var len = arr.length;        
    var result = [];        
    var obj = {};                
    for (let c = 0; c<len; c++)  {            
       obj[arr[c]] = 0;        
    }  
    for (c in obj) {            
       result.push(c);        
    }            
    return result;      
 }              
 var myArr = [10, 20, 20,30, 40, 10, 40, 70, 80, 70, 90];
 let x=removeDuplicate(myArr)
 console.table(x)





 