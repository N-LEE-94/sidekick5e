import React from 'react';
import './characterSheet.css'

export default function CharacterSheet() {
  const selectedCreature = JSON.parse(window.localStorage.getItem('selectedCreature'));
  
  return (
    <>
      <div className="title-line">
        <input placeholder='Name'/>
        <p>Level {}</p>
        <p> {selectedCreature.name} </p>
      </div>
    </>
  )
}

//useContext to set level (as level is 1 stage behind )