import { Observable } from "rxjs";
import { companyModel } from "../MODEL/Company";

export class CompanyDetails{
    constructor(){}
    Company:companyModel[] = [
        {companyId:101 , companyName:'brain' , companyLocations:'Gota ' , companyGst:23456789},
        {companyId:102 , companyName:'abc' , companyLocations:'Gota' , companyGst:34532343},
        {companyId:103 , companyName:'xyz' , companyLocations:'ahmadabad' , companyGst:10765645},
        {companyId:104 , companyName:'pqr' , companyLocations:'surat' , companyGst:10765645},
        {companyId:105 , companyName:'def' , companyLocations:'ahmadabad' , companyGst:10765645},
        {companyId:106 , companyName:'klm' , companyLocations:'ahmadabad' , companyGst:10765645},
        {companyId:107 , companyName:'stu' , companyLocations:'surat' , companyGst:10765645},
        {companyId:108 , companyName:'vwx' , companyLocations:'surat' , companyGst:10765645},
        {companyId:109 , companyName:'yz' , companyLocations:'kadi' , companyGst:10765645},
        {companyId:110 , companyName:'op' , companyLocations:'surat' , companyGst:10765645},
    ];


    getAllCompanyDetails(){
        return new Observable<companyModel[]>((sub)=>{
            setTimeout(()=>{
                sub.next(this.Company)
            })
        })
    }
    filterByCompanyName(filterBy:string){

        if(filterBy?.toLowerCase() === ' ' || filterBy === '  ' || filterBy?.length === 0)
        {
            return this.Company;
        }
        else
        {
        return this.Company.filter((com)=>{
        return  com.companyName?.toLowerCase() === filterBy?.toLowerCase(); 
        })
        }
    }
}