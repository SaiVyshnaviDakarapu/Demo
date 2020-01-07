var jsonreader=require("fs");   // two fucntions available in fs module--- 1. readFile 2. readFileSynch
filepath="D:\\File_Handling_JS\\JsonFile\\ReadJson.json";
let fileData=jsonreader.readFileSync(filepath);

let data=JSON.parse(fileData);
console.log("JSON Data"+data);
let animal=data["cat"];
console.log("Animal: "+animal)
let numberOflegs=data["cat"]["legs"];
console.log("legs: "+numberOflegs)

