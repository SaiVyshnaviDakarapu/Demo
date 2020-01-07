var Excel=require("exceljs")
var wb= new Excel.Workbook();
wb.xlsx.readFile("D:\\File_Handling_JS\\ExcelFile\\TestData.xlsx").then(()=>{
    var sheet=wb.getWorksheet("Sheet1");
    var rowCount=sheet.actualRowCount
        console.log(rowCount);

        sheet.eachRow((row,rowNumber)=>{
            console.log("Current row: "+rowNumber);
            row.eachCell((cell,cellNumber)=>{
                console.log("cell value: "+cell.value)
            })
        })
   
   
})


async function readExcelFile(){
var filePath=await wb.xlsx.readFile("D:\\File_Handling_JS\\ExcelFile\\TestData.xlsx");
var sheet=wb.getWorksheet("Sheet1");
    var rowCount=sheet.actualRowCount
    console.log("*********************************************************************************************");
        console.log(rowCount);
        var cellCOunt=sheet.actualColumnCount;
        console.log(cellCOunt)
        for(let i=1;i<=rowCount;i++){
            for(let j=1;j<=cellCOunt;j++){
           //console.log( sheet.getRow(i).getCell(j))
           var values=await sheet.getRow(i).getCell(j)
           console.log(values.value)
           //if(sheet.getRow(i).getCell(j).type===Number){}
            }
          // var values=await sheet.getRow(i).getCell(j)
        }
}
readExcelFile();