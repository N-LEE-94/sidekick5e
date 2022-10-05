import React, {useState, useEffect} from 'react';
import './selectClassLevel.css'
import { Warrior } from '../../components/classes/warrior';
import { Spellcaster } from '../../components/classes/spellcaster';
import { Expert } from '../../components/classes/expert';


export default function SelectClassLevel() {
  const [level, setLevel] = useState('1');
  const [classType, setClassType] = useState('Warrior');
  const [profBonus, setProfBonus] = useState('2')

  const selectedCreature = JSON.parse(window.localStorage.getItem('selectedCreature'));

  useEffect(() => {
    if (level === '1' || level === '2' || level === '3' || level === '4') {setProfBonus('2')}
    else if (level === '5' || level === '6' || level === '7' || level === '8') {setProfBonus('3')}
    else if (level === '9' || level === '10' || level === '11' || level === '12') {setProfBonus('4')}
    else if (level === '13' || level === '14' || level === '15' || level === '16') {setProfBonus('5')}
    else if (level === '17' || level === '18' || level === '19' || level === '20') {setProfBonus('6')}
  }, [level]);

  return (
    <div className="container">
      <div className="selection">
        <p className="creature-name">{selectedCreature.name}</p>
        <div id="select" className="select-level">
          Level:
          <select
            className="drop-level"
            id="select1"
            value={level}
            onChange={(e) => {setLevel(e.target.value);  
            localStorage.setItem('level', level)}}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>
        
        
        <div id="select" className="select-class">
          Class:
          <select 
            className="drop-class"
            id="select2"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          >          
            <option value="Warrior">Warrior</option>
            <option value="Expert">Expert</option>
            <option value="Spellcaster">Spellcaster</option>
          </select>
        </div>
      </div>  
      <p>Proficiency Bonus: +{profBonus}</p>
      
      {classType === 'Warrior' ? <Warrior level={level}/> : null}
      {classType === 'Expert' ? <Expert level={level}/> : null}
      {classType === 'Spellcaster' ? <Spellcaster level={level}/> : null}
      
    </div>
  );
}

// on confirm button - set prof bonus to local storage

//Class Select - Creatures can only be Expert & Spellcaster if they can speak a language.
// Create a list of the creature's names that includes a boolean for whether they can speak a language.
// If they cannot, then the Spellcaster and expert option will not (conditionally) render as an option in the select
// Also consider a toggle that allows players to disable the language check, to give them the option to ignore the language rule.
