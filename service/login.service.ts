import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FileSaver} from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 public baseURL='https://saapi.azaz.com/api';
 public list:any[]=[];

   constructor(private http:HttpClient) {}

   login(obj1:any){
    return this.http.post('https://saapi.azaz.com/api/AdminLogins/login',JSON.stringify(obj1),headersData)
   }
   getloginbyid(obj:any){
    return this.http.get ('https://saapi.azaz.com/api/AdminLogins/',obj)
   }                                
   
   
   // roles


   getrole(obj:any){
    return this.http.post('https://saapi.azaz.com/api/AdminRoles',JSON.stringify(obj),headersData);
   }
   viewrole(){
    return this.http.get('https://saapi.azaz.com/api/AdminRoles')
  }
   getrolebyid(id:any){
    return this.http.get( 'https://saapi.azaz.com/api/AdminRoles/'+id)
   }
  edit(id:any,data:any){
    return this.http.put( 'https://saapi.azaz.com/api/AdminRoles/'+id,data)
   }
  delete(id:any){
    return this.http.delete('https://saapi.azaz.com/api/AdminRoles/'+id)
   }


   

}
