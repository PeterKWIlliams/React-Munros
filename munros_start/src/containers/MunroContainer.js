import React, { useState, useEffect } from 'react';
import MunroDetail from '../components/MunroDetail';
import MunroList from '../components/MunroList';
import './MunroContainer.css';

const MunroContainer = () => {
    const [munros, setMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
      getMunros();
    }, [])

    const onMunroClick = function(munro){
        setSelectedMunro(munro)
    }

    const getMunros = function(){
        fetch('https://munroapi.herokuapp.com/munros')
        .then(res => res.json())
        .then(munros => setMunros(munros))
    }

    return (
        <div className="main-container">
            {console.log(munros)}
            
            <MunroList munros={munros} onMunroClick={onMunroClick}/>
            {selectedMunro ? <MunroDetail munro ={selectedMunro}/> : null}
        </div>
    )
}

export default MunroContainer;

