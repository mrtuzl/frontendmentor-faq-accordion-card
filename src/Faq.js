import React from 'react';
import './faq.css';
import { useState } from 'react';
import woman_desktop from './illustration-woman-online-desktop.svg';
import box_desktop from './illustration-box-desktop.svg';
import arrow from './icon-arrow-down.svg';



function Faq() {



    const [isOn1, setIsOn1] = useState(false)

    const onClickText1 = () => {
        setIsOn1(!isOn1)
    }

    const [isOn2, setIsOn2] = useState(false)

    const onClickText2 = () => {
        setIsOn2(!isOn2)
    }

    const [isOn3, setIsOn3] = useState(false)

    const onClickText3 = () => {
        setIsOn3(!isOn3)
    }
    const [isOn4, setIsOn4] = useState(false)

    const onClickText4 = () => {
        setIsOn4(!isOn4)
    }

    const [isOn5, setIsOn5] = useState(false)

    const onClickText5 = () => {
        setIsOn5(!isOn5)
    }


  return (

    <div className="container">
         <picture  alt="woman-illustration" className='woman-img-mobile'> </picture>
         <img src={box_desktop} alt="box" className='box-img'></img>
                   
        <div className='accordion-card'> 
                    <div className='accordion-img'>
                    <img src={woman_desktop} alt="woman-illustration" className='woman-img'></img>

        </div>
            <div className='accordion-content'>     
                <h1> FAQ </h1>

                <div className='question'> 
                <div className={`q ${isOn1 ? 'q-active' : ''}`}> <p>  How many team members can I invite? </p> 
                </div>
                <div className='arrow1' onClick={onClickText1}> <img src={arrow} alt="arrow"/>
                </div>
     <div className= {`a ${isOn1 ? 'a-active' : ''}`}> { <p> You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan.</p>}</div>
                </div>




                <div className='question'> 
                <div className={`q ${isOn2 ? 'q-active' : ''}`}> <p>    What is the maximum file upload size? </p> 
                </div>
                <div className='arrow' onClick={onClickText2}> <img src={arrow} alt="arrow"/>
                </div>
                <div className={`a ${isOn2 ? 'a-active' : ''}`}> { <p>   No more than 2GB. All files in your account must fit your allotted storage space.</p>}</div>
                </div>
         

                <div className='question'> 
                <div className={`q ${isOn3 ? 'q-active' : ''}`}> <p>  How do I reset my password? </p> 
                </div>
                 <div className='arrow' onClick={onClickText3}> <img src={arrow} alt="arrow"/>
                </div>
                <div className={`a ${isOn3 ? 'a-active' : ''}`}> { <p> lick “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you. </p>}</div>
                </div>



                <div className='question'> 
                <div className={`q ${isOn4 ? 'q-active' : ''}`}> <p>  Can I cancel my subscription? </p> 
                </div>
                <div className='arrow' onClick={onClickText4}> <img src={arrow} alt="arrow"/>
                </div>
                <div className={`a ${isOn4 ? 'a-active' : ''}`}> { <p>   Yes! Send us a message and we’ll process your request no questions asked. </p>}</div>
                </div>


                <div className='question'> 
                <div className={`q ${isOn5 ? 'q-active' : ''}`}> <p>   Do you provide additional support? </p> 
                </div>
                 <div className='arrow' onClick={onClickText5}> <img src={arrow} alt="arrow"/>
                </div>
                 <div className={`a ${isOn5 ? 'a-active' : ''}`}> { <p> Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>}</div>
                </div>




            </div>
        </div>
    </div>
  );
}

export default Faq;
