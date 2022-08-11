import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';
@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.css']
})
export class EditgroupComponent implements OnInit {
  date=new Date();
  editgroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    status:new FormControl(''),
  })
  groupdata: any;
  id: any;
  constructor( public groupser:GroupService,public act:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.act.params.subscribe((data:any)=>{
      this.groupdata=data.id;
      console.log(this.groupdata)
     }) 
     this.groupser.getgroup(this.groupdata).subscribe((res:any)=>{
      console.log(res)

      this.editgroup=new FormGroup({
        id:new FormControl(res['igId']),
        name:new FormControl(res['igName']),
        status:new FormControl(res['igStatus'])
      })
     })  

  }
  Egroup(){
    this.id= this.act.snapshot.params['id'];
    console.log(this.id)
    const obj={
      "igId": this.id,
      "igName": this.editgroup.value.name,
      "igStatus":this.editgroup.value.status,
      "igTs": this.date
    }
    console.log( obj);
this.groupser.edit(this.id,obj).subscribe(res=>{
  alert('group updated successfully');
  this. router.navigate(['viewgroup']);
})
  }

}
