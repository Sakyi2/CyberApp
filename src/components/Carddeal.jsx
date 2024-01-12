import React from 'react'
import styles, {layout} from "../style"
import Button from './Button'
import { card } from '../assets'


const Carddeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden"/>in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>elit ern sed fhsy dhfh fbb. jfbf come the lith and see who 
        is there with now ok then he is goinng threr be sfce thry he 
        hfvbf htu hngi utj y ikfn  jytg g j jfnjf yhr world.</p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
     
    </section>
  )
}

export default Carddeal