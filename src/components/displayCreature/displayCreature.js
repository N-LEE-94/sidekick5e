import React, { useState, useEffect } from "react";
import creatureNames from "../../lib/creatureNames.js";
import './displayCreature.css'
import { StatBlock } from "./StatBlock.js";

export function DisplayCreature() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCreature, setActiveCreature] = useState('');

  function toggleActiveIndex(index) {
    if (activeIndex === null){setActiveIndex(index)}
      else if (activeIndex === index) {setActiveIndex(null)}
      else if (activeIndex !==index) {setActiveIndex(index)}
  }
  
  function getCreatureData(creature, index) {
    const creatureName = creature.toString().toLowerCase().replace(/[\n\r\s\t]+/g, '-')
    if (activeIndex !== index) {
      const headers = {'Accept': 'application/json'}
      async function fetchData() {
        const rawStats = await fetch(`https://api.open5e.com/monsters/${creatureName}/`, 
          {headers: headers})
        const creatureData = await rawStats.json();
        console.log(creatureData);
        setActiveCreature(creatureData);
      };
      fetchData();
    }
  };

  useEffect(() => {
    
  });

  return creatureNames.map((creature, index) => {
    const isActive = index === activeIndex;
    return (
      <div className="creatureContainer" key={creature.id}>
        <button className="accordion" key={creature.name} onClick={() => {toggleActiveIndex(index); getCreatureData(creature.name, index);}}>
          {creature.name}
        </button>
        <div className={`${isActive ? "panel" : "noShow"}`} key={index}>
          <StatBlock creatureData={activeCreature}/>
        </div>
      </div>
    )
  })
}

// local storage: https://blog.logrocket.com/using-localstorage-react-hooks/
// passing state: https://www.pluralsight.com/guides/passing-state-of-parent-to-child-component-as-props
// 