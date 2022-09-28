import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';

import { Choice } from '../../models/choice';
import { CHOICE_TYPE } from '../../constants/choices';
import { isFormValid } from '../../helpers/form.helper';

@Component({
  selector: 'choices-form',
  templateUrl: './choices-form.component.html',
  styleUrls: ['./choices-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChoicesFormComponent {
  @ViewChild('form') public form: NgForm;

  @Input() public choices: Choice[];

  @Output() public submitForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() public formChange: EventEmitter<void> = new EventEmitter<void>();

  public readonly CHOICE_TYPE = CHOICE_TYPE;

  public isFormValid(): boolean {
    return isFormValid(this.form);
  }
}
