import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ItemdetailService {
 url:string='https://saapi.azaz.com/api/ItemPrivilages'
  constructor(public http:HttpClient) { }
  additem(obj:any){
    return this.http.post(this.url,JSON.stringify(obj),headersData)
  }
  viewitem(){
    return this. http.get(this.url)
  }
  getitem(id:any){
    return this.http.get('https://saapi.azaz.com/api/ItemPrivilages/'+id)
  }
  edititem(id:any,data:any){
    return this.http.put('https://saapi.azaz.com/api/ItemPrivilages/'+id,data)
  }
  deleteitem(id:any){
    return this.http.delete('https://saapi.azaz.com/api/ItemPrivilages/'+id)
  }
}
