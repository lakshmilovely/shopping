import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceDetailsService } from 'src/app/service/price-details.service';

@Component({
  selector: 'app-edit-price-details',
  templateUrl: './edit-price-details.component.html',
  styleUrls: ['./edit-price-details.component.css']
})
export class EditPriceDetailsComponent implements OnInit {
  date=new Date()
  constructor(public serve:PriceDetailsService,public actRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.gettingParam()

  }
  prodDetailsID=""
  mrp=''
  marketprice=''
  discount=''
  start=""
  end=''
  status=''



  editById(id:any)
  {
    let obj
    this.serve.getElementById(id).subscribe((data1:any)=>{console.log(data1);obj=data1;
      console.log(obj);

     
      this.prodDetailsID=obj.ipdIId;
     this.mrp=obj.ipdMrp;
      this.marketprice=obj.ipdMarketPrice;
      this.discount=obj.ipdDiscount;
      this.start=obj.ipdStartDate;
     this.end=obj.ipdEndDate;
     this.status='Y';


     
     
    
    });
    
  }


  gettingParam()
  {
    let id1:any
    this.actRoute.params.subscribe(
      (idData)=>
      {id1=idData,
        console.log(id1.id)
       this.editById(id1.id)
      })
  }


  savingNewObject()
  {let id=this.actRoute.snapshot.params['id']
  console.log(id)
    const obj2=
{
"ipdId":id,
"ipdIId":this.prodDetailsID,
"ipdMrp": this.mrp,
"ipdMarketPrice":this.marketprice,
"ipdDiscount":this.discount,
"ipdStartDate":this.start,
"ipdEndDate":this.end,
"ipdStatus":this.status,
"ipdTs":this.date
}
console.log(obj2)

this.serve.editUsingService(id,obj2).subscribe((result)=>{
  console.log(result);
  this.router.navigate(['view-price'])
})
  }




}
