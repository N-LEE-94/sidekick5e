import React from "react";
import creatureNames from "../../lib/creatureNames.js";
import './displayCreature.css'

export function DisplayCreature() {
  
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      console.log("accordion clicked")

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  return creatureNames.map((creature) => {
    return (
      <div key={creature.id}>
        <button className="accordion" key={creature.name}>{creature.name}</button>
        <div className="panel">
          <p>{creature.name}</p>
        </div>
      </div>
    )
  })
}