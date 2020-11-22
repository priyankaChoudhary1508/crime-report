import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  login: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,) {
    
   }

  ngOnInit(): void {
  }
  goToFormForAccident(){

    this.router.navigate(['../form'], {queryParams: {crime_type : 'accident'}, relativeTo: this.route});
  }
  goToFormForMurder(){
    this.router.navigate(['../form'], {queryParams: {crime_type : 'murder'}, relativeTo: this.route});
  }
  goToFormForRobbery(){
    this.router.navigate(['../form'], {queryParams: {crime_type : 'robbery'}, relativeTo: this.route});
  }
  goToFormForKidnaping(){
    this.router.navigate(['../form'], {queryParams: {crime_type : 'kidnaping'}, relativeTo: this.route});
  }
  goToFormForFights(){
    this.router.navigate(['../form'], {queryParams: {crime_type : 'fight'}, relativeTo: this.route});
  }
  goToFormForStolenVehicle(){
    this.router.navigate(['../form'], {queryParams: {crime_type : 'stolen-vehicle'}, relativeTo: this.route});
  }
  goToFormForMissingPerson(){
    this.router.navigate(['../form'], {queryParams: {crime_type : 'missing-person'}, relativeTo: this.route});
  }
  goToFormForOthers(){
    this.router.navigate(['../form'], {queryParams: {crime_type : 'others'}, relativeTo: this.route});
  }
}
