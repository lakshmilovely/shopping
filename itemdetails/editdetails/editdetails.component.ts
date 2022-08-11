import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ItemdetailService } from 'src/app/service/itemdetail.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
url:any;
selectImage:any;
public data:any;
pic="block";
 public date=new Date();
imageurl="https://saapi.azaz.com/"
itemform=new FormGroup({
  name:new FormControl(''),
  desc:new FormControl(''),
  status:new FormControl(''),
 
})
  iedit: any;
  id: any;
  image: any;
  groupid: any;

 


  constructor( public api:ApiService,public item:ItemdetailService,
               public act:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.act.params.subscribe((data:any)=>{
      this.iedit=data.id;
      console.log(this.iedit)
    })
    this.item.getitem(this.iedit).subscribe((res:any)=>{
      console.log(res);
      this.image=res.iImage
      this.itemform=new FormGroup({
        name:new FormControl(res['iName']),
        desc:new FormControl(res['iDesc']),
        status:new FormControl(res['iStatus']),
      
    })
  })
}
  changeFile(event:any){
    if(event.target.files && event.target.files[0]){
       var reader=new FileReader();
       reader.onload=(event:any)=>
       this.url=event.target.result;
     
       reader.readAsDataURL(event.target.files[0]);

         this.selectImage=event.target.files[0];
         this.pic='none'


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
 
  edit(){
    this.id=this.act.snapshot.params['id'];
    this.groupid=this.act.snapshot.params['this.groupid']
    console.log(this.id)
    console.log('abs',this.groupid)
    const obj={
      "iId": this.id,
      "iName": this.itemform.value.name,
      "iIgId": 1,
      "iDesc": this.itemform.value.desc,
      "iImage": this.imageurl+this.data.dbPath,
      "iStatus": this.itemform.value.status,
       "iTs": this.date
    }
    console.log(obj);
    this.item.edititem(this.id,obj).subscribe(res=>{
      alert('item updated successfully');
      this.router.navigate(['viewitem']);
    })
  }

}
