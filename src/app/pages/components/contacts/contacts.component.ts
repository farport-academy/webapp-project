import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { EssentialComponent } from '../../../shared/core/essentialComponent';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent extends EssentialComponent {

  // contactForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   telephone: new FormControl('', [Validators.pattern(/^\+\d{2}\s\d{7}$/)]),
  //   message: new FormControl('', [Validators.minLength(10),Validators.maxLength(100)])
  // })

  // ngOnInit(): void {
  //     this.contactForm.valueChanges.pipe(
  //       takeUntil(this.destroy$)
  //     ).subscribe( (values) => {
  //       console.log(values)
  //     })

  //     this.contactForm.statusChanges.pipe(
  //       takeUntil(this.destroy$)
  //     ).subscribe( (status) => {
  //       console.log(status)
  //     })
  // }


  submit(form: NgForm){
    console.log(form)
    // const name = this.contactForm.get('name')?.value
    // const email = this.contactForm.get('email')?.value
    // const message = this.contactForm.get('message')?.value
    // console.log( this.contactForm)
  }

  
}
