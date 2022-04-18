import React from "react";
import Logo from './react-icon.png';
import "./app.css";

const CSSstyles = {
    heading:{
      fontSize: '32px',
      fontWeight: '700',
      textAlign: 'center'
    },
    paragraph:{
      fontSize: '18px',
      fontWeight: '400'
    },
    link:{
      fontSize: '23.5px',
      fontWeight: '500',
      color: '#00d8ff',
      marginLeft: '75px'
    },
    button:{
      width: '125px',
      height: '50px',
      background: 'cyan',
      color: 'white',
      border: 'none',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: '500',
      cursor: 'pointer',
      marginLeft: '82.5px'
    },
    image:{
      width: '250px',
      height: '250px',
      marginLeft: '28.5px'
    }
}
export default function App() {
    const tryit = () => {
      alert("Hi");
    }
    return (
      <>
        <img style={CSSstyles.image} src={Logo} alt='react logo' />
        <h1 style={CSSstyles.heading}>React</h1>
        <p style={CSSstyles.paragraph}>Learn React To Create React App</p>
        <button style={CSSstyles.button} onClick={tryit}>Click It</button><br /><br />
        <a style={CSSstyles.link} href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>Learn React</a>
      </>
    );
}