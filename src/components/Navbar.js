// import './Navbar.css'
// import { Link} from 'react-router-dom'
// import { useState } from 'react'


// export default function Navbar() {

// //   let url = window.location.href;
// //   let lastIndex = url.lastIndexOf('/')
// //   // let endPoint = url.slice(lastIndex+1)
// //   // console.log(endPoint)
// //   // const lastIndex = url.lastIndexOf('/')
// //   // const endPoint = url.slice(lastIndex+1)
// //   // console.log(endPoint)

// //   useEffect(() => {
// //     console.log(url)
// //   }, [url])

//     const [trendingValue, setTrendingValue] = useState(0)
//     const [moviesValue, setMoviesValue] = useState(0)
//     const [seriesValue, setSeriesValue] = useState(0)
//     const [searchValue, setSearchValue] = useState(0)

//     if(trendingValue === 1){
//         document.getElementById('trending').style.borderBottom ='3px solid #E4D85F'
//     }else if(trendingValue === 0){
//         document.getElementById('trending').style.borderBottom =''
//     }

//     if(moviesValue === 1){
//         document.getElementById('movies').style.borderBottom ='3px solid #E4D85F'
//     }else if(moviesValue === 0){
//         document.getElementById('movies').style.borderBottom =''
//     }

//     if(seriesValue === 1){
//         document.getElementById('tvseries').style.borderBottom ='3px solid #E4D85F'
//     }else if(seriesValue === 0){
//         document.getElementById('tvseries').style.borderBottom =''
//     }

//     if(searchValue === 1){
//         document.getElementById('search').style.borderBottom ='3px solid #E4D85F'
//     }else if(searchValue === 0){
//         document.getElementById('search').style.borderBottom =''
//     }

//     return (
//         <div className='navbar'>
//             <nav>
//                 <Link to="/" className = 'trending' id = 'trending' onClick={() => {setTrendingValue(1); setMoviesValue(0); setSeriesValue(0); setSearchValue(0)}}>
//                     Trending
//                 </Link>
//                 <Link to="/movies" className = 'movies' id = 'movies' onClick={() => {setTrendingValue(0); setMoviesValue(1); setSeriesValue(0); setSearchValue(0)}}>
//                     Movies
//                 </Link>
//                 <Link to="/series" className = 'tvseries' id = 'tvseries' onClick={() => {setTrendingValue(0); setMoviesValue(0); setSeriesValue(1); setSearchValue(0)}}>
//                     TV Series
//                 </Link>
//                 <Link to="/series" className = 'series' id = 'series' onClick={() => {setTrendingValue(0); setMoviesValue(0); setSeriesValue(1); setSearchValue(0)}}>
//                     Series
//                 </Link>
//                 <Link to="/search" className = 'search' id = 'search' onClick={() => {setTrendingValue(0); setMoviesValue(0); setSeriesValue(0); setSearchValue(1)}}>
//                     Search
//                 </Link>
//             </nav>
//         </div>
//     )
// }

// import * as React from 'react';
// import { useEffect } from 'react';
// import './Navbar.css'
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import MovieIcon from '@mui/icons-material/Movie';
// import TvIcon from '@mui/icons-material/Tv';
// import SearchIcon from '@mui/icons-material/Search';
// import { useHistory } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material';

// const theme  = createTheme({
//   root: {
//     color: "black"
//   },
//   selected: {
//      color: "#E4D85F"
//   }
// });

// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);
//   const history = useHistory()
//   useEffect(() => {
//     if(value === 0){
//       history.push('/')
//     }else if(value === 1){
//       history.push('/movies')
//     }else if(value === 2){
//       history.push('/series')
//     }else if(value === 3){
//       history.push('/search')
//     }
//   }, [value, history])
//   return (
//     <ThemeProvider theme={theme}>
//     <Box className='navbar'>
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         sx = {{backgroundColor: '#F5F5F5'}}
//       >
//         <BottomNavigationAction label="Trending" sx = {{color: 'black'}} />
//         <BottomNavigationAction label="Movies" sx = {{color: 'black'}} />
//         <BottomNavigationAction label="TV Series" sx = {{color: 'black'}} />
//         <BottomNavigationAction label="Search" sx = {{color: 'black'}} />
//       </BottomNavigation>
//     </Box>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const history = useHistory()

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

    useEffect(() => {
        if(value === 0){
        history.push('/')
        }else if(value === 1){
        history.push('/movies')
        }else if(value === 2){
        history.push('/series')
        }else if(value === 3){
        history.push('/search')
        }
    }, [value, history])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <ThemeProvider theme={theme}>
    <Box className = 'navBox'>
      <Tabs value={value} onChange={handleChange}>
        <LinkTab label="Trending" sx= {{color: 'black', minWidth: 5}} className = 'nav-label'/>
        <LinkTab label="Movies" sx= {{color: 'black', minWidth: 5}} className = 'nav-label'/>
        <LinkTab label="TV Series" sx= {{color: 'black', minWidth: 5}} className = 'tvseries'/>
        {/* <LinkTab label="Series" sx= {{color: 'black', minWidth: 5, display: 'none'}} className = 'series'/> */}
        <LinkTab label="Search" sx= {{color: 'black', minWidth: 5}} className = 'nav-label'/>
      </Tabs>
    </Box>
    </ThemeProvider>
  );
}
