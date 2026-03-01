import MovieCard from "../Components/Movie"
import '../css/Home.css';
import { useState, useEffect } from "react";
import { searchPopularMovies, getPopularMovies } from "../services/api";
export function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies , setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                console.log("Movies loaded:", popularMovies);
                setMovies(popularMovies)
            }catch(error){
                console.log(error)
                setError('Failed to load movies...')
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies()

    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return ;

        setLoading(true);
        setError(null);

        try{
            const searchResults = await searchPopularMovies(searchQuery);
            setMovies(searchResults)
        } catch (error){
            console.log(error)
            setError("Failed search movies...")
        } finally {
            setLoading(false);
        }
    };

    return  (
      <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movie..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
        <div className="loading">Loading...</div>
          ) : movies.length > 0 ? (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
          ) : (
            <div className="no-results">No movies found</div>
          )}
    </div>
    );
}
