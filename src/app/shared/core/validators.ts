import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

export function forbiddenNameValidator(name: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = name.test(control.value);
    console.log(forbidden);
    return forbidden
      ? {
          forbiddenName: {
            value: control.value,
          },
        }
      : null;
  };
}

export function confirmPasswordValidator(
  pwdField1: string,
  pwdField2: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value[pwdField1] === control.value[pwdField2]
      ? null
      : { passwordDidntMatch: {
            connectedFields: [pwdField1, pwdField2]
      } };
  };
}

export function asyncForbiddenNameValidator(
  forbiddenNames: string[]
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return of(forbiddenNames).pipe(
      delay(1000),
      map((names) => {
        const isTakenName = names.includes(control.value);
        return isTakenName
          ? {
              forbiddenName: {
                value: control.value,
              },
            }
          : null;
      })
    );
  };
}
