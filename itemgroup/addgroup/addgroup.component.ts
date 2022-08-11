import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
date=new Date();
  constructor( public fb:FormBuilder,public groupser:GroupService,public router:Router) { }

  ngOnInit(): void {
  }
  groupform=this.fb.group({
    name:['',Validators.required],
    status:['',Validators.required]
  })
  add(){
    const obj={
      "igId": 0,
      "igName": this.groupform.value.name,
      "igStatus":this.groupform.value.status,
      "igTs": this.date
    }
    console.log(obj);
    this.groupser.add(obj).subscribe((res:any)=>{
      console.log(res);
      alert('new group added');
      this.router.navigate(['viewgroup']);
    })
  }
  
}
