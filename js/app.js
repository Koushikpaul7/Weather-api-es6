const API_KEY=`a7fe6e3949839ee5d5979de3ec1dd377`
const searchTemperature=()=>{
    const city=document.getElementById('city-name').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}

const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}
const displayTemperature=temperature=>{
    setInnerText('city',temperature.name)
    setInnerText('temperature',temperature.main.temp)
    setInnerText('condition',temperature.weather[0].main)
    
    const url=`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const img=document.getElementById('weather-icon');
    img.setAttribute('src',url);
}