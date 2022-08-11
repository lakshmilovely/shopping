import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
date=new Date()
  constructor(private formbuilder:FormBuilder,public login:LoginService, public router:Router) { }

  ngOnInit() {}
  roleForm=this.formbuilder.group({
    username:['',Validators.required],
    status:['',Validators.required]
  })
  role(){
    const obj={
      "arId": 0,
      "arName": this.roleForm.value.username,
      "arStatus": this.roleForm.value.status,
      "arTs": this.date
    }
    this.login.getrole(obj).subscribe((data:any)=>{
      console.log(data);
        alert('new role added');
         this.router.navigate(['viewrole']);
    
    })

   
  }
  
}