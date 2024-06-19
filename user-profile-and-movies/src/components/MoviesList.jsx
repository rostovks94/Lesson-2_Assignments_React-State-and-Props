import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', detailsVisible: false, description: 'A mind-bending thriller.' },
        { title: 'The Godfather', genre: 'Drama', detailsVisible: false, description: 'A mafia classic.' },
    ]);
    const [showAll, setShowAll] = useState(true);
    const [newMovie, setNewMovie] = useState({ title: '', genre: '', description: '' });

    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, detailsVisible: !movie.detailsVisible } : movie
        ));
    };

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
        alert('Movie removed');
    };

    const toggleView = () => {
        setShowAll(!showAll);
    };

    const displayedMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Action');

    const addMovie = (e) => {
        e.preventDefault();
        setMovies([...movies, { ...newMovie, detailsVisible: false }]);
        setNewMovie({ title: '', genre: '', description: '' });
    };

    return (
        <div className="movies">
            <button onClick={toggleView}>
                {showAll ? 'Show only Action movies' : 'Show all movies'}
            </button>
            <ul>
                {displayedMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)}>
                            {movie.title}
                        </span>
                        {movie.detailsVisible && <p className="visible">{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={addMovie}>
                <h2>Add New Movie</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={newMovie.genre}
                    onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newMovie.description}
                    onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                    required
                />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default MoviesList;