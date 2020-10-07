import React, {useState, useEffect} from 'react'
import ImageCard from './ImageCard'
import axios from 'axios'
import { BASE_URL, API_KEY} from '../constants/constants'

export default function ImageFinder(props) {
    //Store state of user selected date and axios calls
    const [search, setSearch] = useState(null);
    const [searchData, setSearchData] = useState(null);

    //Only fetch image data if the date is selected
    useEffect(()=>{
        const fetchImageData = () => {
            axios.get(`${BASE_URL}?date=${search}${API_KEY}`)
                .then(res => {
                    console.log('***SUCCESS*** Sending Image Data to Image Component')                    
                    console.log(res.data)
                    setSearchData(res.data)
                })
                .catch(err => {
                    /*Set search data to null so that No Images Found is displayed
                    and the card will dissapear*/
                    setSearchData(null);
                })
        }
        fetchImageData();
    }, [search])


    return (
        <div>
            <h2>Please Select a Date:</h2>
            <div>
                <input type="date" id="day" onChange={(event) => setSearch(event.target.value)}></input>
            </div>
            <div>
                {/*Displays Image only if Image data returned*/}
                {searchData && <ImageCard searchData={searchData} />}
                {searchData === null ? <div>No Images Found</div> : ''}
            </div>              
        </div>
    )
}