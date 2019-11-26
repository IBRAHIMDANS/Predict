import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

 function App() {
   /* const response = await axios.post(
        'http://localhost:3000/predict',
        {example: 'data'},
        {headers: {'Content-Type': 'application/json'}}
    )*/
    return (
        <div className="App">
            <header className="App-header">
                <input type="text" value='ddd' />
                <input value='SEND' type='button'/>
            </header>
        </div>
    );
}

export default App;
