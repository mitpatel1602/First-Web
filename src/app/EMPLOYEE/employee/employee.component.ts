
import Seal from 'sweetalert2';
import { employee } from './../../MODEL/Employee';
import { employeeDetails } from './../../SERVICES/employee.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[employeeDetails]
})
export class EmployeeComponent implements OnInit {

  // @ViewChild('empId')empId!:ElementRef;
  // @ViewChild('empName')empName!:ElementRef;
  // @ViewChild('empNumber')empNumber!:ElementRef;

  empId:number|null = null;
  empName:string|null = null;
  empNumber:number|null = null;
  empAge:number | null = null;
  
  EditBtn:boolean = false
  DeleteBtn:boolean = false
  userRole:string|null = null
  role:string | any = "";
  getIndex:number|null = null
  isActive:boolean = false;
  
  filterText : string = "All"

  activeRoute:ActivatedRoute = inject(ActivatedRoute);

  emp : employee[] = [];
  

  constructor(private employee:employeeDetails){}

  onFilterValueChange(event:any){
      // console.log(event.target.value);
      let selectedValue = event.target.value;
      this.filterText = selectedValue;
    this.emp = this.employee.filterEmployeeByAge(selectedValue)
      
  }

  ngOnInit(): void {
    
    //  this.allEmp = this.employee.;
    // this.employee.getAllEmployee().subscribe((data:employee[])=>{
    // this.emp = data;
    // });

   this.emp =  this.activeRoute.snapshot.data['employee'];

  // this.emp = this.employee.filterEmployeeByAge(this.filterText)

    sessionStorage.setItem('Employees',JSON.stringify(this.emp))

    this.userRole = sessionStorage.getItem('LoginUsers')

    if(this.userRole)
    {
      this.role = JSON.parse(this.userRole)
    }

    if(this.role.userRole==='Supper-Admin'){
      this.EditBtn = true;
      this.DeleteBtn = true
    }else if(this.role.userRole === 'Admin'){
      this.DeleteBtn = true;
      this.EditBtn = false; 
    }else{
      this.EditBtn = false;
      this.DeleteBtn = false
    }
    
  }
  
  
  Delete(data:employee){
    console.log(data);

    const index = this.emp.indexOf(data);
    this.emp.splice(index,1)

  }
  
  Edit(data:employee){

    this.isActive = true;
      this.getIndex = this.emp.findIndex((e) =>{
       return e.employeeId === data.employeeId
      })
      // console.log(this.getIndex);
      this.empId = data.employeeId;
      this.empName = data.employeeName;
      this.empNumber = data.employeeNumber;
      this.empAge = data.employeeAge;
  }

  Update(){

    this.emp[this.getIndex!].employeeId = this.empId;
    this.emp[this.getIndex!].employeeName = this.empName;
    this.emp[this.getIndex!].employeeNumber = this.empNumber;
    this.emp[this.getIndex!].employeeAge = this.empAge;
    
    Seal.fire({
      title: "Good job!",
      text: "Record Updated !",
      icon: "success"
    });
    
    this.isActive = false;
    this.emp = this.employee.filterEmployeeByAge(this.filterText)
  }

}
