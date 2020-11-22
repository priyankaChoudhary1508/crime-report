// <reference types="googlemaps" />
import { Component, OnInit, NgZone, ElementRef, Input, ViewChild } from '@angular/core';
// import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MapsAPILoader } from '@agm/core';



interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}




@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  // title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  title: string = 'AGM project';
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number;
  address: string;
  private geoCoder;
 
  @ViewChild('search')
  public searchElementRef: ElementRef;

  @Input() fromParent;
  agmMap: any;
 
 
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private apiloader: MapsAPILoader,
    private ngZone: NgZone,
    // public activeModal: any
  ) { }
 
 
  ngOnInit() {
    this.getCurrentLocation();
    this.get()  
    // this.agmMap.triggerResize(true);  


    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          console.log(this.latitude, 'latitude');
          this.zoom = 12;
        });
      });
    });
  }
 
  // Get Current Location Coordinates
 
 
 
  

  
   
  saveLocation(){
    const data = {
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude
    }
  }
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = 27.2046;
        this.longitude = 77.4977;
        this.zoom = 8;
        console.log('location', this.latitude)
        this.getAddress(this.latitude, this.longitude);
      });
      
    }
  }
  markerDragEnd($event: any) {
    console.log($event);
    this.latitude = $event.latLng.lat.name;
    this.longitude = $event.latLng.lng.name;
    console.log('new location', this.latitude, this.latitude);
    this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }
  
  closeModal(sendData) { 
    // this.activeModal.close(sendData); 
  }

  getCurrentLocation(){
    console.log('navigator.geolocation', navigator.geolocation);
    navigator.geolocation.getCurrentPosition( (position: Position) => {
      // this.lat: ${position.coords.latitude};  
      // this.lng = position.coords.longitude;  
      console.log(`lat : ${position.coords.latitude}, long: ${position.coords.longitude}`);
    })
  }

  get() {  
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position: Position) => {  
            if (position) {  
                this.lat = position.coords.latitude;  
                this.lng = position.coords.longitude;  
                // this.getAddress = (this.lat, this.lng)  
                console.log(position)  
                this.apiloader.load().then(() => {  
                    let geocoder = new google.maps.Geocoder;  
                    let latlng = {  
                        lat: this.lat,  
                        lng: this.lng  
                    };  
                    geocoder.geocode({  
                        'location': latlng  
                    }, function(results) {  
                        if (results[0]) {  
                            this.currentLocation = results[0].formatted_address;  
                            console.log(this.assgin);  
                        } else {  
                            console.log('Not found');  
                        }  
                    });  
                });  
            }  
        })  
    }  
} 
mapClicked($event) {  
  this.latitude = $event.coords.lat,  
      this.longitude = $event.coords.lng  
  this.apiloader.load().then(() => {  
      let geocoder = new google.maps.Geocoder;  
      let latlng = {  
          lat: this.latitude,  
          lng: this.longitude  
      };  
      geocoder.geocode({  
          'location': latlng  
      }, function(results) {  
          if (results[0]) {  
              this.currentLocation = results[0].formatted_address;  
              console.log(this.currentLocation);  
          } else {  
              console.log('Not found');  
          }  
      });  
  });  
}

  
}