import { Router } from '@angular/router';
import { User } from './../../MODEL/User';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userId: number | null = null
  

  router : Router = inject(Router);

  @ViewChild('name')name!:ElementRef;
  @ViewChild('email')email!:ElementRef;
  @ViewChild('password')password!:ElementRef;

  isSubmitted : boolean = false;
 

  userDetail:User[] = [
    {userId:1,userName:'abc',userEmail:'abc@gmail.com',userPassword:'123',userRole:"Supper-Admin",permission:["company",'employee','branch'],isLogin:false},
    {userId:2,userName:'xyz',userEmail:'xyz@gmail.com',userPassword:'123',userRole:"Admin",permission:["company"],isLogin:false},
    {userId:3,userName:'pqr',userEmail:'pqr@gmail.com',userPassword:'123',userRole:"Admin",permission:["employee"],isLogin:false},
    {userId:4,userName:'str',userEmail:'str@gmail.com',userPassword:'123',userRole:"Admin",permission:["branch"],isLogin:false},
  ]

  
  // userName = this.name.nativeElement.value;
  // userEmail = this.email.nativeElement.value;
  // userPassword = this.password.nativeElement.value;

  register(){
    
    const userName = this.name.nativeElement.value;
    const userEmail = this.email.nativeElement.value;
    const userPassword = this.password.nativeElement.value;

    if(userName =='' || userEmail =='' || userPassword ==''){
      alert('enter the all filed ')
     
    }
    else{
      this.userDetail.push({userId:this.userDetail.length+1,userName:userName,userEmail:userEmail,userPassword:userPassword,userRole:"Basic-User",isLogin:false})
      sessionStorage.setItem('NewUser',JSON.stringify(this.userDetail));
      Swal.fire({
        title: "Good job!",
        text: "Account Created !",
        icon: "success"
      });
      this.router.navigate(['/']);
      this.isSubmitted = true;
    }

  }

  canExit(){
    const userName = this.name.nativeElement.value;
    const userEmail = this.email.nativeElement.value;
    const userPassword = this.password.nativeElement.value;
  

    if(userName ==='' && userEmail==='' && userPassword ===''){
       return confirm('You have unsaved changes. Do you want to navigate away?');
    }
    else{
      return true
    }
  }

  // canExit(){
  //   const userName = this.name.nativeElement.value;
  //   const userEmail = this.email.nativeElement.value;
  //   const userPassword = this.password.nativeElement.value;

  //   if(userName || userEmail || userPassword){
  //      return confirm('You have unsaved changes. Do you want to navigate away?');
  //   }
  //   else{
  //     return true
  //   }
  // }
}
