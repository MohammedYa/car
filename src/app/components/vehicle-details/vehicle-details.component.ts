import { Component, OnInit } from '@angular/core';
import { GetVehcilService } from '../../services/get-vehcil.service';
import { ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css'
})
export class VehicleDetailsComponent implements OnInit {
  Id:string=""
  vehcile:any={}
constructor( private _GetVehcilService: GetVehcilService ,private _ActivatedRoute  :ActivatedRoute   ){
 this.Id= _ActivatedRoute.snapshot.params['Id']
 this.getVehcils(this.Id)
}
  ngOnInit(): void {
  }
  getVehcils(Id:string){
    
  this._GetVehcilService.getVehciles(Id).subscribe(
    (res)=>{
      console.log(res);
      this.vehcile=res
    }
    ,(error)=>{
      console.log(error);
      
    }
  )
  }
}

