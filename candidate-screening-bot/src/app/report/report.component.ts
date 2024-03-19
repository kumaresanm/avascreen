import { Component } from '@angular/core';

interface QuestionCard {
  questionNumber: string;
  question: string;
  reviewSummary: string;
  progressBarValue: number;
  score: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  overallScore = 75;
  circleColor = '#0e76a8';
  outerStrokeColor = '#ff6600';
  innerStrokeColor = '#f9b262';
  // Mock data for recordedResponses
  recordedResponses = [
    {
      question: "Could you help me understand more about your background by giving a brief introduction of yourself?",
      videoUrl: "https://www.youtube.com/watch?v=k5E2AVpwsko", // Replace with actual path
      thumbnailUrl: "https://images.vexels.com/media/users/3/139567/isolated/preview/582aca4000ab46231333a1df893c947e-apple-logo-by-vexels.png", // Replace with actual path
      score: 8,
      maxScore: 10,
      duration: new Date(120000), // This represents a duration of 2 minutes
      transcript: "Here would be the transcript of the candidate's response."
    }
    // You can add more response objects here
  ];

  questionCards: QuestionCard[] = [
    {
      questionNumber: 'Question 1',
      question: 'How do you manage security vulnerabilities inherent to using third-party CSS frameworks like Bootstrap? Give an example.',
      reviewSummary: 'The candidate understands Bootstrap\'s integration but failed to explain detailed measures to manage security vulnerabilities.',
      progressBarValue: 50,
      score: '5/10'
    },
    {
      questionNumber: 'Question 2',
      question: 'Another question text here',
      reviewSummary: 'Review summary of the second question.',
      progressBarValue: 75,
      score: '7.5/10'
    }
  ];

  showCategorizedScores(event: any) {
    // Logic to display an overlay or tooltip with categorized scores
    // You can use Angular Material Tooltip or any other method to display the details
  }

  selectedVideo: string | null = null;

  selectVideo(videoUrl: string): void {
    this.selectedVideo = videoUrl;
  }
}
