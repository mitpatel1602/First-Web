import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Branch } from 'src/app/MODEL/Branch';
import { branchDetails } from 'src/app/SERVICES/branch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  // @ViewChild('brId')brId!:ElementRef;
  // @ViewChild('brName')brName!:ElementRef;
  brId:number|null = null;
  brName:string|null = null;

  EditBtn:boolean = false;
  DeleteBtn:boolean = false;
  userRole:string | null = null;
  role:string | any = null
  getIndex:number|null = null;
  isActive:boolean = false;


  brn : Branch[] = [];
  // branchDetail:Branch[] = [
  //   {branchId:101,branchName:"dev"},
  //   {branchId:102,branchName:"tester"},
  // ]

  constructor(private branch:branchDetails){}

  ngOnInit(): void {

     // this.allEmp = this.employee.getAllEmployee();
    this.branch.getAllBranch().subscribe((data:any)=>{
      this.brn = data;
      sessionStorage.setItem('BranchDetail',JSON.stringify(this.brn))
    })

    

    this.userRole = sessionStorage.getItem("LoginUsers")
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

  
  Delete(data:any){
  console.log(data);

  const index = this.brn.indexOf(data);
  this.brn.splice(index,1)

  }
  Edit(data:Branch){

    this.isActive = true;
    this.getIndex = this.brn.findIndex((b)=>{
      return b.branchId === data.branchId
    })
    console.log(this.getIndex);

    this.brId = data.branchId;
    this.brName = data.branchName;

  }
  Update(){

    this.brn[this.getIndex!].branchId = this.brId;
    this.brn[this.getIndex!].branchName = this.brName;

    Swal.fire({
      title: "Good job!",
      text: "Record Updated !",
      icon: "success"
    });
    

    this.isActive = false;

    // this.brId = null;
    // this.brName = '';

  }
}