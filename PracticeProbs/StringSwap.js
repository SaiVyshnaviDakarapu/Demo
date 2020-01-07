let s="vysh"
let y="sai"
s=s+y
console.log(s)
y=s.substring(0,s.length-y.length)
s=s.substring(y.length)
console.log(s)
console.log(y)