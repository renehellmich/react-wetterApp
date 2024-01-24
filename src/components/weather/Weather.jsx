import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const Weather = () => {

    const { data } = useContext(mainContext)
    console.log(data);
    const symbolLink = ''

    return (
        <>
            {
                data ?
                    (
                        <>
                            <h1>{data.name}</h1>
                            <p>{data.weather[0].description}</p>
                            <p>Aktuell: {data.main.temp}°C</p>
                            <p>Windgeschwindigkeit {data.wind.speed} m/std</p>
                        </>
                    ) :
                    (
                        <p>loading...</p>
                    )
            }
        </>
    )
}

export default Weather