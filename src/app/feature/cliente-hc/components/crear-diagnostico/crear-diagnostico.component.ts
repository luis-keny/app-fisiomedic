import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-diagnostico',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-diagnostico.component.html',
  styleUrls: ['./crear-diagnostico.component.css', '../../../../shared/css/form-elements.css'],
})
export class CrearDiagnosticoComponent {
  diagnosticoForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.diagnosticoForm = this.fb.group({
      diagnostico: ['', Validators.required],
      fecha: ['', Validators.required],
      inicioEnfermedad: ['', Validators.required],
      peso: ['', Validators.required],
      talla: ['', Validators.required],
      nSesion: ['', Validators.required],
      planPago: ['', Validators.required],
      observacion: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.diagnosticoForm.valid) {
      console.log('Formulario válido:', this.diagnosticoForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  onDelete(): void {
    this.diagnosticoForm.reset();
  }
}
