import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import MoviesList from './components/MoviesList';

function App() {
    return (
        <div className="App">
            <UserProfile />
            <MoviesList />
        </div>
    );
}

export default App;