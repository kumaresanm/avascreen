import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebcamModule } from 'ngx-webcam';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

// Custom Modules
import { CustomMaterialModule } from './core/material.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ChatComponent } from './chat/chat.component';
import { ReportComponent } from './report/report.component';
import { FeedbackComponent } from './feedback/feedback.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { SafeUrlPipe } from './pipes/safe-url.pipe';

// Third-Party Modules
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CandidateWelcomeComponent } from './candidate-welcome/candidate-welcome.component';

import { DataService } from './data.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { RequisitionComponent } from './admin/requisition/requisition.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CandidateComponent,
    ChatComponent,
    ReportComponent,
    SafeUrlPipe,
    CandidateWelcomeComponent,
    FeedbackComponent,
    DashboardComponent,
    ScheduleComponent,
    RequisitionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    WebcamModule,
    // Angular Material Modules
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDividerModule,
    MatChipsModule,
    MatListModule,
    MatPaginatorModule,
    NgApexchartsModule,
    MatStepperModule,
    // Custom Modules
    CustomMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    MatTabsModule,
    // Third-Party Modules
    NgCircleProgressModule.forRoot({
      radius: 80,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C0A8",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
