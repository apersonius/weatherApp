//javascript
let searchBtn=document.getElementById('searchBtn')
let APIKEY = 'ef1f171918d3fb34ad0432afd2abf05f'

function searchWeatherData(event) {
    event.preventDefault();

    let cityName = document.getElementById('cityName').value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data);

     forecastData(cityName)   
    })

}

function forecastData(cityName) {
    let url=`api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY}`;

    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data);
    })
}


searchBtn.addEventListener('click', searchWeatherData);
