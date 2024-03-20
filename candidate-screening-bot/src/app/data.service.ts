
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>  {
    const usersUrl = this.url + "api/users";
    const data = this.http.get<any>(usersUrl);
    return data;
  }

  getReports(): Observable<any>  {
    const reportUrl = this.url + "api/reports";
    return this.http.get<any>(reportUrl);
  }

  getUserQuestions(): Observable<any>  {
    const questionSetsUrl = this.url + "api/questionsets";
    return this.http.get<any>(questionSetsUrl);
  }

  getUserAnswers(): Observable<any>  {
    const reportUrl = this.url + "api/useranswers";
    return this.http.get<any>(reportUrl);
  }

}
