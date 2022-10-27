import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  @Input() formGroupName!: string

  @Output() vehicleEvent = new EventEmitter<string>();

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

  vehicleTypes: string[] = ['Auto', 'Motor', 'Scooter'];
  vehicleSubtypes: any = {
    Auto: ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupé', 'Multi Purpose Vehicle', 'Terreinauto'],
    Motor: ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'],
    Scooter: []
  };

  currentVehicleType: string = this.vehicleTypes[0];
  currentVehicleSubtypes = this.vehicleSubtypes[this.currentVehicleType];

  changeVehicleSubtype() {
    let newVehicleType = this.form.get('type')?.value;


    if (newVehicleType != this.currentVehicleType) {
      this.currentVehicleType = newVehicleType;
      this.currentVehicleSubtypes = this.vehicleSubtypes[this.currentVehicleType];

      this.form.patchValue({
        subtype: this.currentVehicleSubtypes[0]
      });
    }
  }

  
  
}
