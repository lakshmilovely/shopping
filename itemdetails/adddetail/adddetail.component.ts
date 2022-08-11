import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Validators } from '@angular/forms';
import { ItemdetailService } from 'src/app/service/itemdetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html',
  styleUrls: ['./adddetail.component.css']
})
export class AdddetailComponent implements OnInit {
  url: any;
  selectImage: any;
   data: any =[];
  
  public date=new Date();
  imageurl="https://saapi.azaz.com/"
  constructor(public api:ApiService, public fb:FormBuilder,public item:ItemdetailService,public router:Router
    ) { }

  ngOnInit(): void {}
  
  selectFile(event:any){
    if(event.target.files && event.target.files[0]){
       var reader=new FileReader();
       reader.onload=(event:any)=>
       this.url=event.target.result;
     
       reader.readAsDataURL(event.target.files[0]);

         this.selectImage=event.target.files[0];

    }
    this.upload();
  }
  upload(){
    this.api.upload(this.selectImage).subscribe((res:any)=>{
    
     this.data=res
     console.log(this.data);
     alert('uploaded successfully')
    })

  }
  
  
  itemform=this.fb.group({
    itemname:['',Validators.required],
    itemDesc:['',Validators.required],
    itemstatus:['',Validators.required],
    itemimage:['',Validators.required]
  })
  items(){
    const obj=
    {
      "iId": 0,
      "iName": this.itemform.value.itemname,
      "iIgId":20,
      "iDesc": this.itemform.value.itemDesc,
      "iImage": this.imageurl+this.data.dbPath,
      "iStatus": this.itemform.value.itemstatus,
       "iTs": this.date
    }
    console.log (obj)

    this.item.additem(obj).subscribe((data:any)=>{
      console.log(data)
      
      if(data){
        alert('Add Item');
        this.router.navigate(['viewitem'])
      }else{
        alert('already add')
      }
    })
  
  }
  
}
