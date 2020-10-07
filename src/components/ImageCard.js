import React from 'react'
import './ImageCard.css'


export default function ImageFinder(props) {
    const { searchData } = props;
    console.log(searchData)
    return (
        <>
            <div className="imageCardContainer">
                <div>
                    <h1>{searchData.title}</h1>
                    <h3>{searchData.date}</h3>
                </div>
                <div>
                    <img src={searchData.hdurl} alt={searchData.title}></img>
                </div>
                <div>
                    <p>                
                        {searchData.explanation}
                    </p>
                </div>
            </div>           
        </>
    )
}