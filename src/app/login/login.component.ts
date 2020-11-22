import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // variable 
  loginForm: FormGroup;



  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }
  goToLogin(){
    console.log('this is login info', this.loginForm.value); 
    localStorage.setItem('view', 'login');
    if( this.loginForm.value.email =='piyu@gmail.com' && this.loginForm.value.password =='piyu' ){  
      this.router.navigate(['../dashboard']);
    }
    else if( this.loginForm.value.email =='piyu@gmail.com' && this.loginForm.value.password !='piyu' ){
        alert('please enter correct password');
    }
    else if(this.loginForm.value.email !='piyu@gmail.com'){
      alert('Enter Correct Email ID');
    }
  }
}
