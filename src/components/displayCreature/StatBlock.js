import React from 'react';
import './statblock.css'

let strMod = '0'
let dexMod = '0'
let conMod = '0'
let intMod = '0'
let wisMod = '0'
let chaMod = '0'

export function StatBlock({ creature }) {
  if (creature.strength > 9) {
    let strCalc = (creature.strength -10)/2
    strMod = '+'+ Math.floor(strCalc); 
  } else {
    strMod = Math.floor(((creature.strength -10) /2)*1)
  }

  if (creature.dexterity > 9) {
    let dexCalc = (creature.dexterity -10)/2
    dexMod = '+'+ Math.floor(dexCalc);  
  } else {
    dexMod = Math.floor(((creature.dexterity -10) /2)*1)
  }

  if (creature.constitution > 9) {
    let conCalc = (creature.constitution -10)/2
    conMod = '+'+ Math.floor(conCalc);  
  } else {
    conMod = Math.floor(((creature.constitution -10) /2)*1)
  }

  if (creature.intelligence > 9) {
    let intCalc = (creature.intelligence -10)/2
    intMod = '+'+ Math.floor(intCalc);  
  } else {
    intMod = Math.floor(((creature.intelligence -10) /2)*1)
  }

  if (creature.wisdom > 9) {
    let wisCalc = (creature.wisdom -10)/2
    wisMod = '+'+ Math.floor(wisCalc);  
  } else {
    wisMod = Math.floor(((creature.wisdom -10) /2)*1)
  }

  if (creature.charisma > 9) {
    let chaCalc = (creature.charisma -10)/2
    chaMod = '+'+ Math.floor(chaCalc);  
  } else {
    chaMod = Math.floor(((creature.charisma -10) /2)*1)
  }

  return (
    <>
      <div className="statContainer">

        <div className="size-type-alignment">
          <p className="size">{creature.size}</p>
          <p className="type">{creature.type},</p>
          <p className="alignment">{creature.alignment}</p>
        </div>

        <div className="ac-hp-speed">
          <div className="ac">
            <p className="ac-tag">Armor Class</p>
            <p className="ac-stat">{creature.armor_class} ({creature.armor_desc})</p>           
          </div>
          <div className="hp">
            <p className="hp-tag">Hit Points</p>
              <p className="hp-stat">{creature.hit_points} ({creature.hit_dice})</p>
          </div>
          <div className="speed">
            <p className="speed-tag">Speed </p>
              <p className="speed-stat">{creature.speed.walk}</p>
          </div>
        </div>

        <div className="ability-scores">
          <p>STR {creature.strength} ({strMod})</p>
          <p>DEX {creature.dexterity} ({dexMod})</p>
          <p>CON {creature.constitution} ({conMod})</p>
          <p>INT {creature.intelligence} ({intMod})</p>
          <p>WIS {creature.wisdom} ({wisMod})</p>
          <p>CHA {creature.charisma} ({chaMod})</p>
        </div>
      </div>
    </>
  );
}


//display its data as elements (big job)
//css? to make it readable while working on it?

//take creature.strength
//if creature.strength is > 9, calculate it by (-10 /2)
//if creature.strength is <10, calculate it by (-10 /2 *-1)