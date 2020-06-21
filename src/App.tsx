/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTrack from './components/MouseTrack'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}

interface IthemePorps {
  [key: string] : {color: string, background: string}
}

const themes: IthemePorps = {
  light: {color: 'red', background: 'green'},
  dark: {color: 'blue', background: 'white'}
}

export const themeContext = React.createContext(themes.dark)


// const style = themeContext

function App() {
  const [show, setShow] = useState(true)
  const positions = useMousePosition()
  const url = 'https://dog.ceo/api/breeds/image/random'
  const [refesh, setrefesh] = useState(true)
  const [data, loading] = useURLLoader(url, [refesh])
  const dogData = data as IShowResult
  const theme = useContext(themeContext)
  const style1 = {
    color: theme.color,
    background: theme.background
  }
  return (
    <themeContext.Provider value={themes.light}>
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{border: '1px #fff solid', cursor: 'pointer', ...style1}} onClick={(e) => {setrefesh(!refesh);e.nativeEvent.stopImmediatePropagation()}}>refesh dog</h3>
        {loading ? <h3>loading 🐶</h3> : <img src={dogData && dogData.message} alt='dog'/>}
        <h2>X: {positions.x}, Y: {positions.y}</h2>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello message="hello world 2"/>
        <LikeButton />
        <button onClick={() => {setShow(!show)}}>Change MouseTrack</button>
        {show && <MouseTrack />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </themeContext.Provider>
  );
}

export default App;
