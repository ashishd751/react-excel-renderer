"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExcelRenderer;
var XLSX = require("xlsx");

function ExcelRenderer(file, callback) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    var rABS = !!reader.readAsBinaryString;
    reader.onload = function(e) {
      /* Parse data */
      var bstr = e.target.result;
      var wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });

      /* Get first worksheet */
      var wsname = wb.SheetNames[0];
      var ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      var json = XLSX.utils.sheet_to_json(ws, { header: 1 });
      var cols = make_cols(ws["!ref"]);

      var data = { rows: json, cols: cols };

      resolve(data);
      return callback(null, data);
    };
    if (file && rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  });
}

function make_cols(refstr) {
  var o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 1; i <= C; ++i) {
    o[i] = { name: XLSX.utils.encode_col(i), key: i };
  }  
  return o;
}
