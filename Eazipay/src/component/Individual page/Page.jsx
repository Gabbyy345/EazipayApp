import React from 'react'
import './Page.css'
import { useState } from 'react'

const Page = () => {
    const [openIndex, setOpenIndex]=useState(null);
    const toggleOpen =(index) =>{
      setOpenInde(openIndex=== index? null : index);
    }
  return (
    <div className='containers'>
        <div className='individual'>
            <h1 className='H1'>
                For Individuals and Businesses
            </h1>
            <p>join 200+ businesses using Eazipay's easy solution</p>
        </div>
        <div className='d'>
        <div className={`box $ {openIndex === 0 ? 'open' : ''}`} onClick={()=> toggleOpen(0)}>
          <div className='Content'>
            <h1>
              Tamper-proof Payroll for life
            </h1>
            <p>Your staff payroll history is kept in one place forever.</p>
            <p>No more excel sheet or manual records.</p>
            <p>Download your payroll history anytime you need it.</p>
          </div>
        </div>
        <div className={`box $ {openIndex === 1 ? 'open' : ''}`} onClick={()=> toggleOpen(1)}>
          <div className='Content'>

          </div>
        </div>
        <div className={`box $ {openIndex === 2 ? 'open' : ''}`} onClick={()=> toggleOpen(2)}>
          <div className='Content'>

          </div>
        </div>
      
        </div>
    </div>
  )
}

export default Page