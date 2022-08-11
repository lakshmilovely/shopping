import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=utf-8',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {
  public baseURL="https://saapi.azaz.com/api/ItemPriceDetails/";

  
  constructor(public http:HttpClient) { }

  postPriceDetailsData11(obj2:any){
  return this.http.post("https://saapi.azaz.com/api/ItemPriceDetails",JSON.stringify(obj2),headersData);
  }
  viewPricesUsingService()
  {
    return this.http.get(this.baseURL)
  }
deleteByIDUsingService(id:any)
{
  return this.http.delete(this.baseURL+id)
  }

getElementById(id:any)
{
  return this.http.get(this.baseURL+id)

}

editUsingService(id:any,obj:any)
{
  return this.http.put(this.baseURL+id,obj,headersData)
}

}







