//Weather app that fetches and displays weather information based on Users location
import React, { useEffect, useState } from "react";

export default function Thirteen(){

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}
                    &appid={4c80b03d9b207ec358539d8c4ef7e9b4}`)
                    .then((response) => response.json());
                    .then((data) => setWeather(data));

            })
        }
    })

    return(
        <div>

        </div>
    )
}