import React from 'react'
import styles from './ContactStyles.module.css'

const Contact = () => {
  return (
    <section className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="">
            <div className='formGroup'>
                {/* <label htmlFor="name">Name</label> */}
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Name' 
                required
                />
            </div>
            <div className='formGroup'>
                {/* <label htmlFor="email">Email</label> */}
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='email' 
                required
                />
            </div>
            <div className='formGroup'>
                {/* <label htmlFor="message">Message</label> */}
                <textarea 
              
                name="message" 
                id="message"  
                placeholder='Message' 
                required
                ></textarea>
            </div>
            <input className='hover btn' type="submit" value="Submit" />
        </form>
      
    </section>
  )
}

export default Contact
