import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'dashboard',
   styleUrls: ['dashboard-style.css'],
   templateUrl: 'dashboard-template.html'
})
export class DashboardComponent implements OnInit {

   constructor(private router: Router,
               
               private route: ActivatedRoute)  {
   }

  public ngOnInit() {
  }
 
}
