import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { Choice } from '../models/choice';
import { downloadJSON } from '../helpers/file.helper';
import { CHOICES, LOCALSTORAGE_CHOICES_KEY } from '../constants/choices';
import { ChoicesFormComponent } from '../components/choices-form/choices-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('choicesForm') private choicesForm: ChoicesFormComponent;

  public choices: Choice[] = this.getSelectedChoicesData();

  public createJson(): void {
    this.choicesForm.isFormValid() && downloadJSON(this.choices, this.getFileName());
  }

  public formChange(): void {
    localStorage.setItem(LOCALSTORAGE_CHOICES_KEY, JSON.stringify(this.choices));
  }

  private getSelectedChoicesData(): Choice[] {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_CHOICES_KEY)) || CHOICES;
  }

  private getFileName(): string {
    return 'test_' + this.choicesForm?.form?.value?.lastName?.toLowerCase() + '_' + this.choicesForm?.form?.value?.firstName?.toLowerCase();
  }
}
