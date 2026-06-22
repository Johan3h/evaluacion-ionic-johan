import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true, 
  imports: [CommonModule, IonicModule, ReactiveFormsModule] 
})
export class FolderPage implements OnInit {
  public folder!: string;
  public contactoForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onEnviarContacto() {
    if (this.contactoForm.valid) {
      console.log('Datos de Johan validados listos para procesamiento:', this.contactoForm.value);
      alert('¡Formulario enviado con éxito de forma segura por Johan Gonzalez!');
      this.contactoForm.reset();
    } else {
      alert('Error: Verifique las entradas del formulario.');
    }
  }
}