import React from 'react'
import styles from './ProjectStyles.module.css'
import Viberr from '../../assets/viberr.png'
import FreshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../common/ProjectCard'
import Hipster from '../../assets/hipsster.png'
import Fitlift from '../../assets/fitlift.png'

const Project = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectContainer}>
           <ProjectCard 
           projectSrc={Viberr}
           link={'#'}
           title={'Viberr'}
           description={"Streaming App"}
           />
           <ProjectCard 
           projectSrc={FreshBurger}
           link={'#'}
           title={'Freshburger'}
           description={"Restaurant Website"}
           />
           <ProjectCard 
           projectSrc={Hipster}
           link={'#'}
           title={'Hipsster'}
           description={"Glasses  App"}
           />
           <ProjectCard 
           projectSrc={Fitlift}
           link={'#'}
           title={'Fitlift'}
           description={"Fitlift App"}
           />

        </div>
     
    </section>
  )
}

export default Project
