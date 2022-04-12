import React, { useState } from 'react';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import AddSongForm from './Components/AddSong/AddSongForm';

function App() {

  const [songs, setSongs] = useState([{title: "Go Hard", artist: "Homeboy Sandman", album: "Anjelito", genre: "Hip-Hop", date: "8-6-2021"}])
  return (
    <div>
      <DisplaySongs parentSongs={songs}/>
      <AddSongForm />
    </div>
  );
}

export default App;
