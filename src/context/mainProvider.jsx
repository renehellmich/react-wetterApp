import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const key = '42f5e29cd071d8da84a05324881242eb'

const MainProvider = ({ children }) => {

    const [buttons, setButtons] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false
    })
    const [data, setData] = useState([])
    const [fetch, setFetch] = useState(false)
    const [cityfromButton, setCityFromButton] = useState("")


    useEffect(() => {
        {
            if (fetch) {

                const apiFetch = async (city) => {
                    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
                    console.log("City im Fetch: ", city);
                    try {
                        const resp = await axios.get(api)
                        // console.log(resp.data);
                        setData(resp.data)
                    } catch (error) {
                        console.error("Error: ", error);
                    }
                }
                apiFetch(cityfromButton)
            }
        }
    }, [buttons, cityfromButton])

    return (
        <mainContext.Provider value={{ data, setData, buttons, setButtons }}>
            {children}
        </mainContext.Provider>


    )
}

export default MainProvider