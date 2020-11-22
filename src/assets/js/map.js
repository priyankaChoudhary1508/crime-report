

var x = document.getElementById("demo");
function getLocation() {

    console.log('get location running');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
console.log('showing position')
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  console.log('latitudue', position.coords.latitude);
  console.log('Longitude', position.coords.longitude);
}

function mapFunction(){

        EXIF.getData(this, function() {
    
            var myData = this;
    
            console.log(myData.exifdata);
        });

        document.getElementById('pic-info').innerHTML = 'This photo was taken on ' + myData.exifdata.DateTime + ' with a ' + myData.exifdata.Make + ' ' + myData.exifdata.Model;

}


function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    
    var dd = degrees + (minutes/60) + (seconds/3600);
    
    if (direction == "S" || direction == "W") {
        dd = dd * -1; 
    }
    
    return dd;
}