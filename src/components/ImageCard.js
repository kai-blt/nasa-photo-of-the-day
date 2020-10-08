import React from 'react'
import Description from './Description'
import Image from './Image'
import Title from './Title'
import styled from 'styled-components'


const ImageCardContainer = styled.div`
    width: 40%;
    margin: 5% auto;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 5px 10px 20px #2e2e2e;    
    background-color: #4e4e4e;
    color: #fff;
`;


/*Image Card is built up of 3 components Title, Image and Description
It is passed all of the API data from ImageFinder component when a user selects a date. 
*/
export default function ImageFinder(props) {
    const { data } = props;
    return (
        <>
            <ImageCardContainer>
                <Title title={data.title} date={data.date} />
                <Image src={data.url} alt={data.title} media_type={data.media_type}/>               
                <Description explanationData={data.explanation} />
            </ImageCardContainer>          
        </>
    )
}