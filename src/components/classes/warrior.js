import React from "react";


export function Warrior({ level }) {

  return(
    <>
      <h3>Warrior</h3>

      <div className="first-level">
      <h4 className="feature-name">Level 1</h4>
      </div>

      <div className="second-level">
        { level > 1 ? 
          <div>
            <h4 className="feature-name">Level 2</h4>

          </div>
        : null}
      </div>

      <div className="third-level">
        { level > 2 ? 
          <div>
            <h4 className="feature-name">Level 3</h4>

          </div>
        : null}
      </div>
      
    </>
  )
}