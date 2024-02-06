import { BranchComponent } from './BRANCH/branch/branch.component';
import { EmployeeComponent } from './EMPLOYEE/employee/employee.component';
import { CompanyComponent } from './COMPANY/company/company.component';

import { RegisterComponent } from './AUTH/register/register.component';
import { LoginComponent } from './AUTH/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './DASHBOARD/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NOTFOUNDComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path:'' , component:LoginComponent , canDeactivate:[AuthGuard]
  },
  {
    path:'register' , component:RegisterComponent , canDeactivate:[AuthGuard]
  },
  {
    path:'dashboard' , component:DashboardComponent, canActivate:[AuthGuard],

    children:[
      {
        path:'company',component:CompanyComponent , 
      },
      {
        path:'employee' , component:EmployeeComponent,resolve:{employee:AuthGuard}
      },
      {
        path:'branch' , component:BranchComponent , 
      },
    ]
  },
  {
    path:'**' , component:NOTFOUNDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
