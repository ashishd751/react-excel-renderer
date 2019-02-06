# react-excel-renderer ![](https://img.shields.io/npm/l/react-excel-renderer.svg?style=flat) ![](https://img.shields.io/npm/v/react-excel-renderer.svg?style=flat) ![](https://img.shields.io/npm/dt/react-excel-renderer.svg?style=flat)
A react library to render and display excel sheets on webpage

---

## Demo
* A sample demo can be found - [here](https://ashishd751.github.io/excel-renderer-demo/)
* You can find code for the demo - [here](https://github.com/ashishd751/excel-renderer-demo)

![](https://github.com/ashishd751/excel-renderer-demo/blob/master/public/DemoSample.gif)

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
* Place a simple `input` element in the render function of your class and pass an `onChange` handler
```
<input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
```
* In the `onChange` handler, invoke the `ExcelRenderer` function and provide file object from the event handler to the `ExcelRenderer` function to obtain JSON data from sheet
```
  fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });               

  }
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

