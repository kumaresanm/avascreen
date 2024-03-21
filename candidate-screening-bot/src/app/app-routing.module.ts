import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ChatComponent } from './chat/chat.component';
import { ReportComponent } from './report/report.component';
import { CandidateWelcomeComponent } from './candidate-welcome/candidate-welcome.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RequisitionComponent } from './admin/requisition/requisition.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'requisition', component: RequisitionComponent },
    { path: 'schedule', component: ScheduleComponent },

  ]},
  { path: 'candidate', component: CandidateComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'report', component: ReportComponent },
  { path: 'welcome', component: CandidateWelcomeComponent },
  { path: 'feedback', component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
