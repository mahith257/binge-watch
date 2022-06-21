import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';

import './CardModal.css'
import { useState} from 'react';
import { unavailable, img_500, unavailableLandscape, img_300 } from '../../config/config';
import { Carousel } from './carousel/Carousel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '80%',
  bgcolor: '#E4D85F',
  border: '1px solid black',
  borderRadius: '10px',
  boxShadow: 12,
  p: 4,
};

export default function CardModal({children, type, id}) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [trailer, setTrailer] = useState();

  const handleOpen = () => {
    setOpen(true)
    fetchContent()
    fetchTrailer()
  }

  const handleClose = () => setOpen(false);
  


  const fetchContent = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    console.log(data);
    setContent(data)
  }

  const fetchTrailer = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setTrailer(data.results[0]?.key)
  }


  return (
    <div>
      <div className='card' onClick={handleOpen} style = {{cursor: 'pointer'}}>
        {children} 
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && 
              <div className='card-modal'>

                <img 
                  src={content.poster_path ? `${img_300}/${content.poster_path}` : unavailable}
                  alt = {content.name || content.title}
                  className = 'poster-potrait'
                />


                <img 
                  src= {content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape}
                  alt = {content.name || content.title}
                  className = 'poster-landscape'
                />

                <div className='modal-content'>
                  <span className="modal-title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>

                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <p className='modal-description'>
                    {content.overview}
                  </p>

                  <div>
                    <Carousel media_type = {type} id = {id} />
                  </div>

                  {/* <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${trailer}`}
                  >
                    Watch the Trailer
                  </Button> */}
                  <a className='trailer-button' href={`https://www.youtube.com/watch?v=${trailer}`} target = "_blank" rel="noreferrer"><YouTubeIcon /><div style={{marginLeft:'5px', marginTop:'2px'}}>Watch The Trailer</div></a>
                </div>
              </div>
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}