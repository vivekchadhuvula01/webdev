import React from 'react'


const ProjectCard = ({projectSrc,link,title,description}) => {
  return (
    <a href={link} target='_blank'>
                <img src={projectSrc} alt={`${title} logo`} />
                <h3>{title}</h3>
                <p> {description}</p>
            </a>
  )
}

export default ProjectCard
