function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, 'age',{get(){
        let getYr=new Date().getFullYear();
        return getYr-this.birthday.getFullYear();
    }
}
)
}
/* let obj=new User("Vyshnavi",new Date(1994,1,22));
console.log(obj.name)
console.log(obj.birthday)
console.log(obj.age)*/
let details={
    name:'vyshnavi',
    comapny:'epam'
}
/* 
let descriptor=Object.getOwnPropertyDescriptor(details,'name')
//console.log(descriptor)
console.log(JSON.stringify(descriptor,null,2)) */
/*  
let user={}

Object.defineProperty(user,'name', {value:'vyshu'})
let descriptor1=Object.getOwnPropertyDescriptor(user,'name')
console.log(descriptor1)
console.log(JSON.stringify(descriptor1)) */
 

 let prop=Object.getOwnPropertyDescriptors(details)
 console.log(prop);
 console.log('###################################');
 for (let key in details) {
    prop[key] = prop[key]
  }
  console.log(prop);