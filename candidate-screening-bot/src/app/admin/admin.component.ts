import {   ChangeDetectorRef,
  Component,
  OnInit,
  VERSION,
  ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;;

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

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    this.setPagination(this.candidates);
  }

  setPagination(tableData) {
    this.dataSource = new MatTableDataSource<any>(tableData);
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataObs$ = this.dataSource.connect();

    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}