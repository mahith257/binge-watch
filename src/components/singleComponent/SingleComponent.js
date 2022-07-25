import './SingleComponent.css'
import { img_300, unavailable } from '../../config/config';
// import { Badge } from '@mui/material';
import CardModal from '../cardModal/CardModal';


export default function SingleComponent({single, media_type}) {
  return (
    <CardModal type = {single.release_date ? 'movie' : 'tv'} id = {single.id}>
        {/* <Badge 
            badgeContent = {single.vote_average} 
            color = {single.vote_average > 6 ? 'primary' : 'secondary'}
        /> */}
        <img
            className='poster'
            src={single.poster_path ? `${img_300}${single.poster_path}` : unavailable} 
            alt = { single.title || single.name}
        />
        <div className='title'>
            {single.title || single.name}
        </div>
        <span className='sub-title'>
            {media_type}
            <span>
                {single.first_air_date || single.release_date}
            </span>
        </span>
    </CardModal>
  );
}
