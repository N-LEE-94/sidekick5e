import React from 'react';
import './selectClassLevel.css'
import { DisplayClassLevel } from '../../components/displayClassLevel/displayClassLevel';


export default function SelectClassLevel() {
  return (
    <div className="container">
        <h2>Select a Class and Level</h2>
        <DisplayClassLevel/>
    </div>
  )
}