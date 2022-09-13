import React, { useState, useEffect } from "react";
import './displayCreature.css'
import { StatBlock } from "./StatBlock.js";

export function DisplayCreature() {
  const [allCreatures, setAllCreatures] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedCreature, setSelectedCreature] = useState();

  
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

  
  
  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //   console.log(searchValue)
  // }
  
  
  // function filterButton() {
  //   const filteredData = allCreatures.filter((item) => {
  //   return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //   })
  //   console.log(filteredData);
  //   setFilteredResults(filteredData)
  // }


  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
  }

  function filterButton() {
    if (searchInput !== '') {
      const filteredData = allCreatures.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
      console.log(filteredData)
    }
    else {
        setFilteredResults(allCreatures)
    }
  }

  
  return (
    <>
      <input icon='search' placeholder='...'
        onChange={(e) => searchItems(e.target.value)}
      />
      <button onClick={filterButton}>Search</button>
    
      {searchInput.length > 2 ? 
        (filteredResults.map((creature, index) => {
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
        })) 
        :
        (allCreatures.map((creature, index) => {
          const isActive = index === activeIndex;
          return (
            <div className="creatureContainer" key={index}>
              <button className="accordion" key={index+1*1000} onClick={() => {toggleActiveIndex(index); ;}}>
                {creature.name}
              </button>
              <div className={`${isActive ? "panel" : "noShow"}`} key={index+1*100000}>
                <StatBlock selectedCreature={selectedCreature}/>
              </div>
            </div>
        )
        }))
      }
    </>
)};



// local storage: https://blog.logrocket.com/using-localstorage-react-hooks/
// loading spinner: https://contactmentor.com/how-to-add-loading-spinner-react-js/ 


// future fix: the search function shows the results of the last filter when search term is altered.
// Can I find a way to display all creatures instead during search term entry.