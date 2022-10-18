import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { COMPONENTS } from '../components';
import { InterviewComponent } from '../root/interview.component';
import { InterviewRoutingModule } from '../routing/interview.routing.module';

@NgModule({
  declarations: [
    InterviewComponent,
    COMPONENTS,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    InterviewRoutingModule,
  ],
  providers: [],
  bootstrap: [InterviewComponent],
})
export class InterviewModule { }
