import axios from 'axios';
import React, { useState, useEffect } from 'react';


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
return (
    <div>
        <img src={photoData.url} alt= '' />
        <div>
            <h1>{photoData.title}</h1>
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
        </div>

    </div>
);
}
export default NasaPhoto;