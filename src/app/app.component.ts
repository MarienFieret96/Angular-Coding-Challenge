import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  kentekenForm!: FormGroup;
  vehicleType: string = 'Auto'

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.kentekenForm = this.fb.group({
      selectInfo: this.fb.group({
        type: new FormControl('Auto', Validators.required), // type
        subtype: new FormControl('Hatchback', Validators.required), // subtype
      }),
      inputInfo: this.fb.group({
        kenteken: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]{2})([0-9]{2})([0-9]{2})|([0-9]{2})([0-9]{2})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]{2})|([0-9]{2})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]{2})([0-9]{2})|([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]{2})([0-9]{2})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]{2})|([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]{2})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]{2})([0-9]{2})")]), // kenteken
        meldcode: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]{4}')]) //meldcode
      }),

      
      
    })
  }


  onSubmit(){
    console.log(this.kentekenForm)
  }
}
