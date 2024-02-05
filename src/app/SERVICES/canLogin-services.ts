import { userDetails } from './userDetails';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class canLogin implements CanActivate{

    userLogin:any = [];

    constructor(private userL:userDetails,private route:Router){
        this.userLogin = userL;   
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.userLogin.isLogin == true){
            // console.log(this.userLogin.isLogin);
            return true
        }
        else{
            this.route.navigate(['/']);
            return false;
        }
    }
}