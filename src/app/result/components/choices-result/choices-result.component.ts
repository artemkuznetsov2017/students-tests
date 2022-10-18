import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { Choice } from '../../../../shared/models/choice';
import { InterviewData } from '../../../../shared/models/interview';

@Component({
  selector: 'choices-result',
  templateUrl: './choices-result.component.html',
  styleUrls: ['./choices-result.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChoicesResultComponent {
  @Input() public interviewData: InterviewData;

  @Output() public selectionChange: EventEmitter<void> = new EventEmitter<void>();

  public getRightVariants(choices: Choice[]): number {
    return choices.filter(it => it.isRight)?.length;
  }
}
