import TextField from '@mui/material/TextField';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Search.css'
import { useState, useEffect } from 'react';
import SingleComponent from '../../components/singleComponent/SingleComponent';
import CustomPagination from '../../components/pagination/CustomPagination';
import axios from "axios"

export default function Search() {

    const [type, setType] = useState(0)
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState('')
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState();
 
    // const darkTheme = createTheme({
    //     palette: {
    //         mode: 'dark',
    //         primary: {
    //             main: '#fff'
    //         }
    //     }
    // })

    const theme = createTheme({
        palette: {
            primary: {
                main: '#E4D85F'
            },
        },

        typography: {
            fontFamily: ['Agency FB', 'sans-serif'].join(',')
        }
    })

    const fetchSearch = async () => {
        try{
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
            setContent(data.results)
            console.log(data)
            setNumOfPages(data.total_pages)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        window.scroll(0,0)
        searchText && fetchSearch()
        // eslint-disable-next-line
    }, [type, page])

    return (
      <div>
        <ThemeProvider theme={theme} >
            <div>
                <form onSubmit={(e) => {e.preventDefault(); fetchSearch()}} className='search' style={{marginTop: '100px'}}>
                    <TextField id="filled-basic" label="Search" variant="filled" fullWidth onChange={(e) => setSearchText(e.target.value)}/>
                    <Button variant='contained' style={{marginLeft: '20px'}} onClick = {fetchSearch}><SearchIcon /></Button>
                </form>
            </div>
            <Tabs value={type} variant = 'fullWidth' indicatorColor='primary' onChange = {(event, newValue) => {setType(newValue); setPage(1)}}>
                <Tab label="Search Movies"  />
                <Tab label="Search TV Series" />
            </Tabs>
        </ThemeProvider>
        <div className="search-content">
        {content &&
          content.map((single) => (
            <SingleComponent single = {single} key = {single.id} media_type = {type ? "TV Series" : "Movie"}/>
          ))}
        {content.length === 0 && (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>
        {numOfPages > 0 &&
          <CustomPagination setPage = {setPage} page = {page} numOfPages = {numOfPages >= 500 ? 500 : numOfPages}/>
        }
    </div>
    );
  }
  