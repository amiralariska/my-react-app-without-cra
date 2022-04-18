import React from 'react';
import './App.css';
import Logo from './react-icon.png';

export default function App() {
  const tryit = () => {
    alert("Hi");
  }
  return (
    <>
      <img src={Logo} alt='react logo' />
      <h1>React</h1>
      <p>Learn React To Create React App</p>
      <button onClick={tryit}>Click It</button><br /><br />
      <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>Learn React</a>
    </>
  );
}