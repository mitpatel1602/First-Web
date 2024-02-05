import { EventEmitter, Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class  dataService{

//    dataEmitter  = new EventEmitter<string | null>(); 

dataEmitter =  new Subject<string | null>()

   raiseDataEmitterEvent(data:string | null){
            // this.dataEmitter.emit(data);
            this.dataEmitter.next(data);
   }
}