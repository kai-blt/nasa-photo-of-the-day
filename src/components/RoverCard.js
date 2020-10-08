import React from 'react'
import styled from 'styled-components'

/*RoverCard takes data from the Mars Rover
Photos API and appends to DOM.*/


const RoverCardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: space-around;
    width: 40%;
    margin: 5% auto;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 5px 10px 20px #2e2e2e;    
    background-color: #4e4e4e;
    font-weight: 100;
    font-size: .5rem;
    color: #fff;
`;

const RoverImageContainer = styled.div`
    max-width: 15%;
    padding: 5%;
`

const RoverCardImage = styled.img`
    max-width: 100%;
    padding: 5%;
`;



export default function RoverCard(props) {
    const { data } = props;
    return (
        <>
            <RoverCardContainer>
                <div><h2>Rover Camera</h2><span>{data[0].earth_date}</span></div>                
                {data.map(photo => {
                    return (
                        <>
                            <RoverImageContainer>
                                <h3>{photo.camera.full_name}</h3>
                                <RoverCardImage key={photo.id} src={photo.img_src}/>
                            </RoverImageContainer>
                        </>
                    )
                })}                
            </RoverCardContainer>        
        </>
    )
}