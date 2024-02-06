
import { Pipe, PipeTransform } from "@angular/core";

import { employee } from "../MODEL/Employee";

@Pipe({
    name:'filter',
    pure:true
    // pure : false,
})

export class filterPipe implements PipeTransform{
    
    transform(list : employee[], filterBy:string) {

        // console.log('filter Work');
        
        if(filterBy.toLowerCase()=== 'all' || filterBy === '' || filterBy.length === 0)
        {
                    return list;
        }
        else
        {
            return list.filter((emp)=>{
                return emp.employeeAge !== null && emp.employeeAge > 18 ; 
           
            })
        }
        }
    }
