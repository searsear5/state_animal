import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import { useState } from 'react'
import './animalShow.css'


const svgMap = {
    bird: bird,
    cat: cat,
    cow: cow,
    dog: dog,
    gator: gator,
    horse: horse
}



function AnimalShow(props) {
    const { type } = props
    const [click, setClicks] = useState(0)
    const handleClick = () => {
        setClicks(click + 1)
    }
    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' src={svgMap[type]} alt='animal' />
            <img className='heart' src={heart} alt='heart' style={{ width: 10 + 10 * click }} />
        </div>
    )
}

export default AnimalShow