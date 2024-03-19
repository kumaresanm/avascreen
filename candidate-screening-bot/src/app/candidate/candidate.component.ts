import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  candidateVideoUrl = 'https://www.youtube.com/embed/example-video-id';
  public webcamImage: WebcamImage | undefined; // Change here
  public trigger: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('Received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public handleError(error: any): void { // Change type to any or remove parameter
    console.error('Webcam initialization error', error);
    // Handle error here
  }
}
