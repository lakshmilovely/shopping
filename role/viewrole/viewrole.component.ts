import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import {MatDialog} from '@angular/material/dialog';
import  {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {
list:any;
searchtext:any
  constructor(public login:LoginService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.roleslist();
   }
  roleslist(){
  this.login.viewrole().subscribe((res:any)=>{
    console.log(res);
    this.list= res
  })
}

delete(id:any){
  console.log (id);
  alert('deleted successfully');
this.login.delete(id).subscribe((res:any)=>{
 this.roleslist();
 
})
}

exportAsXLSX(){
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById("content"));
 const wb: XLSX.WorkBook = XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
XLSX.writeFile(wb, 'viewrole.xlsx');
}


generatePDF() {
  var data = document.getElementById('content');
  html2canvas(data).then(canvas => {
    var imgWidth = 208;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p', 'mm', 'a4');
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('newPDF.pdf');
  });
}
exportHTML(element){

  var sourceHTML = document.getElementById("element").innerHTML;
    
      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'document.docx';
      fileDownload.click();
      document.body.removeChild(fileDownload);

}
}