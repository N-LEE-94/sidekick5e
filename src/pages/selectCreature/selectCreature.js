import React from 'react';
import './selectCreature.css'

import { DisplayCreature } from '../../components/displayCreature/DisplayCreature';


export default function SelectCreature() {
  return (
    <div className="container">
        <h2>Select a Creature</h2>
        <DisplayCreature/>
    </div>
  )
}