import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ChatComponent } from './chat/chat.component';
import { ReportComponent } from './report/report.component';
import { CandidateWelcomeComponent } from './candidate-welcome/candidate-welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'chat', component: ChatComponent },
  {path: 'report', component: ReportComponent},
  { path: 'welcome', component: CandidateWelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
