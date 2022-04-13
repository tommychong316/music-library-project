import axios from "axios";
import React, { useState } from 'react';


const DisplaySongs = (props) => {

  return ( 
        <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Genre</th>
            <th scope="col">Release Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.parentSongs.map((song) => {
            return (
              <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.date}</td>
                <td>
                    <button type='submit'>delete</button>
                    <button type='submit'>edit</button>
                </td>
               
              </tr>
            );
          })}
        </tbody>
      </table>  
     );
}
 
export default DisplaySongs;