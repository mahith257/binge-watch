import './Navbar.css'
import { Link} from 'react-router-dom'


export default function Navbar() {

//   let url = window.location.href;
//   let lastIndex = url.lastIndexOf('/')
//   // let endPoint = url.slice(lastIndex+1)
//   // console.log(endPoint)
//   // const lastIndex = url.lastIndexOf('/')
//   // const endPoint = url.slice(lastIndex+1)
//   // console.log(endPoint)

//   useEffect(() => {
//     console.log(url)
//   }, [url])

    return (
        <div className='navbar'>
            <nav>
                <Link to="/" className = 'trending' >
                    Trending
                </Link>
                <Link to="/movies" className = 'movies'>
                    Movies
                </Link>
                <Link to="/series" className = 'tvseries'>
                    TV Series
                </Link>
                <Link to="/series" className = 'series'>
                    Series
                </Link>
                <Link to="/search" className = 'search'>
                    Search
                </Link>
            </nav>
        </div>
    )
}

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


