import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  candidates = [
    { name: 'Candidate 1', email: 'candidate1@example.com', resume: 'http://example.com/resume1.pdf', report: 'http://example.com/report1.pdf' },
    { name: 'Candidate 2', email: 'candidate2@example.com', resume: 'http://example.com/resume2.pdf', report: 'http://example.com/report2.pdf' },
    // Add more candidates as needed
  ];
}
