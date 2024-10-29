function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); // Mendapatkan sheet aktif
    var data = JSON.parse(e.postData.contents); // Mengambil data yang dikirim oleh formulir
  
    // Menyimpan data ke dalam spreadsheet
    sheet.appendRow([data.Nama, data.Email, data.Phone, data.Message]);
  
    // Mengirimkan respons sukses kembali
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "data": data
    })).setMimeType(ContentService.MimeType.JSON);
  }
  