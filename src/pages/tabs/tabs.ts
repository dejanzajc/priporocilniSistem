import { Component } from '@angular/core';

import { WorkoutPage } from "../workout/workout";
import { CalendarPage } from '../calendar/calendar';
import { NutritionPage } from "../nutrition/nutrition";
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkoutPage;
  tab2Root = CalendarPage;
  tab3Root = NutritionPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
