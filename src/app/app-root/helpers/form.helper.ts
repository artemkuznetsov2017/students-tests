import { NgForm } from '@angular/forms';

export function isFormValid(form: NgForm): boolean {
  if (!form) return;

  for (const key in form.controls) {
    form.controls[key].markAsTouched();
    form.controls[key].updateValueAndValidity();
  }

  form.control.markAsTouched();
  form.control.updateValueAndValidity();

  return form.valid;
}

export function getCleanText(text: string): string {
  return text.replace(/\s+/g, '').toLowerCase();
}
