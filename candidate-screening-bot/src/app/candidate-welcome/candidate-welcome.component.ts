import { HttpClient } from '@angular/common/http';
// candidate-welcome.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-welcome',
  templateUrl: './candidate-welcome.component.html',
  styleUrls: ['./candidate-welcome.component.css'],
})
export class CandidateWelcomeComponent {
  uploadProgress: number = 0;
  idUploadProgress: number = 0;
  videoUploadProgress: number = 0;
  uploadInterval: any;
  @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement: ElementRef;
  mediaRecorder: MediaRecorder;
  recordedBlobs: Blob[] = [];
  isRecording: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: [''],
    });
  }

  async setupVideo() {
    try {
      const constraints = { video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoElement.nativeElement.srcObject = stream;
      // Here you're setting the stream to the video element but not recording yet.
    } catch (e) {
      console.error('navigator.getUserMedia error:', e);
    }
  }

  startCamera() {
    const constraints = { video: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play(); // Start playing the video stream in the video element
      })
      .catch((error) => {
        console.error('Error accessing the webcam', error);
      });
  }

  onResumeUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.uploadProgress = 0; // Reset progress
      clearInterval(this.uploadInterval); // Clear existing interval if any
      this.uploadInterval = setInterval(() => {
        if (this.uploadProgress >= 100) {
          clearInterval(this.uploadInterval);
        } else {
          this.uploadProgress += 10; // Increment mock progress
        }
      }, 200); // Update progress every 200ms
    }
  }

  startRecording() {
    if (!this.videoElement.nativeElement.srcObject) {
      this.startCamera();
    }

    this.recordedBlobs = [];
    const options = { mimeType: 'video/webm;codecs=vp9,opus' };
    this.mediaRecorder = new MediaRecorder(
      this.videoElement.nativeElement.srcObject as MediaStream,
      options
    );

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }
    };

    this.mediaRecorder.start(); // No slice argument needed here
    console.log('MediaRecorder started', this.mediaRecorder);
    this.isRecording = true;
  }

  stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
      this.mediaRecorder.stop(); // Stops the recording
    }

    if (this.videoElement.nativeElement.srcObject) {
      const tracks = (
        this.videoElement.nativeElement.srcObject as MediaStream
      ).getTracks();
      tracks.forEach((track) => track.stop()); // Stop each track on the stream
    }

    this.videoElement.nativeElement.srcObject = null; // Clear the source object

    // Update the videoElement's src to point to the recorded video for playback
    const videoBlob = new Blob(this.recordedBlobs, { type: 'video/webm' });
    const formData = new FormData();
    formData.append('video', videoBlob, 'introduction.webm');
    if (videoBlob) {
      this.videoUploadProgress = 0; // Reset progress
      clearInterval(this.uploadInterval); // Clear existing interval if any
      this.uploadInterval = setInterval(() => {
        if (this.videoUploadProgress >= 100) {
          clearInterval(this.uploadInterval);
        } else {
          this.videoUploadProgress += 10; // Increment mock progress
        }
      }, 200); // Update progress every 200ms
    }

    // Reset the recordedBlobs array for any future recordings
    this.recordedBlobs = [];

    this.isRecording = false; // Update the recording state
  }

  uploadVideo() {
    const videoBlob = new Blob(this.recordedBlobs, { type: 'video/webm' });
    const formData = new FormData();
    formData.append('video', videoBlob, 'introduction.webm');
    if (videoBlob) {
      this.videoUploadProgress = 0; // Reset progress
      clearInterval(this.uploadInterval); // Clear existing interval if any
      this.uploadInterval = setInterval(() => {
        if (this.videoUploadProgress >= 100) {
          clearInterval(this.uploadInterval);
        } else {
          this.videoUploadProgress += 10; // Increment mock progress
        }
      }, 200); // Update progress every 200ms
    }
    // Use Angular HttpClient to post the form data to your server
    this.httpClient.post('your-upload-endpoint', formData).subscribe(
      (response) => console.log('Upload success', response),
      (error) => console.error('Upload error', error)
    );
  }

  onIDUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.idUploadProgress = 0; // Reset progress
      clearInterval(this.uploadInterval); // Clear existing interval if any
      this.uploadInterval = setInterval(() => {
        if (this.idUploadProgress >= 100) {
          clearInterval(this.uploadInterval);
        } else {
          this.idUploadProgress += 10; // Increment mock progress
        }
      }, 200); // Update progress every 200ms
    }
  }

  finalizeProcess() {
    this.router.navigate(['candidate']);
  }
}
