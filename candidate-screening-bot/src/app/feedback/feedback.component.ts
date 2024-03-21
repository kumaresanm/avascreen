import { HttpClient } from '@angular/common/http';
// candidate-welcome.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'feedback-screener',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})

export class FeedbackComponent {
    ratings: { [key: string]: number } = {};
    comments: { [key: string]: string } = {};
    overallRating: number = 0;
    stars: number[] = [1, 2, 3, 4, 5];

    constructor(private router: Router) {
        const questions = [
        'Technical Skills',
        'Problem-Solving',
        'Communication',
        'Collaboration and Teamwork',
        'Adaptability and Learning Ability',
        'Professionalism and Attitude',
        'Overall Impression'
        ];
        questions.forEach(question => {
        this.ratings[question] = 0; 
        this.comments[question] = ''; 
        });
    }

    getRatingKeys() {
        return Object.keys(this.ratings);
    }

    submitFeedback() {
        console.log('Submitted Ratings:', this.ratings);
        console.log('Submitted Comments:', this.comments);
        this.router.navigate(["report"]);
    }

    rateOverall(rating: number) {
        this.overallRating = rating;
    }
}