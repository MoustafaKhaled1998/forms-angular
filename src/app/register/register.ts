import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register implements OnInit {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
        ]),
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          this.noSpaceValidator
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$'),
          this.noSpaceValidator
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const hasSpace = /\s/.test(control.value);
    return hasSpace ? { noSpace: true } : null;
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  submit() {
    console.log(this.myForm.value);
  }
}
