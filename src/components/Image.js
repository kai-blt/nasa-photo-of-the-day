import React from 'react'

export default function Description(props) {
    const { src, alt } = props;
    return  (
        <div>   
            <img src={src} alt={alt}></img>
        </div>
    )

}

