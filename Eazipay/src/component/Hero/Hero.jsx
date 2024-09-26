    import React from 'react'
    import './Hero.css'
    import Page from '../../assets/Page.png'
    import Apple from '../../assets/app.png'
    import Google from '../../assets/googles.png'

    const Hero = () => {
        
    return (
        <div className='Header'>
    
            <div className='page'>
                 <img src={Page} alt="" />
             </div>
              <div className='Head'>
                    <h1> Run your <span className='green'>payroll</span><br />
                    <span className='Brown'>easily</span> in <span className='Red'>seconds</span></h1>
                    <p className='Para'>
                         we've built an all-inclusive simple solution for individual and business to manage staff, pay salaries,bills and relevant taxes all at once 
                    </p>
                    <button className='Button'>
                        Start Using Free, Forever
                    </button>
                    <div className='Download'>
                <p>Download The Eazipay App</p>
             <div className='apps'>
             <div className='App'>
                 <img src={Apple} alt="" />
                </div>
                <div className='Google'>
                <img src={Google} alt="" />
                </div>
             </div>
            </div>
            </div>
            
        </div>
    )
    }

    export default Hero