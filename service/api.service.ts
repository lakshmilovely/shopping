import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uploadedFileName: undefined;
 
  constructor(public http:HttpClient) { }

upload(obj:any){
  var formdata:any=new FormData();
  formdata.append('file to upload',obj)
 return this.http.post('https://saapi.azaz.com/api/Upload',formdata)
}
  
}
