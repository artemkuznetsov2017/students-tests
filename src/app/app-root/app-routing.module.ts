import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../interview/module/interview.module').then(m => m.InterviewModule),
  },
  {
    path: 'result',
    loadChildren: () => import('../result/module/result.module').then(m => m.ResultModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
