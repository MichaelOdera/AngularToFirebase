import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goToUrl(id) {
    this.router.navigate(['/goals', id])
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(index) {

      let deleteGoal = confirm('Do you want to delete goal: ' + this.goals[index].name + '?');

      if (deleteGoal) {
        this.goals.splice(index, 1);
    }
  }
  goals: Goal[];

  addNewGoal(goal) {
    goal = JSON.parse(JSON.stringify(goal))
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }


  quote: Quote;


  alertService: AlertService;

  constructor(goalService: GoalService, alertService: AlertService, private http: HttpClient,
    private quoteRequestService: QuoteRequestService, private router: Router) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  ngOnInit(): void {
    this.quoteRequestService.quoteRequest();
    this.quote = this.quoteRequestService.quote;
  }

}
