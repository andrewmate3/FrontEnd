import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataComponent from './components/dataComponent'
import { ReactDOM } from 'react';
import GraphComponent from './components/graphComponent';
import  { useState, useEffect } from 'react';

function App() {

  const [show, setShow] = useState(false);

  return (
    <>
      <DataComponent></DataComponent>
      <button onClick={() => setShow(!show)} className='button'>Reveal Graphs</button>
      {
        show && <GraphComponent></GraphComponent>
      }
    </>
  );
}

export default App;
