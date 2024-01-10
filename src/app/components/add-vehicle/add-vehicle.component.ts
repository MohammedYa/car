import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddvehiclsService } from '../../services/addvehicls.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent {
  constructor(private _AddvehiclsService:AddvehiclsService) { }
  addVehcilForm:FormGroup= new FormGroup({
    'PlateNumber':new FormControl(null,[Validators.minLength(3),Validators.maxLength(5),Validators.required]),
    'StructureNumber': new FormControl (null,[Validators.minLength(3),Validators.maxLength(15),Validators.required]),
    'Module': new FormControl (null,[Validators.required]),
    'Type': new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'Color': new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'AddedDate': new FormControl (null,[Validators.pattern(/^[A-Za-z0-9]{6,}$/),Validators.required]),
    'VehicleType': new FormControl (null,[Validators.required]),
    'DestinationType': new FormControl (null,[Validators.required]),
    'Notes': new FormControl (null,[Validators.required]),
    'Image': new FormControl (null,[Validators.required])
  })

  addVehcilsForm(form:FormGroup){
    console.log(form.value);

  }

  url:string= '../../../assets/images/add-image 1.png' ;
  onSelectFile(e:any){
  if (e.target.files){
     var reader= new FileReader();
     reader.readAsDataURL(e.target.files[0]);
     reader.onload=(event:any)=> {
      this.url=event.target.result ;
     }
    }
  }
}
