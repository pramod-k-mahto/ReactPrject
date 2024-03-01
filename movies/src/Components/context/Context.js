import { createContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const url = `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('Thor');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getMovies(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Error) {
        setError(data.Error);
        setMovies([]);
      } else {
        setError(null);
        setMovies(data.Search);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let timerOut=setTimeout(()=>{
        
    setLoading(true);
    getMovies(`${url}&s=${query}`);

    },500)
    return ()=>clearTimeout(timerOut)
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, query, setQuery, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
