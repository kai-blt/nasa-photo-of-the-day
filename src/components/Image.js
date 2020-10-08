import React from 'react'
import ReactPlayer from 'react-player'

export default function Description(props) {
    const { src, alt, media_type } = props;
    return  (
        <div>
           {{media_type} === 'image' ? <img src={src} alt={alt}></img> : <ReactPlayer url={src} width='100%' controls='true'/>}        
        </div>
    )

}

