import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
export class ReportComponent implements OnInit {
  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {}

  overallScore: number;
  circleColor = '#0e76a8';
  outerStrokeColor = '#ff6600';
  innerStrokeColor = '#f9b262';
  recordedResponses: any[]; // Adjust the type accordingly
  transcriptLines: string[];
  questionCards: QuestionCard[];

  ngOnInit() {
    this.fetchCandidateReport();
  }

  fetchCandidateReport(): void {
    const apiUrl = `http://localhost:3000/api/candidateReport`;
    this.httpClient.get(apiUrl).subscribe({
      next: (report: any) => { // Replace 'any' with your actual expected type
        this.overallScore = report.candidateInfo.interviewScore;
        this.recordedResponses = report.recordedResponses;
        this.transcriptLines = report.transcriptLines;
        this.questionCards = report.questionCards;
      },
      error: (error) => {
        console.error('Error fetching candidate report:', error);
      }
    });
  }

  showCategorizedScores(event: any) {
    // Logic to display an overlay or tooltip with categorized scores
    // You can use Angular Material Tooltip or any other method to display the details
  }

  selectedVideo: string | null = null;

  selectVideo(videoUrl: string): void {
    this.selectedVideo = videoUrl;
  }

  embedYouTubeUrl(videoUrl: string): SafeResourceUrl {
    // Append necessary parameters to the YouTube embedded URL
    const embeddedUrl = `${videoUrl}?autoplay=1&controls=1&showinfo=0&rel=0&loop=0&iv_load_policy=3&modestbranding=1&fs=1&disablekb=1&autohide=1&mute=0`;

    // Sanitize the URL
    return this.sanitizer.bypassSecurityTrustResourceUrl(embeddedUrl);
  }
}
