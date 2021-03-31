import { RouterModule, Routes } from '@angular/router';

import { HistoryTableComponent } from './history-table/history-table.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AuthServiceService } from './services/auth-service.service';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path: 'table', component: HistoryTableComponent, canActivate:[AuthServiceService]},
  { path:'login', component: LoginComponent},
  { path: 'image', component: UploadImageComponent, canActivate:[AuthServiceService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
