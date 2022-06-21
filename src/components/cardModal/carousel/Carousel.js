import axios from 'axios';
import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from '../../../config/config';
import './Carousel.css'


const handleDragStart = (e) => e.preventDefault();

export const Carousel = ({media_type, id}) => {

    const [cast, setCast] = useState([])

    const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
      };

    const items = cast?.map((c) => (
        <div className='carousel-item'>
            <img 
                src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                alt={c?.name}
                onDragStart = {handleDragStart}
                className = 'carousel-image'
            />
            <div className='carousel-text'>{c?.name}</div>
        </div>
    ))

    const fetchCast = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setCast(data.cast)
        console.log(data.cast)
    }

    useEffect(() => {
        fetchCast()
        // eslint-disable-next-line
    }, [])

    return (
        <AliceCarousel 
            mouseTracking 
            items={items} 
            infinite
            disableDotsControls
            disableButtonsControls
            autoPlay
            responsive={responsive}
        />
    );
}