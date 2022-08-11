import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent implements OnInit {
  list: any;
searchtext:any;
  constructor( public groupser:GroupService) { }

  ngOnInit(): void {
    this.viewgroup();
  }
  viewgroup(){
    this.groupser.view().subscribe((res:any)=>{
      console.log(res);
      this.list= res
    })
  }
  delete(id:any){
    console.log (id);
    alert('deleted successfully');
  this.groupser.delete(id).subscribe((res:any)=>{
    this.ngOnInit()
  })
}
}
