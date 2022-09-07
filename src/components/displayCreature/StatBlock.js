import React from 'react';

export function StatBlock(allCreatures) {
  
  return(
    <>
      <p>{allCreatures.name}</p>
      <p>{allCreatures.challenge_rating}</p>
    </>
  )
}