
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  VERSION,
  ViewChild
} from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent implements OnInit, OnDestroy {
  fileName = '';

  formData: any = {
    requisitionId: '',
    jobTitle: '',
    jobDescription: '',
    requisitionDate:''
  };
  jobs: any = [{
    requisitionId: '123344',
    jobTitle: 'Senior Software Engineer',
    jobDescription: 'Experienced in UI technologies.',
    requisitionDate: '2024-03-01'
  },
  {
    requisitionId: '223344',
    jobTitle: 'Software Engineer',
    jobDescription: 'Experienced in backend technologies.',
    requisitionDate: '2024-03-10'
  },
  {
    requisitionId: '123348',
    jobTitle: 'Senior SDET',
    jobDescription: 'Experienced in automation Selenium framework.',
    requisitionDate: '2024-03-15'
  }];


  constructor(private _changeDetectorRef: ChangeDetectorRef, private dataService: DataService, private http: HttpClient) {

  }

  ngOnInit() {

  }


  ngOnDestroy(): void {

  }

  onFileSelected(event) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }

  onSubmit(): void {
    if (this.formData.requisitionId && this.formData.jobTitle && this.formData.jobDescription) {
      this.jobs.push({ ...this.formData });
      this.formData = {
        requisitionId: '',
        jobTitle: '',
        jobDescription: '',
        requisitionDate: ''
      };
    }
  }

  deleteJob(job: any): void {
    this.jobs = this.jobs.filter(j => j !== job);
  }

}