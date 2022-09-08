import React from 'react';

export function StatBlock(allCreatures, activeIndex) {
  
  return(
    <>
      <p>{allCreatures[activeIndex]}</p>
    </>
  )
}

//pass down active index creature
//display its data as elements (big job)
//css? to make it readable while working on it?
