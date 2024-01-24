import React, { createContext, useContext, useState } from 'react'
import { mainContext } from '../../context/mainProvider'

export const ifData = createContext()

const Nav = () => {

    const {setButtons, apiFetch, setFetch, setCity} = useContext(mainContext)

    const loadWeatherData = (buttonKey, city) => {
        setButtons((button) => ({ ...button, [buttonKey]: true}));
        console.log(city);
        setFetch(true);
        setCity(city)
        // apiFetch(city)
    }

    return (
        <nav>
            <button onClick={(e) => loadWeatherData('button1', e.target.value)} value={'Hamburg'}>Hamburg</button>
            <button onClick={(e) => loadWeatherData('button2', e.target.value)} value={'Berlin'}>Berlin</button>
            <button onClick={(e) => loadWeatherData('button3', e.target.value)} value={'Köln'}>Köln</button>
            <button onClick={(e) => loadWeatherData('button4', e.target.value)} value={'Australien'}>Australien</button>
        </nav>
    )
}

export default Nav