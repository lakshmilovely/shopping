import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PrivilageService } from 'src/app/service/privilage.service';

@Component({
  selector: 'app-editprvg',
  templateUrl: './editprvg.component.html',
  styleUrls: ['./editprvg.component.css']
})
export class EditprvgComponent implements OnInit {

  prvgForm=this.formbuilder.group({
    id:[''],
    roleid:[''],
    status:[''],
  })
  prvgdata: any;
  id: any;
  public date=new Date();

  constructor(private pvg:PrivilageService,
              private formbuilder:FormBuilder,
              private actrouter:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.actrouter.params.subscribe((res:any)=>{
      this.prvgdata=res.id;
      console.log(this.prvgdata)
    })
    this.pvg.getpvg(this.prvgdata)
    .subscribe((res:any)=>{
      console.log(res)

      this.prvgForm=new FormGroup({
        id:new FormControl(res['apId']),
        roleid:new FormControl(res['apArId']),
        status:new FormControl(res['apStatus'])
      })
    })
  }
  EditPrvg(){
    this.id=this.actrouter.snapshot.params['id'];
    console.log(this.id)

    const obj ={
      "apId": this.id,
      "apArId": this.prvgForm.value['roleid'],
      "apStatus": this.prvgForm.value['status'],
      "apTs":this.date
    }
    console.log(obj);
    this.pvg.editpvg(this.id,obj)
     .subscribe((res:any)=>{
       alert('Privilage Updateded successfull')
    this.router.navigate(['view'])
       
     })
  }


}
