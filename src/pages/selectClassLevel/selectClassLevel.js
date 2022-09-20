import React, {useState, useEffect} from 'react';
import './selectClassLevel.css'
import { DisplayClass } from '../../components/displayClassLevel/displayClass';


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
            onChange={(e) => setLevel(e.target.value)}
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
            {selectedCreature.languages.length >1 ? <option value="Expert">Expert</option> : null}
            {selectedCreature.languages.length >1 ? <option value="Spellcaster">Spellcaster</option> : null}
          </select>
        </div>
        {console.log('level:', level, classType)}
      </div>  
      <p>Proficiency Bonus: +{profBonus}</p>
      <DisplayClass />
    </div>
  );
}

// on confirm button - set prof bonus to local storage