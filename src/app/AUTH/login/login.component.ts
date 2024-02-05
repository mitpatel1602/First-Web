import { Router } from '@angular/router';
import { User } from './../../MODEL/User';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[],
})
export class LoginComponent {

  @ViewChild('username')username!:ElementRef;
  @ViewChild('password')userPassword!:ElementRef;

router : Router = inject(Router);
 isLog : boolean  = false;
  User: any;
  inactive:boolean = false;

constructor(){}


  userDetails:User[] = []

  Login(){
    this.inactive = true;
    const username = this.username.nativeElement.value;
    const UserPassword = this.userPassword.nativeElement.value;

    if(username == '' && UserPassword == '')
    {
      alert('Fill The Information First')
    }
    console.log(username);

    const users = sessionStorage.getItem('NewUser')

    if(users)
    {
        this.userDetails = JSON.parse(users)
    }

    const founder = this.userDetails.findIndex((user) =>{
      return user.userName === username && user.userPassword === UserPassword
    })

    if(founder === -1)
    {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500
      });
      
    }
    else{
      this.userDetails[founder].isLogin = true;
      
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login success !",
              showConfirmButton: false,
              timer: 1500
            });

      sessionStorage.setItem('LoginUsers',JSON.stringify(this.userDetails[founder]))
      this.router.navigate(['/dashboard'],{queryParams:{userRole : this.userDetails[founder].userRole}})
      // this.isLog = true;
    }

  }
  canExit(){
    const userName = this.username.nativeElement.value;
    const userPassword = this.userPassword.nativeElement.value;

    if(this.inactive === true){
        return true;
    }
    else if(userName || userPassword){
      return confirm('You have unsaved changes. Do you want to navigate away?');
    }
    else{
      return true
    }
  }

}
