import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
import { GoogleSearchComponent } from './google-search/google-search.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';


const routes: Routes = [
  { path: '', redirectTo:"/goals", pathMatch:"full"},
  { path: 'goals', component: GoalComponent},
  { path: 'goals/:id', component: GoalDetailComponent},
  { path: 'about', component: AboutComponent},
  { path: 'search', component: GoogleSearchComponent},
  { path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
