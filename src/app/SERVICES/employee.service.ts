import { employee } from './../MODEL/Employee';
import { Observable, from } from "rxjs";


export class employeeDetails{
    

    constructor(){}

    employeeDetails:employee[] = [
        {employeeId:1001,employeeName:'abc',employeeNumber:64328,employeeAge:10},
        {employeeId:1002,employeeName:'xyz',employeeNumber:34985,employeeAge:20},
        {employeeId:1003,employeeName:'pqr',employeeNumber:98045,employeeAge:24},
        {employeeId:1004,employeeName:'hgf',employeeNumber:34280,employeeAge:16},
        {employeeId:1005,employeeName:'ert',employeeNumber:98493,employeeAge:14},
        {employeeId:1006,employeeName:'yui',employeeNumber:34567,employeeAge:17},
        {employeeId:1007,employeeName:'iop',employeeNumber:34287,employeeAge:26},
    ]

    getAllInformation(){
        return new Observable<employee[]>((sub) =>{
            sub.next(this.employeeDetails)
        })
    }

    getAllEmployee(){
       return new Observable<employee[]>((sub)=>{
            setTimeout(()=>{
                   sub.next(this.employeeDetails)
            },2500)
        })
    }

    filterEmployeeByAge(filterBy:string){
        if(filterBy.toLowerCase()=== 'all' || filterBy === '' || this.employeeDetails.length === 0)
        {
                    return this.employeeDetails;
        }
        else
        {
            return this.employeeDetails.filter((emp)=>{
                return emp.employeeAge !== null && emp.employeeAge > 18 ; 
           
            })
        }
    }
}