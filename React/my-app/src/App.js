import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataComponent from './components/dataComponent'
import { ReactDOM } from 'react';
import GraphComponent from './components/graphComponent';

function App() {
  return (
    <>
      <DataComponent></DataComponent>
      <GraphComponent></GraphComponent>
    </>
  );
}



export default App;
