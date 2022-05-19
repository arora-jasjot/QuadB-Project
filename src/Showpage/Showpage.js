import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Showpage.css'
import { useLocation, useHistory } from "react-router-dom";

export default function Showpage() {
    const location = useLocation();
    let history = useHistory();
    if(location.state === undefined){
        history.push({
            pathname: '/'
        });
    }
    const goBack = () => {
        history.push({
            pathname: '/'
        });
    }
    const bookshow = () => {
        history.push({
            pathname: '/book',
            state: { name : location.state.name}
        });
    }
    if(location.state !== undefined){
        return (
            <div id="showpage">
                <Navbar />
                <div id="name">{location.state.name}</div>
                <div id="show-details">
                    <div id="image">
                        <img src={location.state.image !== null ? location.state.image.medium : undefined} alt="" />
                    </div>
                    <div id="description">
                        <div id="summary">{location.state.summary.substring(3, location.state.summary.length - 4)}</div>
                        <div id="language"><b>Language :</b> {location.state.language} </div>
                        <div id="genre"><b>Genre :</b>  {location.state.genres.map(genre => `${genre} `)}</div>
                        {location.state.rating !== null && <div id="rating"><b>Rating :</b> {location.state.rating}</div>}
                        <div id="site"><b>Official Site :</b> <a href={location.state.site}>{location.state.site}</a></div>
                    </div>
                </div>
                <div id="button">
                    <button onClick={() => goBack()}>Back</button>
                    <button onClick={() => bookshow()}>Book Show</button>
                </div>
            </div>
        )
    }
    else{
        return 0;
    }
}
