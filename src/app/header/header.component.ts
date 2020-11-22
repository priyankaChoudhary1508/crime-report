import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  view: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.view = localStorage.getItem('view');
  }

  goToLogout(){
    this.view = 'logout';
    localStorage.setItem('view', 'logout');
    this.router.navigate(['../home']);
  }

}
