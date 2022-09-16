import React from 'react';
import './statblock.css';
import uniqid from 'uniqid';


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
    return <div className="abl-mod" key={uniqid()}><p> ({abilityMod})</p></div>
  }};

let actionsVar = creature.actions
let specialAbilitiesVar = creature.special_abilities

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
            <p className="bold">Armor Class</p>
            <p className="ac-stat">{creature.armor_class}</p>
            {creature.armor_desc ? 
            <p> ({creature.armor_desc})</p>
            : null}          
          </div>
          <div className="hp">
            <p className="bold">Hit Points</p>
            <p className="hp-stat">{creature.hit_points} ({creature.hit_dice})</p>
          </div>
          <div className="speed">
            <p className="bold">Speed </p>
            <p className="speed-stat">{creature.speed.walk} ft.</p>
            {creature.speed.fly ? 
            <p>, fly {creature.speed.fly} ft.</p>
            : null}
            {creature.speed.hover ? 
            <p className="hover"> (hover)</p>
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
            {creature.strength_save ||
            creature.dexterity_save ||
            creature.constitution_save ||
            creature.intelligence_save ||
            creature.wisdom_save ||
            creature.charisma_save ? 
            <div className="save-wrapper">
            <p className="saving-throws">Saving Throws</p> 
              {creature.strength_save ?
              <p className ="save-stat">Str +{creature.strength_save}</p>
              : null}
              {creature.dexterity_save ? 
                <div className ="save-stat"><p>Dex +{creature.dexterity_save}</p></div>
              : null}
              {creature.constitution_save ? 
                <div className ="save-stat"><p>Con +{creature.constitution_save}</p></div>
              : null}
              {creature.intelligence_save ? 
                <div className ="save-stat"><p>Int +{creature.intelligence_save}</p></div>
              : null}
              {creature.wisdom_save ? 
                <div className ="save-stat"><p>Wis +{creature.wisdom_save}</p></div>
              : null}
              {creature.charisma_save ? 
                <div className ="save-stat"><p>Cha +{creature.charisma_save}</p></div>
              : null}
              </div>
            : null}

            {Object.keys(creature.skills).length !== 0 ? 
              <div className="flex-wrapper"> 
              <p className="bold">Skills</p>
              {Object.keys(creature.skills).map((skill, index) => {
              return (<p className="skill-value" key={uniqid()}>{skill}</p>);
              })}
              </div>
            : null}
            
            {creature.damage_vulnerabilities ?
              <div className="flex-wrapper"> 
                <p className="bold">Damage Vulnerabilities</p>
                <p className="value">{creature.damage_vulnerabilities}</p> 
              </div>
            : null}
            {creature.damage_resistances ?
              <div className="flex-wrapper"> 
                <p className="bold">Damage Resistances</p>
                <p className="value">{creature.damage_resistances}</p>
              </div>
            : null}
            {creature.damage_immunities ?
              <div className="flex-wrapper">
                <p className="bold">Damage Immunities</p>
                <p className="value">{creature.damage_immunities}</p>
              </div>
            : null}
            {creature.condition_immunities ?
              <div className="flex-wrapper">
                <p className="bold">Condition Immunities</p>
                <p className="value">{creature.condition_immunities}</p>
              </div>
            : null}
            {creature.senses ?
              <div className="flex-wrapper">
                <p className="bold">Senses</p>
                <p className="value">{creature.senses}</p>
              </div>
            : null}
            {creature.languages ?
              <div className="flex-wrapper">
                <p className="bold">Languages</p>
                <p className="value">{creature.languages}</p>
              </div>
            : null}
            {creature.challenge_rating ?
              <div className="flex-wrapper">
                <p className="bold">Challenge Rating</p>
                <p className="value">{creature.challenge_rating}</p>
              </div>
            : null}
        </div>

        
          {creature.special_abilities ?
            <div className="abilities-wrapper">
              {Array.from(specialAbilitiesVar).map((abilities) => {
              return (
                  <div className="ability-action" key={uniqid()}>
                    <p className="bold" key={uniqid()}>{abilities['name']}</p>
                    <p className="ability-action-value" key={uniqid()}>{abilities['desc']}</p>
                  </div>
                )})}
            </div>
          : null }
        
        {creature.actions ?
        <><p className="actions-header">Actions</p><div className="actions-wrapper">
            {Array.from(actionsVar).map((actions) => {
              return (
                <div className="ability-action" key={uniqid()}>
                  <p className="bold" key={uniqid()}>{actions['name']}</p>
                  <p className="ability-action-value" key={uniqid()}>{actions['desc']}</p>
                </div>
              );
            })}
          </div></>
        : null}
      </div>
    </>
  );
};

//function that checks for \n to create line break in Ps.
