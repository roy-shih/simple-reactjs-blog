function doGet(e){
  var params = e.parameter;
  var url = params.url;
  var name = params.name;
  var SpreadSheet = SpreadsheetApp.openByUrl(url);
  var SheetName = SpreadSheet.getSheetByName(name);
  var lastColumn = SheetName.getLastColumn();
  var lastRow = SheetName.getLastRow();
  var head = SheetName.getSheetValues(1,1,1,lastColumn);
  var row_data = SheetName.getSheetValues(2,1,lastRow,lastColumn);
  var JsonData=[];
  head[0][0]="createdAt" //把“時間戳記”轉成 "createdAt"
  head[0].push("id"); //新增id欄位
  row_data.forEach((row,id)=>{
    var  data= {};
    var notEmpty=0;
    row.forEach((item,index)=>{
      if(item!="") {  
        notEmpty=1;
        data[head[0][index]] = item;
      }
      if(index==head[0].length-2){
        data[head[0][index+1]] = id;
      }
    })
    if(notEmpty){
      JsonData.push(data);
    }
  })
  Logger.log(JSON.stringify(JsonData))
  return ContentService.createTextOutput(JSON.stringify(JsonData));
}