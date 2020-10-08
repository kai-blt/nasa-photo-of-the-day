import React from 'react'
import styled from 'styled-components'


//Styled Components
const ImageExplanation = styled.div`
    font-weight: 100;
    font-size: 1.2rem;
    padding: 4%;
`;


export default function Description(props) {
    const { explanationData } = props;
    return  (
        <ImageExplanation>
            <p>
                { explanationData }
            </p>
        </ImageExplanation>
    )

}