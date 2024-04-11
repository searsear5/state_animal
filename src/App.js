import { useState } from 'react'
import AnimalShow from './animalShow'
import './App.css'



function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    return (animals[Math.floor(Math.random() * animals.length)])
}


function App() {

    const [animals, setAnimal] = useState([])

    const handleClick = () => {
        setAnimal([...animals, getRandomAnimal()])
    }

    const renderedAnimal = animals.map((animal, index) => {
        return (
            <AnimalShow type={animal} key={index} />
        )
    })


    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimal}</div>
        </div>
    )
}

export default App