import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { PrivilageService } from 'src/app/service/privilage.service';

@Component({
  selector: 'app-addprvg',
  templateUrl: './addprvg.component.html',
  styleUrls: ['./addprvg.component.css']
})
export class AddprvgComponent implements OnInit {

public date=new Date();

  constructor(private pvg:PrivilageService,private formbuilder:FormBuilder,private router :Router) { }

  ngOnInit(): void {

  }
  prvgForm=this.formbuilder.group({
    roleid:[''],
    status:[''],
  })
 AddPrvg(){
   const obj={
    "apId": 0,
    "apArId": this.prvgForm.value.roleid,
    "apStatus":this.prvgForm.value.status,
    "apTs": this.date
   }
   this.pvg.addpvg(obj)
   .subscribe(res=>{
     console.log(res);
     if(res){
      alert('Privilage Added Successfull');
      this.router.navigate(['view'])
    }
    else{
      alert('Privilage Not Added')
    }
   })
 }
}
