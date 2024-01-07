const tem= document.querySelector(".temp");
const pla= document.querySelector(".place");
const API_KEY = "700da4fe1572d8dc0c5f09b8f41da913";
const COORDS = "coords";

function getWeather(lat, lng){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
      return response.json();
    }).then(function(json){
      const temperture = json.main.temp;
      const place = json.name;
      tem.innerText = `${temperture}°`;
      pla.innerText = place;
    });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
      latitude,
      longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, latitude);
}

function handleGeoFail(positon){
  console.log('Cant access geo location');
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoords(){
  const loadCoords = localStorage.getItem(COORDS);
  if(loadCoords === null){
      askForCoords();
  }else {
      const parseCoords = JSON.parse(loadCoords);
      getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();