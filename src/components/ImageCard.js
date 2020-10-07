import React from 'react'
import Description from './Description'
import Image from './Image'
import Title from './Title'
import './ImageCard.css'


/*Image Card is built up of 3 components Title, Image and Description
It is passed all of the API data from ImageFinder component when a user selects a date. 
*/
export default function ImageFinder(props) {
    const { searchData } = props;
    console.log(searchData)
    return (
        <>
            <div className="imageCardContainer">
                <Title title={searchData.title} date={searchData.date} />
                <Image src={searchData.hdurl} alt={searchData.title} />               
                <Description explanationData={searchData.explanation} />
            </div>           
        </>
    )
}