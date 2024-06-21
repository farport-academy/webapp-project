import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { EssentialComponent } from '../../../shared/core/essentialComponent';
import { repeat, takeUntil } from 'rxjs';
import { FormComponent, FormConfig } from '../../../shared/components/form/form.component';
import { asyncForbiddenNameValidator, confirmPasswordValidator, forbiddenNameValidator } from '../../../shared/core/validators';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent extends EssentialComponent {

  forbiddenNames = ['Abruzzo', 'Lazio', 'Calabria']

  formConfig: FormConfig[] = [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      validators: [Validators.required],
      asyncValidators: [asyncForbiddenNameValidator(this.forbiddenNames)]
    }, 
    {
      name: 'secondname',
      label: 'congnome',
      type: 'text',
      validators: [Validators.required]
    }, 
    {
      name: 'regione',
      label: 'La tua Regione',
      type: 'text',
      validators: [Validators.required]
    },
    {
      name: 'email',
      label: 'Indirizzo Email',
      type: 'text',
      validators: [Validators.required, Validators.email]
    },
    {
      name: 'password',
      label: 'La tua password',
      type: 'password',
      validators: [Validators.required]
    },
    {
      name: 'secondaPassword',
      label: 'RipetiPassword',
      type: 'password',
      validators: [Validators.required]
    },
    {
      name: 'telephone',
      label: 'Numero di telefono',
      type: 'text',
      validators: [Validators.pattern(/^\+\d{2}\s\d{7}$/)], 
      errorMessage: 'deve essere un numero di telefono valido'
    },
    {
      name: 'message',
      label: 'Messaggio',
      type: 'textarea',
      validators: [Validators.minLength(10),Validators.maxLength(100)]
    }
  ]

  globalValidator = confirmPasswordValidator('password', 'secondaPassword')

}
