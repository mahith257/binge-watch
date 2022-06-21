import './App.css';
import Header from './components/header/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Container } from '@mui/material';
import Trending from './pages/trending/Trending';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import Search from './pages/search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
            <Container>
              <Switch>
                <Route exact path = '/'>
                  <Trending />
                </Route>
                <Route path='/movies'>
                  <Movies />
                </Route>
                <Route path='/series'>
                  <Series />
                </Route>
                <Route path='/search'>
                  <Search />
                </Route>
              </Switch>
            </Container>
      </BrowserRouter>
     </div>
  );
}

export default App;
