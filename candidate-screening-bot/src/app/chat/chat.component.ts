import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput: string = '';
  chatHistory: { content: string, sender: string }[] = []; // Array of message objects

  constructor(private http: HttpClient) { }

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.http.post('http://localhost:3000/chat', { message: this.userInput })
      .pipe(
        catchError(error => {
          console.error('Error sending message:', error);
          return of({ message: 'An error occurred' });
        })
      )
      .subscribe((response: any) => {
        this.chatHistory.push({ content: this.userInput, sender: 'user' });
        this.chatHistory.push({ content: response.message, sender: 'AI' });
        this.userInput = '';
      });
  }
}
