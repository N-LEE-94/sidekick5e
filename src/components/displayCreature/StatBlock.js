import React from 'react';


export function StatBlock({ creature }) {
  return (
    <>
      <p>{creature.name}</p>
      <div>
        <p>STR {creature.strength}</p>
        <p>DEX {creature.dexterity}</p>
        <p>CON {creature.constitution}</p>
        <p>INT {creature.intelligence}</p>
        <p>WIS {creature.wisdom}</p>
        <p>CHA {creature.charisma}</p>
      </div>
    </>
  );
}


//display its data as elements (big job)
//css? to make it readable while working on it?