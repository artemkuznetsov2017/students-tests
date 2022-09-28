import { Component, ViewChild } from '@angular/core';

import { Choice } from '../models/choice';
import { CHOICES } from '../constants/choices';
import { ChoicesFormComponent } from '../components/choices-form/choices-form.component';
import { downloadJSON } from '../helpers/file.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('choicesForm') private choicesForm: ChoicesFormComponent;

  public choices: Choice[] = CHOICES;

  public createJson(): void {
    this.choicesForm.isFormValid() && downloadJSON(this.choices);
  }
}
