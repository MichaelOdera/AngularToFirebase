import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {

      let deleteGoal = confirm('Do you want to delete goal: ' + this.goals[index].name + '?');

      if (deleteGoal) {
        this.goals.splice(index, 1);
      }
    }
  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  goals: Goal[] = [
    new Goal(1, 'Finding Nemo', 'Watching a tutorial clip', new Date(2019, 3, 14)),
    new Goal(2, 'Breaking bread', 'The upper room experience', new Date(2020, 2, 16)),
    new Goal(3, 'Seeking for refuge', 'The place of safety is to be found', new Date(2020, 5, 11)),
    new Goal(4, 'Learn that grace is Sufficient', 'Watching for the strength that is greater than I', new Date(2020, 8, 20))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
