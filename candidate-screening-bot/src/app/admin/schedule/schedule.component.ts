import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  formData: any = {
    candidateName: '',
    candidateEmail: '',
    assessmentType: '',
    interviewDate: '',
    jobDescription: '',
    inviteDetails: ''
  };

  candidatesData = [
    {
      candidateName: 'John Smith',
      candidateEmail: 'john.smith@example.com',
      assessmentType: 'Software Engineer',
      interviewDate: '2024-04-15',
      jobDescription: 'Software Engineer Job Description',
      inviteDetails: 'Invitation sent via email'
    },
    {
      candidateName: 'Alice Johnson',
      candidateEmail: 'alice.johnson@example.com',
      assessmentType: 'Front End Developer',
      interviewDate: '2024-04-20',
      jobDescription: 'Front End Developer Job Description',
      inviteDetails: 'Invitation sent via email'
    },
    {
      candidateName: 'Michael Brown',
      candidateEmail: 'michael.brown@example.com',
      assessmentType: 'Back End Developer',
      interviewDate: '2024-04-18',
      jobDescription: 'Back End Developer Job Description',
      inviteDetails: 'Invitation sent via email'
    },
    {
      candidateName: 'Emily Davis',
      candidateEmail: 'emily.davis@example.com',
      assessmentType: 'Project Manager',
      interviewDate: '2024-04-25',
      jobDescription: 'Project Manager Job Description',
      inviteDetails: 'Invitation sent via email'
    },
    {
      candidateName: 'David Wilson',
      candidateEmail: 'david.wilson@example.com',
      assessmentType: 'Trainee',
      interviewDate: '2024-04-30',
      jobDescription: 'Trainee Job Description',
      inviteDetails: 'Invitation sent via email'
    }
  ];


  constructor() { }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your logic to submit form data
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log('File selected:', file);
    // Add your logic to handle the selected file
  }
}
