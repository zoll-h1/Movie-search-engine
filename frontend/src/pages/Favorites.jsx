import { useMovieContext } from '../context/movieContext';
import '../css/Favorites.css';
import MovieCard from '../Components/Movie';
export function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites) {
        return (
        <div className="favorites"> 
            <h2>Your favorites</h2>
         <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id}/>
            ))}
         </div>
        </div>
        )
    }
    return <div className="favorites">
        <h2>No Favorite movies yes</h2>
        <p>The Favorite movies will be appear here after you will added</p>
    </div>
}