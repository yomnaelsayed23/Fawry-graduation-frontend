import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    FormsModule,
    RouterLink,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email]],
      address: ['', Validators.required],
      address2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      paymentMethod: ['credit', Validators.required],
      ccName: ['', Validators.required],
      ccNumber: ['', Validators.required],
      ccExpiration: ['', Validators.required],
      ccCvv: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
