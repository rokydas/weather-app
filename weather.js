const apiKey = "9c03ae49705801d954820517e5c354e8";

document.getElementById('search').addEventListener('click', function(){
    searchCity();
})

document.getElementById('input-city').addEventListener('keypress', function(){
    if(event.keyCode === 13){
        searchCity();
    }
})

function searchCity(){
    const inputCity = document.getElementById('input-city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('city').innerText = `${data.name}, ${data.sys.country}`;
        const temp = (data.main.temp - 273.15).toFixed(2);
        const lowestTemp = (data.main.temp_min - 273.15).toFixed(2);
        const highestTemp = (data.main.temp_max - 273.15).toFixed(2);
        document.getElementById('temperature').innerText = `${temp} °C`;
        document.getElementById('lowest-highest').innerText = `${lowestTemp} °C (min) / ${highestTemp} °C (max)`;
        document.getElementById('situation').innerText = data.weather[0].main;
    })
}


