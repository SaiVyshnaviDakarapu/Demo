var property=require("properties-reader");
var readFile=property("D:\\File_Handling_JS\\PropertyFIle\\testdata.properties");
let x=readFile.read("name")
console.log(readFile.get('company'));
console.log(readFile.getAllProperties())
readFile.set("desig","QA");
console.log(readFile.getAllProperties())


