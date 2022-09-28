import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { Choice } from '../../models/choice';
import { isFormValid } from '../../helpers/form.helper';

@Component({
  selector: 'choices-form',
  templateUrl: './choices-form.component.html',
  styleUrls: ['./choices-form.component.scss'],
})
export class ChoicesFormComponent {
  @ViewChild('form') public form: NgForm;

  @Input() public choices: Choice[];

  @Output() public submitForm: EventEmitter<void> = new EventEmitter<void>();

  public isFormValid(): boolean {
    return isFormValid(this.form);
  }
}
