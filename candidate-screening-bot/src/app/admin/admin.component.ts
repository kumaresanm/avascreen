import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  VERSION,
  ViewChild
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  fileName = '';

  candidates = [];

  displayedColumns: string[] = [
    'name',
    'email',
    'resume',
    'report',
    'status'
  ];

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataObs$: Observable<any>;
  users: any;
  reports: any;
  userQuestions: any;
  userAnswers: any;
  formData: any = {
    requisitionId: '',
    jobTitle: '',
    jobDescription: ''
  };
  jobs: any = [{
    requisitionId: '123344',
    jobTitle: 'Senior Software Engineer',
    jobDescription: 'Experienced in UI technologies.'
  },
  {
    requisitionId: '223344',
    jobTitle: 'Software Engineer',
    jobDescription: 'Experienced in backend technologies.'
  },
  {
    requisitionId: '123348',
    jobTitle: 'Senior SDET',
    jobDescription: 'Experienced in automation Selenium framework.'
  }];


  constructor(private _changeDetectorRef: ChangeDetectorRef, private dataService: DataService, private http: HttpClient) {

  }

  ngOnInit() {
    this.setPagination(this.candidates);

    this.subscription = this.dataService.getUsers().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.subscription = this.dataService.getCandidateData().subscribe(
      (response) => {
        this.candidates = response;
        this.setPagination(this.candidates)
        console.log(this.candidates);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.subscription = this.dataService.getReports().subscribe(
      (response) => {
        this.reports = response;
        console.log(this.reports);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.subscription = this.dataService.getUserQuestions().subscribe(
      (response) => {
        this.userQuestions = response;
        console.log(this.userQuestions);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.subscription = this.dataService.getUserAnswers().subscribe(
      (response) => {
        this.userAnswers = response;
        console.log(this.userAnswers);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );


  }

  setPagination(tableData) {
    this.dataSource = new MatTableDataSource<any>(tableData);
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataObs$ = this.dataSource.connect();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
        jobDescription: ''
      };
    }
  }

  deleteJob(job: any): void {
    this.jobs = this.jobs.filter(j => j !== job);
  }

}