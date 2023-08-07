import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactivos',
  templateUrl: './formreactivos.component.html',
  styleUrls: ['./formreactivos.component.css']
})
export class FormreactivosComponent implements OnInit {

  registerForm:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        cedula:["", Validators.required],
        nombre:["", Validators.required],
        fechanac:["", Validators.required],
        ciudad:["", Validators.required]

      }
    )
  }

}
