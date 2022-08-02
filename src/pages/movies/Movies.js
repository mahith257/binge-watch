import { useState, useEffect } from "react"
import axios from "axios"
import SingleComponent from "../../components/singleComponent/SingleComponent"
import CustomPagination from "../../components/pagination/CustomPagination"
import './Movies.css'
import Genres from "../../components/genres/Genres"
import useGenre from "../../hooks/useGenre"

export default function Movies() {

  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState()
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const genreWithIds = useGenre(selectedGenres)

  const fetchMovies = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreWithIds}`)
      // console.log(data)
      setContent(data.results)
      setNumOfPages(data.total_pages)
  }

  useEffect(() => {
      fetchMovies();
      // eslint-disable-next-line
  }, [page, genreWithIds])

  return (
    <div>
        {/* <div className="page-title" style={{marginBottom: '5px'}}>Movies</div> */}
        <Genres 
          type = 'movie'
          selectedGenres = {selectedGenres}
          setSelectedGenres = {setSelectedGenres}
          genres = {genres}
          setGenres ={setGenres}
          setPage = {setPage}
        />
        <div className="movies-page">
            {content && content.map(single => (
                <SingleComponent single = {single} key = {single.id} media_type = "Movie"/>
            ))}
          </div>
          {numOfPages > 0 &&
          <CustomPagination setPage = {setPage} page = {page} numOfPages = {numOfPages >= 500 ? 500 : numOfPages}/>
          } 
    </div>
  );
}
