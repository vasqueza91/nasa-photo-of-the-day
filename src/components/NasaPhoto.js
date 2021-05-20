import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'



function NasaPhoto() {
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            setPhotoData(res.data)
    })
    .catch(err => {
        console.log(err)
    })

}, [], )

const Container = styled.div`
    display: flex
    flex-direction: column;
    justify-content: center;
    vertical-align: bottom;
    text-align: center;
    background-color: grey;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto:
    padding: 25%
`

const Paragraph = styled.p`
    color: blue;
    padding 15px;
    border-style: solid;
    border-color: red;
    margin-left: auto;
    margin-right: auto;
    width: 48%;

`

const Photo = styled.img`

    margin-left: auto;
    margin-right: auto:
    max-height: 90vh;
`


    

return (
    <Container>
        {photoData.media_type === "image" ? (
        <Photo src={photoData.url} alt={photoData.title}/>
        ) : (
            <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
            />
        )}
        
        <Paragraph>
            <h1>{photoData.title}</h1>
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
        </Paragraph>

    </Container>
);
}
export default NasaPhoto;