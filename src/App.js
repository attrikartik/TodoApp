import React from 'react';
import './App.css';
import Todo from './Components/UI/Layout/Layout'
import ReactNotification from 'react-notifications-component'

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Todo/>
    </div>
  );
}

export default App;
