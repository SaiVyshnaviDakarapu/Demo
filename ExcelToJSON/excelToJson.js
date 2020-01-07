var exclTojson=require('convert-excel-to-json');

'use strict';
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: 'D:\\File_Handling_JS\\ExcelFile\\TestData.xlsx'
});

console.log(result)
    