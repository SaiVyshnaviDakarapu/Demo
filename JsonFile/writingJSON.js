var CreateJSON=require("fs");
filepath="D:\\File_Handling_JS\\JsonFile\\writingJSON.json"
let JsonData={
        ID:"541795", Name:"Vyshnavi Dakarapu"
}
let data=JSON.stringify(JsonData);
CreateJSON.writeFileSync(filepath, data);

