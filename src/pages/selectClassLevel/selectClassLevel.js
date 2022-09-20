import React, {useState} from 'react';
import './selectClassLevel.css'
import { DisplayClass } from '../../components/displayClassLevel/displayClass';


export default function SelectClassLevel() {
  const [level, setLevel] = useState(1);
  const [classType, setClassType] = useState('Warrior');

  const selectedCreature = JSON.parse(window.localStorage.getItem('selectedCreature'));

  
  //if level is equal to 5, 6, 7 or 8; profBonus will be assigned to 3
  //if level is equal to 9, 10, 11 or 12; profBonus will be assigned to 4
  //if level is equal to 13, 14, 15 or 16; profBonus will be assigned to 5
  //if level is equal to 17, 18, 19 or 20; profBonus will be assigned to 6

  
  

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
    
      <DisplayClass />
    </div>
  );
}

// local storage: https://blog.logrocket.com/using-localstorage-react-hooks/