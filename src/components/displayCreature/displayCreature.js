import React, { useState } from "react";
import creatureNames from "../../lib/creatureNames.js";
import './displayCreature.css'

export function DisplayCreature() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleActiveIndex(index) {
    if (activeIndex === null){setActiveIndex(index)}
      else if (activeIndex === index) {setActiveIndex(null)}
      else if (activeIndex !==index && activeIndex !== null) {setActiveIndex(index)}
  }

  return creatureNames.map((creature, index) => {
    const isActive = index === activeIndex;
    return (
      <div className="creatureContainer" key={creature.id}>
        <button className="accordion" key={creature.name} onClick={() => toggleActiveIndex(index)}>
          {creature.name}
        </button>
        <div className={`${isActive ? "panel" : "noShow"}`} key={index}>
          <p>{creature.name}</p>
        </div>
      </div>
    )
  })
}