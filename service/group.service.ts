import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor( public http:HttpClient) { }

  add(obj:any){
return this.http.post('https://saapi.azaz.com/api/ItemGroups',JSON.stringify(obj),headersData)
  }
  view(){
    return this.http.get('https://saapi.azaz.com/api/ItemGroups')
  }
  getgroup(id:any){
    return this.http.get('https://saapi.azaz.com/api/ItemGroups/'+id)
  }
  edit(id:any,data:any){
    return this.http.put('https://saapi.azaz.com/api/ItemGroups/'+id,data)
  }
  delete(id:any){
    return this.http.delete('https://saapi.azaz.com/api/ItemGroups/'+id)
  }
}
