import React, { useState, useEffect } from "react";
import './displayCreature.css'
import { StatBlock } from "./StatBlock.js";

export function DisplayCreature() {
  const [allCreatures, setAllCreatures] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCreature, setActiveCreature] = useState('');

  
  useEffect(() => {
    const headers = {'Accept': 'application/json'}
      async function fetchAll() {
        let creatureList = []

        const crZero = await fetch(`https://api.open5e.com/monsters/?challenge_rating=0&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingZero = await crZero.json();
        creatureList.push(...challengeRatingZero.results);
        
        const crEighth = await fetch(`https://api.open5e.com/monsters/?challenge_rating=1%2F8&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingEighth = await crEighth.json();
        creatureList.push(...challengeRatingEighth.results);

        const crQuarter = await fetch(`https://api.open5e.com/monsters/?challenge_rating=1%2F4&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingQuarter = await crQuarter.json();
        creatureList.push(...challengeRatingQuarter.results);

        const crHalf = await fetch(`https://api.open5e.com/monsters/?challenge_rating=1%2F2&armor_class=&type=&name=&document=&document__slug=`, 
        {headers: headers})
        const challengeRatingHalf = await crHalf.json();
        creatureList.push(...challengeRatingHalf.results);

        const sortedCreatureList = [...creatureList].sort((a, b) =>
          a.name > b.name ? 1 : -1);
        setAllCreatures([...allCreatures, ...sortedCreatureList])
      };
      fetchAll();   
  }, []);

  function toggleActiveIndex(index) {
    if (activeIndex === null){setActiveIndex(index)}
      else if (activeIndex === index) {setActiveIndex(null)}
      else if (activeIndex !==index) {setActiveIndex(index)}
  }

  return allCreatures.map((creature, index) => {
    const isActive = index === activeIndex;
    return (
      <div className="creatureContainer" key={index}>
        <button className="accordion" key={index+1*1000} onClick={() => {toggleActiveIndex(index); ;}}>
          {creature.name}
        </button>
        <div className={`${isActive ? "panel" : "noShow"}`} key={index+1*100000}>
          <StatBlock allCreatures={allCreatures}/>
        </div>
      </div>
    )
  })
}

// local storage: https://blog.logrocket.com/using-localstorage-react-hooks/


//search function: state that prevents creatures that don't match the search term from being mapped.