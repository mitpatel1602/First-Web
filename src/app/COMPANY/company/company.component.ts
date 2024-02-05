import Seal from 'sweetalert2';

import { CompanyDetails } from 'src/app/SERVICES/company.service';
import { companyModel } from './../../MODEL/Company';


import { Component, OnInit,  inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataService } from 'src/app/SERVICES/data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit  {

  // @ViewChild('comId')comId!:ElementRef;
  // @ViewChild('comName')comName!:ElementRef;
  // @ViewChild('comLocation')comLocation!:ElementRef;
  // @ViewChild('comGst')comGst!:ElementRef;

  comId:number|null = null;
  comName:string|null = null;
  comLocation:string|null = null;
  comGst:number|null = null;
  



  userRole:string | null = null
  EditBtn:boolean = false;
  addToFav:boolean = true;
  DeleteBtn:boolean = false
  role:string | any = null;
  getIndex:number|null = null;
  isActive:boolean = false;
  
  activeRoute = inject(ActivatedRoute);
  
  constructor(private companyData:CompanyDetails , private datasevice:dataService ){}
  

  companyList : companyModel [] = [];


  ngOnInit(): void {
    
    
    this.companyData.getAllCompanyDetails().subscribe((data:any)=>{
      this.companyList = data;
      sessionStorage.setItem('CompanyDetails',JSON.stringify(this.companyList))
    })
    // this.companyList = this.companyData;
    
    // console.log(this.companyList);
    

    this.userRole = sessionStorage.getItem('LoginUsers')
    if(this.userRole)
    {
        this.role = JSON.parse(this.userRole)
    }
    if(this.role.userRole==='Supper-Admin'){
      this.EditBtn = true;
      this.DeleteBtn = true
      // this.addToFav = true
    }else if(this.role.userRole === 'Admin'){
      this.DeleteBtn = true;
      this.EditBtn = false; 
      // this.addToFav = true; 
    }else{
      this.EditBtn = false;
      this.DeleteBtn = false
      // this.addToFav = false
    }

  
  }


  edit(data:companyModel){

    this.isActive = true;

    this.getIndex = this.companyList.findIndex((c)=>{
      return c.companyId === data.companyId;
    })

    

    this.comId = data.companyId;
    this.comName = data.companyName;
    this.comLocation = data.companyLocations;
    this.comGst = data.companyGst;
  

  }

  Delete(data:companyModel){
    console.log(data);
    const findIndex = this.companyList.indexOf(data)
    this.companyList.splice(findIndex,1);
    
  }
  Update(){

    this.companyList[this.getIndex!].companyId = this.comId;
    this.companyList[this.getIndex!].companyName = this.comName;
    this.companyList[this.getIndex!].companyLocations = this.comLocation;
    this.companyList[this.getIndex!].companyGst = this.comGst;

    Seal.fire({
      title: "Good job!",
      text: "Record Updated !",
      icon: "success"
    });
    
    this.isActive = false;
    // this.comId =null;
    // this.comName = '';
    // this.comLocation = '';
    // this.comGst = null;

  }

  addFav(data:string | null){
    this.addToFav = false;
    console.log(data);
    Seal.fire({
      title: "Added To Fav!",
      text: "!",
      icon: "success"
    });
    
    this.datasevice.raiseDataEmitterEvent(data);
  }

}
