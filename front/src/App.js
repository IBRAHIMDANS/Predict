import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
    /* const response = await axios.post(
         'http://localhost:3000/predict',
         {example: 'data'},
         {headers: {'Content-Type': 'application/json'}}
     )*/
    const [text, setText] = useState('');
    const valid = async (e) => {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        await axios.post('http://localhost:5000/predict'
            , {
                'X': `${text}`
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Acces-Control-Allow-Origin':'*'
                }
            }).then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error)
        })
    };
    return (
        <div className="App">
            <header className="App-header">
                <input type="text"
                       value={text}
                       onChange={e => setText(e.target.value)}
                />
                <input value='SEND' type='button' onClick={valid}/>
            </header>
        </div>
    );
}

export default App;
