import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {
 date=new Date();
editrole=new FormGroup({
  rid:new FormControl(''),
  rolename:new FormControl(''),
  status:new FormControl(''),
})
  id:any
  user: any;
  userinfo: any;
  arId: any;
  rdata: any;

  constructor(public login:LoginService,public router:Router,
              public act:ActivatedRoute ) { }

  ngOnInit(): void {
       this.act.params.subscribe((data:any)=>{
        this.rdata=data.id;
        console.log(this.rdata)
       }) 
       this.login.getrolebyid(this.rdata).subscribe((res:any)=>{
        console.log(res)

        this.editrole=new FormGroup({
          rid:new FormControl(res['arId']),
          rolename:new FormControl(res['arName']),
          status:new FormControl(res['arStatus'])
        })
       })  
  }
  

Erole(){
  this.id= this.act.snapshot.params['id'];
  console.log(this.id)
   const obj={
    "arId": this.id,
    "arName": this.editrole.value['rolename'],
    "arStatus":this.editrole.value['status'],
    "arTs": this.date
  }
console.log( obj);
this.login.edit( this.rdata,obj).subscribe(res=>{
  alert('role updated successfully');
  this. router.navigate(['viewrole']);
})

 
}
}
