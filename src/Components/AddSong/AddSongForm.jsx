import React, { useState } from 'react';


const AddSongForm = (props) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [date, setDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            date: date
        };
        console.log(newSong);
    }





    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type='' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Genre</label>
            <input type='' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <label>Realase Date</label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Add Song</button>
        </form>
     );
}
 
export default AddSongForm;