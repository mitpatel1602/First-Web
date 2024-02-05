import { Observable } from "rxjs";
import { Branch } from "../MODEL/Branch";

export class branchDetails{
    constructor(){}

    branchDetail:Branch[] = [
    {branchId:101,branchName:"dev"},
    {branchId:102,branchName:"tester"},
    {branchId:103,branchName:"QA"},
    {branchId:104,branchName:"tester"},
    {branchId:105,branchName:"QA"},
    {branchId:106,branchName:"dev"},
    {branchId:107,branchName:"dev"},
    {branchId:108,branchName:"QA"},
    {branchId:109,branchName:"DEV"},
    {branchId:1010,branchName:"tester"},
    ]

    getAllBranch(){
       return new Observable ((sub) => {
        setTimeout(()=>{
                    sub.next(this.branchDetail)
        }//define the time here
        )
       }) 
        }
    }
