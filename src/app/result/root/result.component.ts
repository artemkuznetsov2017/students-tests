import { Component, ViewEncapsulation } from '@angular/core';

import { InterviewData } from '../../../shared/models/interview';
import { LOCAL_STORAGE } from '../../../shared/constants/local-storage';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResultComponent {
  public interviewData: InterviewData = this.getCheckedData();

  public uploadFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.interviewData = JSON.parse(reader.result as string);
      this.setCheckedDataToLocalStorage(this.interviewData);
    };
    reader.readAsText(file);
  }

  public selectionChange(): void {
    this.setCheckedDataToLocalStorage(this.interviewData);
  }

  public clearCheckedData(): void {
    this.interviewData = null;
    this.setCheckedDataToLocalStorage(this.interviewData);
  }

  private getCheckedData(): InterviewData {
    const interviewData: InterviewData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.interviewCheckedData));

    return interviewData || null;
  }

  private setCheckedDataToLocalStorage(data: InterviewData): void {
    localStorage.setItem(LOCAL_STORAGE.interviewCheckedData, JSON.stringify(data));
  }
}
