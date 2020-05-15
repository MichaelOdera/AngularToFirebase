import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  goals: Goal[] = [
    new Goal(1, 'Finding Nemo', 'Watching a tutorial clip', new Date(2019, 3, 14)),
    new Goal(2, 'Breaking bread', 'The upper room experience', new Date(2020, 2, 16)),
    new Goal(3, 'Seeking for refuge', 'The place of safety is to be found', new Date(2020, 5, 11)),
    new Goal(4, 'Learn that grace is Sufficient', 'Watching for the strength that is greater than I', new Date(2020, 8, 20))
  ];


  getGoals(){
    return this.goals;
  }

  getGoal(id){
    for (let goal of this.goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}
