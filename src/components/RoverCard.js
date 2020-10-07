import React from 'react'

/*RoverCard takes data from the Mars Rover Photos API and appends to DOM. 
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