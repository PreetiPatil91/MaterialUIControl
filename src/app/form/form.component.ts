import { Component,OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Here, you can call an API to submit the data or perform any other actions.
    } else {
      // Mark all fields as touched to display validation errors
      this.form.markAllAsTouched();
    }
  }
}
