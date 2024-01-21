const key = "7a4678a760609bad63de730dab5c171b"

function showScreenData(data, location){
    document.querySelector(".city").innerHTML = "Tempo em "+ location[0].name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-prev").innerHTML = data.weather[0].description
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".umid").innerHTML = "Umidade: " + data.main.humidity + "%"
}

async function searchCity(city){

    const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`).then( response => response.json())

    const lat = location[0].lat
    const lon = location[0].lon

    console.log(location)

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    console.log(data)

    showScreenData(data, location) 
}

function buttonClick(){
    const city = document.querySelector(".input-city").value
    searchCity(city)
}