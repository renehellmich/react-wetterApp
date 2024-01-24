import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const Nav = () => {

    const {setButtons, setCityFromButton, apiFetch} = useContext(mainContext)

    const loadWeatherData = (buttonKey, city) => {
        setButtons((button) => ({ ...button, [buttonKey]: true}));
        console.log(city);
        setCityFromButton(city)
        apiFetch(city)
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