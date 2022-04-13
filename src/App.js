import React, { useState, useEffect } from "react";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSongForm from "./Components/AddSong/AddSongForm";
import './App.css';
import axios from 'axios';



function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data);
  }


  function addNewSong(song) {
    let tempSongs = [...songs, song];

    setSongs(tempSongs);
  }

  return (
    <div className="container">
      <div className="row">
        <h3 style={{margin: '1em'}}>Music Library</h3>
       <div> <input type="text" placeholder="All">
          </input>
          <button type="submit">filter</button>
          </div>
        <div className="border-box">
          <div>
          </div>
          <DisplaySongs parentSongs={songs} />
        </div>
        <h3 style={{margin: '1em'}}>Add Song</h3>
        <div className="border-box">
          <AddSongForm addNewSongProperty={addNewSong} />
        </div>
      </div>
    </div>
  );
}

export default App;
