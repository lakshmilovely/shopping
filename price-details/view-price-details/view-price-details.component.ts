import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { PriceDetailsService } from 'src/app/service/price-details.service';

@Component({
  selector: 'app-view-price-details',
  templateUrl: './view-price-details.component.html',
  styleUrls: ['./view-price-details.component.css']
})
export class ViewPriceDetailsComponent implements OnInit {

  public viewPriceData: any
  searchtext:any;

  constructor(public serve:PriceDetailsService) { }
  

  ngOnInit(): void {
    this.viewPrices()
}


  
 

  viewPrices()
  { 
    this.serve.viewPricesUsingService().subscribe((data22:any)=>{
      console.log(data22);
      this.viewPriceData=data22;
    })

  }

  deleteByID(id:any)
  {
    this.serve.deleteByIDUsingService(id).subscribe((data:any)=>{console.log(data);
      this.ngOnInit()
    alert('Record Deleted Successfully')})
    
  }

 



}
