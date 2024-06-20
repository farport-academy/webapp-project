import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { EssentialComponent } from '../../core/essentialComponent';
import { takeUntil } from 'rxjs';
import { ErrorComponent } from '../error/error.component';


export interface FormConfig {
  name: string,
  label: string,
  type: string,
  validators: ValidatorFn | ValidatorFn[],
  errorMessage?: string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent extends EssentialComponent {

  @Input() formConfig!: FormConfig[] 

  form!:FormGroup

  private generateForm(formConfig: FormConfig[]){
    const configOutput : Record<any,FormControl> = {}
    formConfig.forEach( (item) =>{
      configOutput[item.name] =  new FormControl('', item.validators)
    })
    return configOutput
  }

  ngOnInit(): void {
      this.form?.valueChanges.pipe(
        takeUntil(this.destroy$)
      ).subscribe( (values) => {
        console.log(values)
      })
      console.log(this.form)
      this.form = new FormGroup(this.generateForm(this.formConfig))
  }

  submit(){
    console.log( this.form.value)
    this.form.reset()
  }

  
}


