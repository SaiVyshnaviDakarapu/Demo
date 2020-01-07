let prom=new Promise((resolve,reject)=>{

    resolve("success");

})

prom.then((x)=>console.log("first then")).then(()=> {return 3;}).then((x)=>console.log("first then"));