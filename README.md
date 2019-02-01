# react-excel-renderer
A react library to render and display excel sheets on webpage

---

## Installation

```
npm install react-excel-renderer --save
```

## Usage
* Import the primary module *ExcelRenderer* to convert sheet data into JSON format. 
* Also import *OutTable* to display the obtained JSON into a HTML Table.
```
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
```
* Provide binary object (blob) of the excel file to be rendered, to the *ExcelRenderer* function to obtain JSON data from sheet
```
//let blob be the binary data of the file
ExcelRenderer(blob, (err, resp) => {
  //handle fail case here
  if(err){
    console.log(err);            
  }
  //handle success case here
  else{
    this.setState({
      cols: resp.cols,     //state variable containing columns 
      rows: resp.rows      //state variable containing all rows obtained from sheet  
    });
  }
}); 
```
* Use the OutTable component to render obtained JSON data into HTML table, and provide classnames as props to make table look alike an Excel Sheet
```
<OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
```
* To make this table look more like an excel sheet, follow this article - [Quick CSS Tools to make your web page tables to look just like excel](https://www.cogniview.com/articles-resources/quick-css-tools-for-making-your-web-tables-look-just-like-excel)


**Note:** Once the JSON data is obatined, you can also use other options to render them instead of the OutTable component. For example, [CanvasDataGrid](https://github.com/TonyGermaneri/canvas-datagrid) provides various features to render tabular data.


## Built With
* [SheetJS](https://github.com/SheetJS/js-xlsx) - The web page sheet framework used


## Authors
**Ashish Deshpande** - *Initial work* - [Ashish's Github Profile](https://github.com/ashishd751)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ashishd751/react-excel-renderer/blob/master/LICENSE) file for details

## Acknowledgments
* Special shout out to the guys at **Sheet JS** for developing the parent library
* High gratitude towards Bernard Bado to help me publish my first npm package

