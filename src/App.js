import React, { useState } from 'react';

function App() {

  const [songs, setSongs] = useState([{title: "Go Hard", artist: "Homeboy Sandman", album: "Anjelito", genre: "Hip-Hop", date: "8-6-2021"}])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return (
              <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.date}</td>
                <td></td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
