import React, { useState } from "react";

export default function SearchBar(){

    const [city,setCity] = useState("");
    const [data, setData] = useState([]);
    const [imgUrl,setImgUrl] = useState("");
    const [feelsLike,setFeelsLike] = useState();
    const [temp, setTemp] = useState();
    const [humidity,setHumidity] = useState();
    const [mintemp, setMintemp] = useState();
    const [maxtemp, setMaxtemp] = useState();
    const [firstTime,setFirstTime] = useState(true);
    const [wind,setWind] = useState({
        deg: "",
        speed: ""
    });
    

    

    function handleChange(event){
        const newValue = event.target.value;
        setCity(newValue);             
    }
    function handleClick(){
        const apiKey = "ea1c7950039a34f04bfa2efbc6d95b28";
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
        
        fetch(url)
        .then((response) => response.json())
        .then(result => {
        setData(result)
        console.log(result);
        var icon = result.weather[0].icon;//for accessing attributes take a look at data by console loggin'it.
        var imgURL="http://openweathermap.org/img/wn/"+icon+"@4x.png";
        setImgUrl(imgURL);
        setFeelsLike(result.main.feels_like);
        setTemp(result.main.temp);
        setHumidity(result.main.humidity);
        setMintemp(result.main.temp_min);
        setMaxtemp(result.main.temp_max);
        setWind({deg:result.wind.deg, speed:result.wind.speed});
      });        
      setFirstTime(false);
    }
  
    return(
        <div>
        <div className="search-container">
        <h1>Enter City :</h1>
        <input onChange={handleChange} className="searchbar" type="text" name="cityname" id="cityname" value={city} />
        <button onClick={handleClick} className="searchbtn">Search</button>
        </div>
        
        <div className="display-data">
        <h1>Your City : {!firstTime && data.name}</h1>
        {!firstTime && <img src={imgUrl} alt="" />}

        {!firstTime && <h3>Feels Like : {feelsLike} °C</h3> }

        {!firstTime && <h3>Temprature : {temp} °C</h3> }

        {!firstTime && <h3>Humidity : {humidity} %</h3> }

        {!firstTime && <h3>Minimum Temprature : {mintemp} °C</h3> }

        {!firstTime && <h3>Maximum Temprature : {maxtemp} °C</h3> }

        {!firstTime && <h3>Wind speed: {wind.speed}km/h ({wind.deg}°)</h3> }


        
        </div>
        
        </div>
    )
}