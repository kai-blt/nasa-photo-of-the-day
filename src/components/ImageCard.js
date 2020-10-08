import React from 'react'
import Description from './Description'
import Image from './Image'
import Title from './Title'
import './ImageCard.css'


/*Image Card is built up of 3 components Title, Image and Description
It is passed all of the API data from ImageFinder component when a user selects a date. 
*/
export default function ImageFinder(props) {
    const { data } = props;
    return (
        <>
            <div className="imageCardContainer">
                <Title title={data.title} date={data.date} />
                <Image src={data.url} alt={data.title} media_type={data.media_type}/>               
                <Description explanationData={data.explanation} />
            </div>           
        </>
    )
}