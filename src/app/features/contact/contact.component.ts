import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage: { type: 'success' | 'error', text: string } | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      service: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        
        this.submitMessage = {
          type: 'success',
          text: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        };
        
        this.isSubmitting = false;
        this.contactForm.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.submitMessage = null;
        }, 5000);
      }, 2000);
    } else {
      this.submitMessage = {
        type: 'error',
        text: 'Please fill in all required fields correctly.'
      };
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        this.submitMessage = null;
      }, 3000);
    }
  }
}
