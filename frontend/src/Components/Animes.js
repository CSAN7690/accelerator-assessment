import React, { useState, useEffect } from 'react';
import Anime from "./Anime";

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_BASE_URL}/animes`;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(data => {
        setAnimes(data)
      })
      .catch(error => {
        console.error('Error fetching animes:', error)
      })
  }, [])
  return (
    <section className="index" id="anime-list">
      {animes.length > 0 ? (
        animes.map(anime => (
          <Anime key={anime.id} name={anime.name} description={anime.description} />
        ))
      ) : (
        <p>No animes to display</p>
      )}
    </section>
  );
}

export default Animes;
