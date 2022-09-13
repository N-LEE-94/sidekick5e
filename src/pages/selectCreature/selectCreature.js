import React from 'react';
import './selectCreature.css'
import { DisplayCreature } from '../../components/displayCreature/displayCreature';


export default function SelectCreature() {
  return (
    <div className="container">
        <p>Select a Creature</p>
        <DisplayCreature/>
    </div>
  )
}