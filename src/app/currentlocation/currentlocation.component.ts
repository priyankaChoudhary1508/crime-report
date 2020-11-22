import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentlocation',
  templateUrl: './currentlocation.component.html',
  styleUrls: ['./currentlocation.component.css']
})
export class CurrentlocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if( !navigator.geolocation){
      console.log('geolocation not supported');
    }
    else{
      navigator.geolocation.getCurrentPosition( position => {
        console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
      })
    }
  }

}
