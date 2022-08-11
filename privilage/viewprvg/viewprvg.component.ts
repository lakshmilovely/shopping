import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { PrivilageService } from 'src/app/service/privilage.service';

@Component({
  selector: 'app-viewprvg',
  templateUrl: './viewprvg.component.html',
  styleUrls: ['./viewprvg.component.css']
})
export class ViewprvgComponent implements OnInit {
  data: any;
  searchText:any;
  constructor(private pvg:PrivilageService) { }

  ngOnInit(): void {
   this.ViewPrvg();
  }

  ViewPrvg(){
    this.pvg.viewpvg()
    .subscribe(res=>{
      console.log(res);
      this.data=res;
    })
  }
  DeletePrvg(id:any){
    console.log(id)
    this.pvg.delpvg(id)
    .subscribe(res=>{
      alert('You Want to Delete')
     this.ViewPrvg();
    })

  }
}
