import './App.css';
import { Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import SingleMovies from './Components/SingleMovies/SingleMovies';
import Movies from './Components/Movies/Movies';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <h1> App</h1> */}
{/*     
    <Link to={"/"}> Home</Link><br/>
    <Link to={"/Movies"}> Movies</Link><br/>
    <Link to={"/Search"}> Search</Link><br/>
    <Link to={"/SingleMovies"}> SingleMovies</Link><br/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Movies/:id' element={<SingleMovies/>}/>
      <Route path='/Search' element={<Search/>}/>
      {/* <Route path='/SingleMovies' element={<SingleMovies/>}/> */}
    </Routes>
    
    
    </>
    
  );
}

export default App;
