import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './displayCreature.css';
import { Link } from "react-router-dom";
import { StatBlock } from "./StatBlock.js";
import uniqid from 'uniqid';


export function DisplayCreature() {
  const [allCreatures, setAllCreatures] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
  };

  

  return (
    <>
      <input icon='search' placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
    
      {allCreatures.filter((creature) => {
        if (searchTerm == '') {
          return creature
        } else if (creature.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return creature
        }
      }).map((creature, index) => {
          const isActive = index === activeIndex;
          return (
            <div className="creatureContainer" key={uniqid()}>
              <button className="accordion" id={`${isActive ? "selected-accordion" : null}`} key={uniqid()} onClick={() => {toggleActiveIndex(index)}}>
                {creature.name}
              </button>
              <div className={`${isActive ? "panel" : "noShow"}`} key={uniqid()}>
                <StatBlock creature={creature}/>
                <Link to="/selectClassLevel" className="navbar-link">
                  <button className="select-button" onClick={() => {localStorage.clear(); localStorage.setItem(JSON.stringify(creature), index)}}>
                    Select this creature
                  </button>
                </Link>
              </div>
            </div>
        )
        })}
    </>
)};



// local storage: https://blog.logrocket.com/using-localstorage-react-hooks/
// loading spinner: https://contactmentor.com/how-to-add-loading-spinner-react-js/ 