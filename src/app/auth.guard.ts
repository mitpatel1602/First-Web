import { LoginComponent } from './AUTH/login/login.component';

import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggingService } from './SERVICES/isLogin.service';

import { employee } from './MODEL/Employee';
import { employeeDetails } from './SERVICES/employee.service';
import { RegisterComponent } from './AUTH/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanDeactivate<LoginComponent> , Resolve<employee[]>{
  constructor(private isLog:LoggingService , private router:Router){}

  employee:employeeDetails = inject(employeeDetails);
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.isLog.login === false)
      {
        return true;
      }
      else{
        this.router.navigate(['/']);
        alert('Login Required');
        return false;
      }
    }
    
    canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      //throw alert('are you sure !!!');
      return component.canExit()
      // return true;
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): employee[] | Observable<employee[]> | Promise<employee[]> {
    //  let employeeList : employee[] = [];
    //   // throw new Error('Method not implemented.');
    //   this.employee.getAllEmployee().subscribe((employee : any) => {
    //         employeeList = employee;
    //   });
    //   return employeeList

    return this.employee.getAllEmployee()
    }
  }
  