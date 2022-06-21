import { useEffect, useState } from "react"
import useGenre from "../../hooks/useGenre"
import axios from "axios"
import Genres from "../../components/genres/Genres"
import SingleComponent from "../../components/singleComponent/SingleComponent"
import CustomPagination from "../../components/pagination/CustomPagination"
import './Series.css'

export default function Series() {
    const [content, setContent] = useState([])
    const [page, setPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState()
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const genreWithIds = useGenre(selectedGenres)
  
    const fetchSeries = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreWithIds}`)
        console.log(data.results)
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }
  
    useEffect(() => {
        fetchSeries();
        
        // console.log(selectedGenres)
        // eslint-disable-next-line
    }, [page, genreWithIds])
  
    return (
      <div>
          {/* <div className="page-title">TV Series</div> */}
          <Genres
            type = 'tv'
            selectedGenres = {selectedGenres}
            setSelectedGenres = {setSelectedGenres}
            genres = {genres}
            setGenres ={setGenres}
            setPage = {setPage}
            />
        <div className="tvseries-page">
            {content && content.map(single => (
                <SingleComponent single = {single} key = {single.id} media_type = "TV Series" />
            ))}
          </div>
          {numOfPages > 0 &&
          <CustomPagination setPage = {setPage} page = {page} numOfPages = {numOfPages >= 500 ? 500 : numOfPages}/>
          } 
      </div>
    );
  }
  