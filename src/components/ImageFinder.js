import React, {useState, useEffect} from 'react'
import ImageCard from './ImageCard'
import RoverCard from './RoverCard'
import axios from 'axios'
import { POD_URL, ROVER_URL, API_KEY} from '../constants/constants'
import styled from 'styled-components'





const CardContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 80%;
    padding: 5%;
    margin: auto;
`




export default function ImageFinder(props) {
    //Store state of user selected date and axios calls
    const [searchDate, setSearchDate] = useState(null);
    const [podData, setPodData] = useState(null);
    const [roverData, setRoverData] = useState(null);

    //Only fetch image data if the date is selected
    useEffect(()=>{
        const fetchImageData = () => {
            axios.get(`${POD_URL}?date=${searchDate}${API_KEY}`)
                .then(res => {
                    console.log('***SUCCESS*** Sending Image Data to Image Component')                    
                    console.log(res.data)
                    setPodData(res.data)
                })
                .catch(err => {
                    /*Set searchDate data to null so that No Images Found is displayed
                    and the card will dissapear*/
                    setPodData(null);
                })
        }
        const fetchRoverData = () => {
            axios.get(`${ROVER_URL}?earth_date=${searchDate}${API_KEY}`)
                .then(res => {
                    console.log('***SUCCESS*** Sending Image Data to Rover Component')                    
                    console.log(res.data.photos)
                    setRoverData(res.data.photos)
                })
                .catch(err => {
                    /*Set searchDate data to null so that No Images Found is displayed
                    and the card will dissapear*/
                    setRoverData(null);
                })
        }
        fetchImageData();
        fetchRoverData();
    }, [searchDate])


    return (
        <div>
            <h2>Please Select a Date:</h2>
            <div>
                <input type="date" id="day" onChange={(event) => setSearchDate(event.target.value)}></input>
            </div>
            <CardContainer>
                {/*Displays Image only if Image data returned*/}
                {podData && <ImageCard data={podData}/>}
                {roverData &&  <RoverCard data={roverData} date={searchDate} />}
            </CardContainer>             
        </div>
    )
}