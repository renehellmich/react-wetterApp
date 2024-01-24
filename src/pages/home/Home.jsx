import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import Nav from '../../components/nav/Nav'
import Weather from '../../components/weather/Weather'

const Home = () => {
  
    return (
    <>
        <Nav />
        <Weather />
    </>
  )
}

export default Home