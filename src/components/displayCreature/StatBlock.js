import React from 'react';

export function StatBlock(creatureData) {
  
  return(
    <>
      <p>{creatureData.name}</p>
      <p>{creatureData.challenge_rating}</p>
    </>
  )
}