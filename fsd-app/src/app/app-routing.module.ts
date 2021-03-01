import { RouterModule, Routes } from '@angular/router';

import { HistoryTableComponent } from './history-table/history-table.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login', component: LoginComponent},
  { path: 'table', component: HistoryTableComponent},
  { path: 'upload-image', component: UploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
