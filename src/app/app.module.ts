
import { userDetails } from './SERVICES/userDetails';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './AUTH/login/login.component';
import { CompanyComponent } from './COMPANY/company/company.component';
import { EmployeeComponent } from './EMPLOYEE/employee/employee.component';
import { BranchComponent } from './BRANCH/branch/branch.component';
import { DashboardComponent } from './DASHBOARD/dashboard/dashboard.component';
import { LoggingService } from './SERVICES/isLogin.service';
import { AuthGuard } from './auth.guard';
import { branchDetails } from './SERVICES/branch.service';
import { employeeDetails } from './SERVICES/employee.service';
import { CompanyDetails } from './SERVICES/company.service';
import { NOTFOUNDComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { dataService } from './SERVICES/data.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyComponent,
    EmployeeComponent,
    BranchComponent,
    DashboardComponent,
    NOTFOUNDComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ LoggingService,
               userDetails,
               AuthGuard,
               branchDetails,
               employeeDetails,
               CompanyDetails,
               branchDetails,
               dataService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }

