import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Homepage.css'
import Card from '../Card/Card'
import { useLocation, useHistory } from "react-router-dom";

export default function Homepage({ searchQuery }) {
  let url;
  url =`https://api.tvmaze.com/search/shows?q=${searchQuery}`;
 
  const [shows, setShows] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setsearch] = useState('');

  const changeSearch = (e) => {
    setsearch(e.target.value);
  }
  const searchShows = () => {
    if (search.length > 0) {
      url =`https://api.tvmaze.com/search/shows?q=${search}`;
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setShows(result);;
        }
      )
    }
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setShows(result);
        }
      )
  }, [])

  return (
    <div id="homepage">
      <Navbar />
      <div id="searchbar">
        <input type="text" placeholder='Search your show !' onChange={(e) => changeSearch(e)} value={search} />
        <button onClick={() => searchShows()}>Search</button>
      </div>
      <div id="cards">
        {shows.length>0 && shows.map(show =>
          <Card key={show.show.id} name={show.show.name} language={show.show.language} image={show.show.image} genres={show.show.genres} rating={show.show.rating.average} summary={show.show.summary} site={show.show.officialSite} searchQuery={searchQuery} />
        )}
      </div>
    </div>
  )
}
