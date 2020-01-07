var words = ["the", "quick", "brown", "fox"];
var wordLengths = words.map((word)=> word.length);
console.log(wordLengths)

const nums = [1, 2, 3, 4, 5];
const summer = (a, b) => a + b;
const sum = nums.reduce(summer, 0);
console.log(sum)


    var a = b = 42;
  
   
  console.log(typeof a+a);
  console.log(typeof b + b);

  function greeter(greeting) {
    return function (greetee) {
      console.log(greeting + ", " + greetee + "!");
    }
  }

  greeter("Hello")("candidate")

  var str1='this is javascript'
  console.log(str1.split(" ").reverse().join(" "))

  const object1 = { a: 1, b: 2 };

  const obj=Object.assign({},object1)
  console.log(obj)

  const person = {
    name: "Abhishek Soni",
    age: 23,
    place: "Edmonton",
    phone: 0000000000
  };
  
  delete person.phone;
  console.log(person)

  function delay() {
    setTimeout(() => {
      return 10;
    }, 2000);
  }


  function del(){
      return new Promise((resolve,reject)=>{

        setTimeout((resolve)=>{
                resolve(10)
        },2000)
          
      })
  }


  new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
  })
    .finally(() => console.log("Promise ready"))
    .then(result => console.log(result));




      function loadScript1(src) {

       return new Promise((reslove,reject)=>{
        
      
       resolve("script");
       //reject(new Error(`Script load error for ${src}`));
      
        
        })
      }


      let prom=loadScript1("regreg");
      prom.then((result)=>console.log(result)).catch((err)=> {console.log(err)
          
      });