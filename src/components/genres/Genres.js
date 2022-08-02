import { useEffect } from "react"
import axios from "axios"
import { Chip } from "@mui/material"

export default function Genres({type, selectedGenres,setSelectedGenres, genres, setGenres, setPage}) {
    const fetchGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        // console.log(data)
        setGenres(data.genres)
        setPage(1)
    }

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((g) => g.id !== genre.id))
        setPage(1)
    }

    const handleRemove = (selectedGenre) => {
        setGenres([...genres, selectedGenre])
        setSelectedGenres(selectedGenres.filter((s) => s.id !== selectedGenre.id))
        setPage(1)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres([])
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="genre-list">
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip 
                    clickable
                    label = {genre.name}
                    key = {genre.id}
                    color = 'primary'
                    style={{margin: '6px'}}
                    onDelete = {() => handleRemove(genre)}
                />
            ))}
            {genres && genres.map((genre) => (
                <Chip 
                    clickable
                    label = {genre.name}
                    key = {genre.id}
                    style={{margin: '6px', backgroundColor: '#E4D85F', fontFamily: "'Tw Cen MT', sans-serif"}}
                    onClick = {() => handleAdd(genre)}
                    size = 'medium'
                />
            ))}
        </div>
    );
}
