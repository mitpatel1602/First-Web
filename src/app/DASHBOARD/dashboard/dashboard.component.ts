import { Component, Input } from '@angular/core';
import { dataService } from 'src/app/SERVICES/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[dataService]
})
export class DashboardComponent  {


  name:string|null = '';
  
  constructor(private datasevice:dataService){}


  ngOnInit(): void {
    this.datasevice.dataEmitter.subscribe((value) => {
      this.name = value;
      // console.log(value);
    })
  }


  // @Input() name = '';
  // Loader:boolean = false;

  // Active(){
  //   this.Loader = true
  //   setTimeout(()=>{
  //     this.Loader = false;
  //   },2500)
  // }
}
