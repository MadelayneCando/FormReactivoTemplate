import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  
  register:persona={
    cedula:"",
    nombre:"",
    fechanac:"",
    ciudad:""
  };
  constructor(){}
  submit(){
    console.log("Datos de registro");
    console.log(this.register.cedula);
    console.log(this.register.nombre);
    console.log(this.register.fechanac);
    console.log(this.register.ciudad);
    mostrarMensajeEmergente();
    
  };

    
}

function mostrarMensajeEmergente() {
  Swal.fire({
    title: 'Mensaje Emergente',
    text: '¡Registrado!',
    icon: 'success', // Icono (success, error, warning, info, question)
    confirmButtonText: 'Aceptar'
  });
}

interface persona{
  cedula: string;
  nombre: string;
  fechanac: string;
  ciudad: string;
}  
