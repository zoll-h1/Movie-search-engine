import MovieCard from "../Components/Movie"
import '../css/Home.css';
import { useState } from "react";
export function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Gigga Nigga", release_date: 2026},
        {id: 1, title: "Janbolot", release_date: 2007},
        {id: 1, title: "Amin", release_date: 2008},
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }; 

    return  <div className="Home">
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
        
        <div className="movies-grid">
            {movies.map(
                (movie) =>
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
    </div> 
}