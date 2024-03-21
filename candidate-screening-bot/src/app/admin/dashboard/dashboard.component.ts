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
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  fileName = '';

  candidates = [];

  displayedColumns: string[] = [
    'Name',
    'Email',
    'Resume',
    'Report',
    'CompletedDate',
    'NextInterviewDate',
    'Status'
  ];

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataObs$: Observable<any>;
 


  constructor(private _changeDetectorRef: ChangeDetectorRef, private dataService: DataService, private http: HttpClient) {

  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'SELECTED':
        return 'green';
      case 'PENDING':
        return 'orange';
      case 'COMPLETED':
        return 'blue';
      default:
        return 'black'; // Default color
    }
  }
  

  ngOnInit() {
    this.setPagination(this.candidates);

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