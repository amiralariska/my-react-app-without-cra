import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Logo from './react-icon.png';

export default function App() {
    const tryit = () => {
    alert("Hi");
    }
    return (
        <>
            <Banner />
            <div className='main'>
                <img src={Logo} alt='react logo' />
                <h1>React</h1>
                <p>Learn React To Create React App</p>
                <button className='react-btn' onClick={tryit}>Click It</button><br /><br />
                <a className='react-link' href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>Learn React</a>
            </div>
        </>
    );
}