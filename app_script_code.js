var sheets = SpreadsheetApp.getActiveSpreadsheet();

const MyData = sheets.getSheetByName('FormData');

function doPost(e) {

  const data = e.parameter;

  MyData.appendRow([data.name, data.number, data.email]);

  console.log(sheets);

  return ContentService.createTextOutput('successfully...');
}