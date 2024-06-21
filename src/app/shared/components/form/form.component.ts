import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { EssentialComponent } from '../../core/essentialComponent';
import { takeUntil } from 'rxjs';
import { ErrorComponent } from '../error/error.component';


export interface FormConfig {
  name: string,
  label: string,
  type: string,
  validators?: ValidatorFn | ValidatorFn[],
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[],
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
  @Input() globalValidators!: ValidatorFn | ValidatorFn[] | AsyncValidatorFn | AsyncValidatorFn[] | null

  form!:FormGroup

  private generateForm(formConfig: FormConfig[]){
    const configOutput : Record<any,FormControl> = {}
    formConfig.forEach( (item) =>{
      configOutput[item.name] =  new FormControl('', item.validators, item.asyncValidators)
    })
    return configOutput
  }

  ngOnInit(): void {


      this.form = new FormGroup(
          this.generateForm(this.formConfig),
          {
            validators: this.globalValidators
          }
        )

        this.form?.valueChanges.pipe(
          takeUntil(this.destroy$)
        ).subscribe( (values) => {
          console.log(values)
          console.log(this?.form?.errors)
        })
  }

  submit(){
    console.log( this.form.value)
    this.form.reset()
  }

  
}


