import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { CHOICES } from '../constants/choices';
import { Choice } from '../../../shared/models/choice';
import { InterviewData } from '../../../shared/models/interview';
import { downloadJSON } from '../../../shared/helpers/file.helper';
import { LOCAL_STORAGE } from '../../../shared/constants/local-storage';
import { ChoicesFormComponent } from '../components/choices-form/choices-form.component';

@Component({
  selector: 'interview',
  templateUrl: './interview.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class InterviewComponent {
  @ViewChild('choicesForm') private choicesForm: ChoicesFormComponent;

  public choices: Choice[] = this.getSelectedChoicesData();

  public createJson(): void {
    downloadJSON(this.getInterviewData(), this.getFileName());
  }

  public formChange(): void {
    localStorage.setItem(LOCAL_STORAGE.interviewData, JSON.stringify(this.getInterviewData()));
  }

  private getSelectedChoicesData(): Choice[] {
    const interviewData: InterviewData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.interviewData));

    return interviewData?.choices || CHOICES;
  }

  private getFileName(): string {
    return this.getInterviewData()?.lastName + '_' + this.getInterviewData()?.firstName + '_interview_' + new Date().toLocaleDateString();
  }

  private getInterviewData(): InterviewData {
    return {
      firstName: this.choicesForm?.form?.value?.firstName?.toLowerCase(),
      lastName: this.choicesForm?.form?.value?.lastName?.toLowerCase(),
      choices: this.choices,
    };
  }
}
