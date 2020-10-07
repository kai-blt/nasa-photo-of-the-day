import React from 'react'
import Description from './Description'
import Image from './Image'
import Title from './Title'
import './ImageCard.css'


/*Image Card is built up of 3 components Title, Image and Description
It is passed all of the API data from ImageFinder component when a user selects a date. 
*/
export default function ImageFinder(props) {
    const { podData } = props;
    console.log(podData)
    return (
        <>
            <div className="imageCardContainer">
                <Title title={podData.title} date={podData.date} />
                <Image src={podData.url} alt={podData.title} />               
                <Description explanationData={podData.explanation} />
            </div>           
        </>
    )
}