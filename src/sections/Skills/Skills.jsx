import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>skills</h1>
      <div className={styles.skillList}>
      <SkillList  src={checkMarkIcon} skill={'HTML'} />
      <SkillList  src={checkMarkIcon} skill={'CSS'} />
      <SkillList  src={checkMarkIcon} skill={'JavaScript'} />
      <SkillList  src={checkMarkIcon} skill={'NodeJs'} />
      <SkillList  src={checkMarkIcon} skill={'MongoDB'} />
     
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList  src={checkMarkIcon} skill={'ReactJs'} />
      <SkillList  src={checkMarkIcon} skill={'TailwindCss'} />
      <SkillList  src={checkMarkIcon} skill={'MaterialUI'} />
      <SkillList  src={checkMarkIcon} skill={'ExpressJs'} />
      <SkillList  src={checkMarkIcon} skill={'Mongoose'} />
      {/* <SkillList  src={checkMarkIcon} skill={'NodeJS'} /> */}
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList  src={checkMarkIcon} skill={'vite'} />
      <SkillList  src={checkMarkIcon} skill={'NextJs'} />
      <SkillList  src={checkMarkIcon} skill={'GoogleCloud'} />
      <SkillList  src={checkMarkIcon} skill={'Git'} />
      <SkillList  src={checkMarkIcon} skill={'GitHub'} />
      {/* <SkillList  src={checkMarkIcon} skill={'NodeJS'} /> */}
      </div>
    </section>
  )
}

export default Skills
