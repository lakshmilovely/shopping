
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemdetailService } from 'src/app/service/itemdetail.service';
import { PriceDetailsService } from 'src/app/service/price-details.service';


@Component({
  selector: 'app-add-price-details',
  templateUrl: './add-price-details.component.html',
  styleUrls: ['./add-price-details.component.css']
})
export class AddPriceDetailsComponent implements OnInit {
 
  date=new Date();
  detail: any;
  
 
  

  constructor(public dialog: MatDialog,public ser:PriceDetailsService,public fb:FormBuilder,
    public router:Router ,public act:ActivatedRoute ,public item:ItemdetailService) { 
   
    
  }
 public  prodID=''
 public  prodDetailsID=''
 public mrp:any
 
public marketprice?:any
 public discount:any
 public start=''
 public end=''
 public status=''

ngOnInit(): void {
  
  this.act.params.subscribe((data:any)=>{
    this.detail=data.id;
    console.log(this.detail)
  })
  this.item.getitem(this.detail).subscribe((res:any)=>{
    console.log(res);
    this. prodDetailsID=res.iId;
    console.log(this.prodDetailsID)
    let xyz=res.iDesc;
   
    this.discount=Number(res.iDesc.slice(0,xyz.length-1));
    console.log(this.discount)

  })
}

  postPriceDetailsData(): void
  {
const obj2=
{
"ipdId":0,
"ipdIId":this.prodDetailsID,
"ipdMrp": this.mrp,
"ipdMarketPrice":String(this.mrp-(this.mrp*this.discount/100)),
"ipdDiscount":this.discount,
"ipdStartDate":this.start,
"ipdEndDate":this.end,
"ipdStatus":this.status,
"ipdTs":this.date
}
console.log(obj2)
    this.ser. postPriceDetailsData11(obj2).subscribe(
      (data:any)=>{
      console.log(data)
      alert("One Record Added Succesfully")
      this.router.navigate(['view-price'])
    }
   
    
    );

  }
  

  
  

}
