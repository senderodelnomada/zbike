function doGet(e) {
  if(!e.parameter.k)
    return ContentService.createTextOutput("");
  var k = e.parameter.k;
  var keys = SpreadsheetApp.getActive().getRange("Config!A3:A").getValues();
  var urls = SpreadsheetApp.getActive().getRange("Config!C3:C").getValues();

  for(var i=0;i<keys.length;i++){
    if(keys[i][0]==k){
      var url = urls[i][0];
      console.log(url);
      SpreadsheetApp.getActive().getSheetByName("Hits").appendRow([k,url,new Date()]);
      return ContentService.createTextOutput(url); 
    }
  }

  return ContentService.createTextOutput("");
}
