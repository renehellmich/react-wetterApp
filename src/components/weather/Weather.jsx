import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const Weather = () => {
  
    const {data} = useContext(mainContext)
    console.log(data);
  
    return (
    <>
        {
            data?
            (
                <h1>{data.name}</h1>
            ):
            (
                <p>loading...</p>
            )
        }
    </>
  )
}

export default Weather