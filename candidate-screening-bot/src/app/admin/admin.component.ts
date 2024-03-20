import {   ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  VERSION,
  ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  subscription: Subscription;


  candidates = [
    { name: 'Candidate 1', email: 'candidate1@example.com', resume: 'http://example.com/resume1.pdf', report: 'http://example.com/report1.pdf', status: "Pending"},
    { name: 'Candidate 2', email: 'candidate2@example.com', resume: 'http://example.com/resume2.pdf', report: 'http://example.com/report2.pdf', status: "Selected" },
    { name: 'Candidate 3', email: 'candidate3@example.com', resume: 'http://example.com/resume3.pdf', report: 'http://example.com/report3.pdf', status: "Interview Complete"},
    { name: 'Candidate 4', email: 'candidate4@example.com', resume: 'http://example.com/resume4.pdf', report: 'http://example.com/report4.pdf', status: "Pending" },
    { name: 'Candidate 5', email: 'candidate5@example.com', resume: 'http://example.com/resume5.pdf', report: 'http://example.com/report5.pdf', status: "Selected"},
    { name: 'Candidate 6', email: 'candidate6@example.com', resume: 'http://example.com/resume6.pdf', report: 'http://example.com/report6.pdf', status: "Pending" },
    { name: 'Candidate 7', email: 'candidate7@example.com', resume: 'http://example.com/resume7.pdf', report: 'http://example.com/report7.pdf', status: "Rejected"},
    { name: 'Candidate 8', email: 'candidate8@example.com', resume: 'http://example.com/resume8.pdf', report: 'http://example.com/report8.pdf', status: "Pending" },
    { name: 'Candidate 9', email: 'candidate9@example.com', resume: 'http://example.com/resume9.pdf', report: 'http://example.com/report9.pdf', status: "Review Submit"},
    { name: 'Candidate 10', email: 'candidate10@example.com', resume: 'http://example.com/resume10.pdf', report: 'http://example.com/report10.pdf', status: "Pending" },
    { name: 'Candidate 11', email: 'candidate11@example.com', resume: 'http://example.com/resume11.pdf', report: 'http://example.com/report11.pdf', status: "Rejected"},
    { name: 'Candidate 12', email: 'candidate12@example.com', resume: 'http://example.com/resume12.pdf', report: 'http://example.com/report12.pdf', status: "Pending" },

  ];

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

  constructor(private _changeDetectorRef: ChangeDetectorRef, private dataService: DataService) {

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

}