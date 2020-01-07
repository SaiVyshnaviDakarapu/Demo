var Excel=require("exceljs");

var wb= new Excel.Workbook();

var sheet=wb.addWorksheet("MyNewSheet");

filepath="D:\\File_Handling_JS\\ExcelFile\\TestResults_Two.xlsx"
createNewExcelFile(filepath);

async function createNewExcelFile(filepath){

   await wb.xlsx.writeFile(filepath);
   console.log("Excel sheet created successfully!!!!");
   wrteDataIntoExcelFile(filepath);

}

function wrteDataIntoExcelFile(filepath){

    let data=["vyshnavi","EPAM"]
    //One way
    for(let i=1;i<=10;i++){
        sheet.getRow(i).getCell(1).value="vyshnavi";
    }

    wb.xlsx.writeFile(filepath).then(()=>
        {
            console.log("Entered data to excel");
        })
//Second way
         sheet.addRow(data)
        wb.xlsx.writeFile(filepath).then(()=>
        {
            console.log("Entered data to excel");
        })
        //Thrid way
        sheet.columns=[{header: "ID", key:"ID"}, {header: "Name", key:"Name"}, {header: "Company", key:"Company"}];
        sheet.addRow({ID: 1, Name:"Vyshnavi", Company:"EPAM"});
        wb.xlsx.writeFile(filepath).then(()=>
        {
            console.log("Entered data to excel");
        })
    

}