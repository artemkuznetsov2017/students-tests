import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { COMPONENTS } from '../components';
import { ResultComponent } from '../root/result.component';
import { ResultRoutingModule } from '../routing/result.routing.module';

@NgModule({
  declarations: [
    ResultComponent,
    COMPONENTS,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    ResultRoutingModule,
  ],
  providers: [],
  bootstrap: [ResultComponent],
})
export class ResultModule { }
