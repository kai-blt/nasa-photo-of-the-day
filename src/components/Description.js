import React from 'react'

export default function Description(props) {
    const { explanationData } = props;
    return  (
        <div>
            <p>
                { explanationData }
            </p>
        </div>
    )

}