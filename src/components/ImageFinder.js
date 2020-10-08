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

    @media (max-width: 500px) {
        max-width: 100%;
    };
`

const ErrorMessage = styled.div`
    color: red;
`;



export default function ImageFinder(props) {
    //Store state of user selected date and axios calls
    const [searchDate, setSearchDate] = useState(null);
    const [podData, setPodData] = useState(null);
    const [roverData, setRoverData] = useState(null);
    const [needsNewDate, setNeedsNewDate] = useState(false);

    function checkDate(event) {
        //Get current month and year
        const currDate = new Date();
        const year = currDate.getFullYear();
        const month = (currDate.getMonth() + 1 < 10) ? (`0${currDate.getMonth() + 1}`) : (currDate.getMonth() + 1);    
        const date = (currDate.getDate() < 10) ? (`0${currDate.getDate()}`) : (currDate.getDate());  
        
                    
        //Get user selected month and year
        const dateSplit = event.target.value.split('-');
        const selectedYear = dateSplit[0];
        const selectedMonth = dateSplit[1];
        const selectedDay = dateSplit[2];
        

        //If either the year, month or date selected is greater than 
        if ((parseInt(selectedYear) > parseInt(year)) || (parseInt(selectedMonth) >= parseInt(month)) && (parseInt(selectedDay)) > parseInt(date)){
            setNeedsNewDate(true)
            setPodData(null);
            setRoverData(null);
        } else {
            setSearchDate(event.target.value)
            setNeedsNewDate(false);
        } 
    }


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
                <input type="date" id="day" onChange={(event) => checkDate(event)}></input>
            </div>
            <CardContainer>
                {/*Displays Image only if Image data returned*/}
                {podData && <ImageCard data={podData}/>}
                {roverData &&  <RoverCard data={roverData} date={searchDate} />}
                {needsNewDate &&  <ErrorMessage>We cannot see into the future! Please select a date in the past 😃</ErrorMessage>}
            </CardContainer>             
        </div>
    )
}