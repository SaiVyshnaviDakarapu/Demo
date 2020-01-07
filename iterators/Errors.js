function f(){


    try{
       // console.log("try block")
        return "xyz";
      //  throw new Error("My custum error")
    }
    catch(err){
        console.log(err.message+"--------------"+err.name+"--------------"+err.stack);
    }
    finally{
        console.log('Finally block');
    }
}
x=f();
console.log(x);