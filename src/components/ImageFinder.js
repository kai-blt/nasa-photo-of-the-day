import React, {useState, useEffect} from 'react'
import Image from './Image'
import axios from 'axios'
import { BASE_URL} from '../constants/constants'

export default function ImageFinder(props) {
    //Store state of user input and axios calls
    const [search, setSearch] = useState(null);
    const [searchData, setSearchData] = useState(null);

    useEffect(()=>{
        const fetchImageData = (search) => {
            axios.get(`${BASE_URL}?date=${search}&api_key=DEMO_KEY`)
                .then(res => console.log(res.data))
                .catch(err => console.log('error'))
        }
        fetchImageData(search)
    }, [search])


    return (
        <div>
            <h2>Please Select a Date:</h2>
            <div>
                <input type="date" id="day" onChange={(event) => setSearch(event.target.value)}></input>
            </div>
            <div>
                {/*Displays Image only if Image data returned*/}
                {searchData && <Image imgUrl={searchData}/>}
            </div>              
        </div>
    )
}