import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Form.css'
import { useLocation, useHistory } from "react-router-dom";

export default function Form() {
    const location = useLocation();
    let history = useHistory();
    if(location.state === undefined){
        history.push({
            pathname: '/'
        });
    }
    const [message, setMessage] = useState('');
    const goback = () => {
        history.push({
            pathname: '/'
        });
    }
    const bookShow = () => {
        const userDetails = {
            show : document.querySelector("#showinput").value,
            name : document.querySelector("#nameinput").value,
            hall : document.querySelector("#hallinput").value
        }
        window.localStorage.setItem('userDetails', JSON.stringify(userDetails));
        setMessage("Successfully Booked");
    }
    return (
        <div id="form">
            <Navbar />
            <form>
                <div>Show : </div>
                <input id="showinput" type="text" readOnly={true} value={location.state!==undefined ? location.state.name : " "} />
                <div>Name : </div>
                <input id="nameinput" type="text" placeholder='Your Name' />
                <div>Select the cinema hall : </div>
                <select name="" id="hallinput">
                    <option value="hall1">Hall 1</option>
                    <option value="hall2">Hall 2</option>
                    <option value="hall3">Hall 3</option>
                    <option value="hall4">Hall 4</option>
                    <option value="hall5">Hall 5</option>
                </select>
                <div id="message">{message}</div>
            </form>
            <div id="button">
                <button onClick={() => bookShow()}>Book</button>
                <button onClick={() => goback()}>Go Back</button>
            </div>
        </div>
    )
}
