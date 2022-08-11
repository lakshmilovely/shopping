import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { AdddetailComponent } from '../itemdetails/adddetail/adddetail.component';
import { AddgroupComponent } from '../itemgroup/addgroup/addgroup.component';
import { AddPriceDetailsComponent } from '../price-details/add-price-details/add-price-details.component';

import { AddprvgComponent } from '../privilage/addprvg/addprvg.component';
import { AddroleComponent } from '../role/addrole/addrole.component';
import { GroupService } from '../service/group.service';
import { ItemdetailService } from '../service/itemdetail.service';
import { PriceDetailsService } from '../service/price-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   a:any;
   d:any;
   starRating = 0; 
   s:number=0;
   searchText:any;
   itemgroupid: any;
  arrBasket=JSON.parse(localStorage.getItem("name"))
   filteritems: any;
  //  arrBasket=[];
   display:any=[];
   display1:any=[];

 visible='block';
 single='none';
 show='none';
value: any;
  id: any;
 
  constructor(public dialog: MatDialog,public router:Router, public item:ItemdetailService,
                public serve:PriceDetailsService, public grp:GroupService) {}


  ngOnInit(): void {
    this.item.viewitem()
    .subscribe(res=>{
      console.log(res);
      this.a=res;
      this.filteritems=res;
 })
    
    this.serve.viewPricesUsingService().subscribe((data22:any)=>{
      console.log(data22);
      this.d=data22;
    })
    this.grp.view().subscribe((res:any)=>{
      this.value=res;
    })
  
  }
  

  filterdisplay(id:any){
    this.itemgroupid=id;
    this.filteritems=this.a.filter((x:any)=>x.iIgId===this.itemgroupid)
  } 
 
 
  addtocart(obj1:any){
   console.log(obj1)
 this.arrBasket.push(obj1)
 this.s=this.arrBasket.length
  console.log(this.arrBasket);
 localStorage.setItem("name",JSON.stringify(this.arrBasket))
 //this.arrBasket=JSON.parse(localStorage.getItem("name"));

 }

  

   singleitem(obj2){
     this.visible='none';
     this.show='none';
     this.single='block'
  console.log(obj2)
  this.display=obj2

    this.d.forEach(res=>{
      if(res.ipdIId==obj2.iId){
         console.log(res)
         this.display1=res;
      }
    })
   
   }
   backshop(){
    this.visible='block';
    this.single='none';
    this.show='none'
   }


 
  openDialog() {
    this.dialog.open(AddroleComponent);
  }
  open() {
    this.dialog.open(AddprvgComponent);
  }
  save(){
    this.dialog.open(AdddetailComponent);
  }
  add(){
    this.dialog.open(AddPriceDetailsComponent)
  }
  group(){
    this.dialog.open(AddgroupComponent)
  }
  login(){
    this.router.navigate(['login']);
    localStorage.removeItem('username');
    localStorage.clear()
  }
 
 

  opencart(){
  this.visible='none';
  this.single='none';
  this.show='block';
  
  }


  emptycart(){
  localStorage.removeItem('arrBasket')
localStorage.clear();

}


delete(id:any){
  console.log(id)
let itemid=id;
let deletecartitem=JSON.parse(localStorage.getItem('name'))
for(let i=0;i<=deletecartitem.length;i++)
{
  if(deletecartitem[i].iId==itemid.iId)
  {
  deletecartitem.splice(i,1);
  i--;
  break;
  }
 

}
console.log(deletecartitem);
localStorage.setItem('name',JSON.stringify(deletecartitem))
this.arrBasket=JSON.parse(localStorage.getItem('name'))

}

}


