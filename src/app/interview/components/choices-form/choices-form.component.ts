import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';

import { CHOICE_TYPE } from 'src/shared/constants/choice-type';
import { Choice, ChoiceVariant } from '../../../../shared/models/choice';
import { getCleanText, isFormValid } from '../../../../shared/helpers/form.helper';

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

  public isCheckboxChecked(variant: ChoiceVariant, choice: Choice): boolean {
    const DATA = choice.value as string[] || [];

    return DATA.some((it: string) => getCleanText(it) === getCleanText(variant.text));
  }

  public setCheckboxChoiceValue(checked: boolean, variant: ChoiceVariant, choice: Choice): void {
    choice.value = choice.value ? choice.value as string[] : [];

    checked
      ? choice.value.push(variant.text)
      : choice.value = [...choice.value.filter(it => getCleanText(it) !== getCleanText(variant.text))];
  }
}
