import React, { Component } from 'react';
import XLSX from 'xlsx';

export class OutTable extends Component {

	constructor(props) { 
        super(props);
        this.state = {
            
        }
    }

	render() { 
        return (
            <div>
                <table className={this.props.tableClassName}  >                                       
                    <tbody>
                        <tr>
                            {
                                this.props.columns.map((c) => 
                                    <th key={c.key} className={c.key === -1 ? this.props.tableHeaderRowClass : ""}>{c.key === -1 ? "" : c.name}</th>
                                )
                            
                            }
                        </tr>
                        {this.props.data.map((r,i) => <tr key={i}><td key={i} className={this.props.tableHeaderRowClass}>{i}</td>
                            {this.props.columns.map(c => <td key={c.key}>{ r[c.key] }</td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        ); 
    }
}

export function ExcelRenderer(file, callback) {
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
    for (var i = 0; i < C; ++i) {
      o[i] = { name: XLSX.utils.encode_col(i), key: i };
    }  
    return o;
  }