import React, { useState} from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('');
    const [printName, setPrintName] = useState('');

    function handleInput() {
        setPrintName(name)
    }


    return (
        <>
            <h1>{name}</h1>

            <input type="text" className="border border-gray-300"
                   onChange={(e) => setName(e.target.value)}/>

            <button
                onClick={handleInput}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            > Print
            </button>

            <h2>{printName}</h2>


        </>
    )
}

export default App
