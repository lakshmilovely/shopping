import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),
};



@Injectable({
  providedIn: 'root'
})
export class PrivilageService {

  constructor( public http:HttpClient) { }
  addpvg(obj:any){
    return this.http.post('https://saapi.azaz.com/api/AdminPrivilages',JSON.stringify(obj),headersData)
  }
  viewpvg(){
    return this.http.get('https://saapi.azaz.com/api/AdminPrivilages')
  }
  getpvg(id:any){
     return this.http.get('https://saapi.azaz.com/api/AdminPrivilages/'+id)
  }
 editpvg(id:any,data:any){
  return this.http.put('https://saapi.azaz.com/api/AdminPrivilages/'+id,data)
 }
delpvg(id:any){
  return this.http.delete('https://saapi.azaz.com/api/AdminPrivilages/'+id)
}

}
