import React, { useState, useEffect } from "react";
import './displayCreature.css'
import { StatBlock } from "./StatBlock.js";

export function DisplayCreature() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCreature, setActiveCreature] = useState('');
  const allCreatures = [];

  function fetchCreatures() {
      const headers = {'Accept': 'application/json'}
      async function fetchAll() {
        
        const crZero = await fetch(`https://api.open5e.com/monsters/?challenge_rating=0&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingZero = await crZero.json();
        let zeroArray = [...challengeRatingZero.results]
        allCreatures.push(...zeroArray)
        
        const crEighth = await fetch(`https://api.open5e.com/monsters/?challenge_rating=1%2F8&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingEighth = await crEighth.json();
        let EighthArray = [...challengeRatingEighth.results]
        allCreatures.push(...EighthArray)

        const crQuarter = await fetch(`https://api.open5e.com/monsters/?challenge_rating=1%2F4&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingQuarter = await crQuarter.json();
        let quarterArray = [...challengeRatingQuarter.results]
        allCreatures.push(...quarterArray)

        const crHalf = await fetch(`https://api.open5e.com/monsters/?challenge_rating=1%2F2&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingHalf = await crHalf.json();
        let halfArray = [...challengeRatingHalf.results]
        allCreatures.push(...halfArray)
        
      };
      fetchAll();
      
  }fetchCreatures(); 
  console.log(allCreatures);
  
  function toggleActiveIndex(index) {
    if (activeIndex === null){setActiveIndex(index)}
      else if (activeIndex === index) {setActiveIndex(null)}
      else if (activeIndex !==index) {setActiveIndex(index)}
  }

  
  return allCreatures.map((creature, index) => {
    const isActive = index === activeIndex;
    return (
      <div className="creatureContainer" key={creature.slug}>
        <button className="accordion" key={creature.name} onClick={() => {toggleActiveIndex(index); ;}}>
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


//NEXT STEP: Have allCreatures map their names to the buttons!