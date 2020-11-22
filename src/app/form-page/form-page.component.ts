import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  // variables
  questionAccidentFrom: FormGroup;
  queryParam: any;
  
  constructor( private fb: FormBuilder, private router: Router, private activatedRoutes: ActivatedRoute) {
    this.queryParam = this.activatedRoutes.snapshot.queryParams.crime_type;
    this.queryParam = this.queryParam.toUpperCase();
    this.questionAccidentFrom = this.fb.group({
      date: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      crimeType: new FormControl('accident', Validators.required),
      location: new FormControl('', Validators.required),
      image: new FormControl('')
    });
   }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log('form value', this.questionAccidentFrom.value);
  
    // redirect to dashboard
    // this.router.navigate(['../dashboard']);
  }
}
