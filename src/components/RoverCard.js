import React from 'react'
import './RoverCard.css'
/*RoverCard takes data from the Mars Rover Photos API and appends to DOM. 
*/
export default function RoverCard(props) {
    const { data } = props;
    return (
        <>
            <div className="roverCardContainer">
                <div><h2>Rover Camera</h2><span>{data[0].earth_date}</span></div>                
                {data.map(photo => {
                    return (
                        <>
                            <div>
                                <h3>{photo.camera.full_name}</h3>
                                <img key={photo.id} src={photo.img_src}/>
                            </div>
                        </>
                    )
                })}                
            </div>           
        </>
    )
}