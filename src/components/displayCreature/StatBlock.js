import React from 'react';
import './statblock.css'

export function StatBlock({ creature }) {

  let strength = creature.strength
  let dexterity = creature.dexterity
  let constitution = creature.constitution
  let intelligence = creature.intelligence
  let wisdom = creature.wisdom
  let charisma = creature.charisma

  function AbilityModCalc(strength, dexterity, constitution, intelligence, wisdom, charisma) {
    let abilityMod = 0
    let abilityArray = [strength, dexterity, constitution, intelligence, wisdom, charisma]
    for (let i = 0; i < abilityArray.length; i++) {
    if (abilityArray[i] > 9) {
      let abilityCalc = (abilityArray[i] -10)/2
      abilityMod = '+'+ Math.floor(abilityCalc); 
    } else {
      abilityMod = Math.floor(((abilityArray[i] -10) /2)*1)
    }
    return <div className="abl-mod"><p> ({abilityMod})</p></div>
  }};

  return (
    <>
      <div className="statContainer">

        <div className="size-type-alignment">
          <p className="size">{creature.size}</p>
          <p className="type">{creature.type},</p>
          <p className="alignment">{creature.alignment}</p>
        </div>

        <div className="ac-hp-speed">
          <div className="ac">
            <p className="ac-tag">Armor Class</p>
            <p className="ac-stat">{creature.armor_class}</p>
            {creature.armor_desc ? 
              <p> ({creature.armor_desc})</p>
              : null}          
          </div>
          <div className="hp">
            <p className="hp-tag">Hit Points</p>
              <p className="hp-stat">{creature.hit_points} ({creature.hit_dice})</p>
          </div>
          <div className="speed">
            <p className="speed-tag">Speed </p>
              <p className="speed-stat">{creature.speed.walk} ft.</p>

              {creature.speed.fly ? 
              <p>, fly {creature.speed.fly} ft.</p>
              : null}
              {creature.speed.climb ? 
              <p>, climb {creature.speed.climb} ft.</p>
              : null}
              {creature.speed.swim ? 
              <p>, swim {creature.speed.swim} ft.</p>
              : null}
              {creature.speed.burrow ? 
              <p>, burrow {creature.speed.burrow} ft.</p>
              : null}
              {creature.speed.hover ? 
              <p> (hover)</p>
              : null}
              
          </div>
        </div>

        <div className="abl-scores">
          <p className="abl-tag">STR</p>
          <p className="abl-tag">DEX</p>
          <p className="abl-tag">CON</p>
          <p className="abl-tag">INT</p>
          <p className="abl-tag">WIS</p>
          <p className="abl-tag">CHA</p>
          <div className="abl-numbers"><div className="score">{creature.strength}</div>{AbilityModCalc(strength)}</div>
          <div className="abl-numbers"><div className="score">{creature.dexterity}</div>{AbilityModCalc(dexterity)}</div>
          <div className="abl-numbers"><div className="score">{creature.constitution}</div>{AbilityModCalc(constitution)}</div>
          <div className="abl-numbers"><div className="score">{creature.intelligence}</div>{AbilityModCalc(intelligence)}</div>
          <div className="abl-numbers"><div className="score">{creature.wisdom}</div>{AbilityModCalc(wisdom)}</div>
          <div className="abl-numbers"><div className="score">{creature.charisma}</div>{AbilityModCalc(charisma)}</div>
        </div>

        <div className="skills-immunities">
            {creature.strength_save || creature.dexterity_save || creature.constitution_save || creature.intelligence_save || creature.wisdom_save || creature.charisma_save ? 
            <p className="saving-throws">Saving Throws 
              {creature.strength_save ?
              <p className ="save-stat">Str +{creature.strength_save}</p>
              : null}
              {creature.dexterity_save ? 
              <p className ="save-stat">Dex +{creature.dexterity_save}</p>
              : null}
              {creature.constitution_save ? 
              <p className ="save-stat">Con +{creature.constitution_save}</p>
              : null}
              {creature.intelligence_save ? 
              <p className ="save-stat">Int +{creature.intelligence_save}</p>
              : null}
              {creature.wisdom_save ? 
              <p className ="save-stat">Wis +{creature.wisdom_save}</p>
              : null}
              {creature.charisma_save ? 
              <p className ="save-stat">Cha +{creature.charisma_save}</p>
              : null}
            </p>
            : null}
            
          
        </div>
      </div>
    </>
  );
};