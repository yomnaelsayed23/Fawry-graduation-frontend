import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-promocodes',
  standalone: true,
  imports: [
    TopBarComponent,
    SideBarComponent,
    CommonModule,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './promocodes.component.html',
  styleUrl: './promocodes.component.css',
})
export class PromocodesComponent implements OnInit {
  promoCodeForm: FormGroup;
  promoCodes: { code: string; percentage: string }[] = [];

  constructor(private fb: FormBuilder,public _themeservice:ThemeService) {
    this.promoCodeForm = this.fb.group({
      promoCode: ['', Validators.required],
      discountAmount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    const savedPromoCodes = localStorage.getItem('promoCodes');
    if (savedPromoCodes) {
      this.promoCodes = JSON.parse(savedPromoCodes);
    }
  }

  submitPromoCode() {
    if (this.promoCodeForm.valid) {
      const promoCodeValue = this.promoCodeForm.value;
      this.promoCodes.push({
        code: promoCodeValue.promoCode,
        percentage: promoCodeValue.discountAmount + '%',
      });
      localStorage.setItem('promoCodes', JSON.stringify(this.promoCodes));
      this.promoCodeForm.reset();
    }
  }
}
