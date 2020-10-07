import React from 'react'
import Description from './Description'
import Image from './Image'
import Title from './Title'

/*Image Card is built up of 3 components Title, Image and Description
It is passed all of the API data from ImageFinder component when a user selects a date. 
*/
export default function RoverCard(props) {
    const { data } = props;
    return (
        <>
            <div className="imageCardContainer">
                {data.map(photo => {
                    return (
                        <>
                            <h3>{photo.camera.full_name}</h3>
                            <img key={photo.id} src={photo.img_src}/>
                        </>
                    )
                })}
                
            </div>           
        </>
    )
}