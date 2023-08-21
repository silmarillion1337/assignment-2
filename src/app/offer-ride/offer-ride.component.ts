import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css'],
})
export class OfferRideComponent {
  contactForm: FormGroup;
  submittedData: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      startLocation: ['', Validators.required],
      destination: ['', Validators.required],
      car: ['', Validators.required],
      seatsAvailable: ['', [Validators.required, seatsAvailableValidator]],
    });
  }

  onSubmit() {
    if (this.contactForm?.valid) {
      const formData = this.contactForm.value;
      this.submittedData.push(formData);
      this.contactForm.reset();
      alert(
        `Offered a ride, Name: ${formData.name}, Start Location: ${formData.startLocation}, Destination: ${formData.destination}, Car: ${formData.car}, Seats Available: ${formData.seatsAvailable}.`
      );
    } else {
      alert('Form is invalid');
    }
  }
}

/** The number of seats available should be between 0 and 8 */
function seatsAvailableValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (
    control.value !== undefined &&
    (isNaN(control.value) || control.value <= 0 || control.value >= 8)
  ) {
    return { seatsAvailableRange: true };
  }
  return null;
}
