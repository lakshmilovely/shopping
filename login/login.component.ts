import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


import { SocialAuthService, FacebookLoginProvider, SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
    	
@ViewChild('loginRef',{static:true}) loginElement: ElementRef;
user!: SocialUser;
isSignedin?: boolean;
  aId:any;
 aArid:any;
  auth2: any;
 signIn:any;
  constructor(private formbuilder:FormBuilder,private socialAuthService: SocialAuthService,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.googleSDK();

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
     
    
    });

  }
  myform=this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

 loginuser(){
 const obj={
  username:this.myform.controls.username.value,
  password:this.myform.controls.password.value
 }
      this.loginservice
        .login(obj)
        .subscribe((res: any)=>{
          console.log(res)
          if(res=='')
          {
            alert("Login Failed");
           
          }
          else
          {
            alert("Login Sucessful");
            this.aId=res[0].aId;
             console.log(this.aId);
             this.getdetailsById(this.aId);
            
            this.myform.reset();
            this.router.navigate(['home']);
          }
        });
        //localStorage.setItem('username',this.myform.controls.username.value)
  }
  
 
  getdetailsById(input:any)
  {
    const obj={
      "aId": input
    }
    this.loginservice.getloginbyid(obj).subscribe((res:any)=>{
      console.log(res);

    });
  }


  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
    
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }

  googleSDK() {
 
    ( window as any)['googleSDKLoaded'] = () => {
     ( window as any)['gapi'].load('auth2', () => {
         this.auth2 =  ( window as any)['gapi'].auth2.init({
           client_id: '900134081834-mibb7vre9mjpjmdjo0rjstm44jlkpd2o.apps.googleusercontent.com',
           cookiepolicy: 'single_host_origin',
           scope: 'profile email'
         });
         this.prepareLoginButton();
       
       });
     }
    
     (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'google-jssdk'));
    
   }
  
  prepareLoginButton() {
   
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
   
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      },
      // console.log('abc',this.)
     );
    }
 

// googlelogin():void{
//   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
//   console.log('abc')
// }
}


