import React, { useState } from 'react'
import './skills.css'
import { SKILLS } from './data.js'
import SkillCard from './SkillCard'
import SkillsInfoCard from './SkillsInfoCard.jsx';

function Skills() {

    const[selectedskill,setSelectedskill]=useState(SKILLS[0]);
    
    const handleSelectSkill=(data)=>{
        setSelectedskill(data);

    }
  return (
    <section className="Skills-container">
        <h5>Technical Proficiency</h5>

        <div id='skills' className='skills-content'>
            <div className='skills'>
                {SKILLS.map((item) =>(
                    <SkillCard
                       key={item.title}
                       iconUrl={item.icon}
                       title={item.title}
                       isActive={selectedskill.title === item.title}
                       onClick={()=>{
                        handleSelectSkill(item);
                       }}
                    />
                ))}

            </div>

            <div className='skills-info'>
                <SkillsInfoCard 
                heading={selectedskill.title}
                skills={selectedskill.skills}/>
            </div>
        </div>

    </section>
  )
}

export default Skills
