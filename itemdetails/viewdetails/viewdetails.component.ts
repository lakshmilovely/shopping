import { Component, OnInit } from '@angular/core';
import { ItemdetailService } from 'src/app/service/itemdetail.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
a:any;
searchText:any;
  constructor( public item:ItemdetailService) { }

  ngOnInit(): void {
    this.Viewitems();
  }
  Viewitems(){
    this.item.viewitem()
    .subscribe(res=>{
      console.log(res);
      this.a=res;
    })
  }
  Deleteitem(id:any){
    console.log(id)
    this.item.deleteitem(id)
    .subscribe(res=>{
      alert('You Want to Delete')
     this.Viewitems();
    })

  }
}
