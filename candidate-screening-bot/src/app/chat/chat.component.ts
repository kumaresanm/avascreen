import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  chatHistory: { content: string, sender: string }[] = []; 

  mockData = {
      "Code Snippet Questions": [
          {
              "Question": "Write a Python function to find the largest number in a list.",
              "CandidateResponse": "def find_max(numbers): return max(numbers) if numbers else None",
              "AIReview": "Correct and efficient code provided, demonstrating good problem-solving skills in Python.",
              "Score": 8
          },
          {
              "Question": "Can you write a C++ program to demonstrate file handling?",
              "CandidateResponse": "Here's a simple example: open a file, read it, then close it.",
              "AIReview": "The candidate provided a straightforward explanation but did not supply the complete code.",
              "Score": 5
          },
          {
              "Question": "Please provide a short Python script to reverse a string.",
              "CandidateResponse": "You can reverse a string with: return my_string[::-1]",
              "AIReview": "Direct and efficient Python snippet for reversing a string, showcasing good understanding of Python syntax.",
              "Score": 8
          }
      ],
      "Basic Introduction": [
          {
              "Question": "Can you give us a brief overview of your background and what motivated you to pursue a degree in Biotechnology?",
              "CandidateResponse": "I've always liked biology and technology. I chose Biotechnology to explore both.",
              "AIReview": "The candidate provided a clear, though brief, insight into their motivation, connecting personal interests with their chosen field.",
              "Score": 6
          },
          {
              "Question": "Could you elaborate on your project 'Bondora Statistics' during your summer internship, specifically the methodologies you implemented in your credit risk models?",
              "CandidateResponse": "I used machine learning to predict credit risk. It helped minimize defaults and optimize returns.",
              "AIReview": "The response is succinct, directly addressing the project's core objective and outcome.",
              "Score": 6
          },
          {
              "Question": "Discuss a significant challenge you faced during your Machine Learning project and how you overcame it.",
              "CandidateResponse": "Handling imbalanced data was tough. I used a technique called SMOTE to fix it.",
              "AIReview": "Short and to the point, the candidate efficiently describes the problem and the solution.",
              "Score": 7
          }
      ],
      "Technical Questions": [
          {
              "Question": "You've listed C, C++, and Python as your programming skills. Can you discuss a scenario where you chose one language over the others for a particular project, and why?",
              "CandidateResponse": "I picked Python for data analytics because of its powerful libraries, making tasks easier.",
              "AIReview": "The response is concise, explaining the practical preference for Python due to its libraries.",
              "Score": 6
          },
          {
              "Question": "How do you ensure the security and scalability of your Python applications?",
              "CandidateResponse": "I focus on clean code and use specific tools to check security and improve scalability.",
              "AIReview": "Straightforward answer showcasing general awareness of key development practices.",
              "Score": 6
          },
          {
              "Question": "Can you explain the concept of polymorphism in C++ with an example?",
              "CandidateResponse": "Polymorphism lets us use different classes as if they were one. Like shapes being drawn differently.",
              "AIReview": "Simplistic yet effective explanation of polymorphism, providing an understandable analogy.",
              "Score": 7
          }
      ],
    }

    currentQuestionIndex = 0;
    currentCategoryIndex = 0;
    currentQuestionType: string = '';
    currentQuestion: string = '';
    remainingTime: number = 180;

  constructor(private router: Router) {
    this.currentQuestion = this.getNextQuestion();
  }

  getNextQuestion(): string {
    const currentCategory = Object.keys(this.mockData)[this.currentCategoryIndex];
    this.currentQuestionType = currentCategory;
    if (this.currentQuestionType === 'Code Snippet Questions') {
      this.remainingTime = 180;
      this.startTimer();
    }
    const questions = this.mockData[currentCategory];
    if (this.currentQuestionIndex < questions.length) {
      const nextQuestion = questions[this.currentQuestionIndex].Question;
      this.currentQuestionIndex++;
      return nextQuestion;
    } else {
      this.currentQuestionIndex = 0;
      this.currentCategoryIndex++;
      if (this.currentCategoryIndex < Object.keys(this.mockData).length) {
        return this.getNextQuestion();
      } else {
        return 'Thank you for completing the test.';
      }
    }
  }

  sendMessage() {
    console.log('User response:', this.userInput);
    this.currentQuestion = this.getNextQuestion();
    this.userInput = '';
    if (this.currentQuestion === 'Thank you for completing the test.') {
      this.router.navigate(["feedback"]);
    } 
  }

  startTimer() {
    const interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
