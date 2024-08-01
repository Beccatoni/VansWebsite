import React from 'react'
import van from '../assets/van2.jpeg'
import {Link} from 'react-router-dom'
import one from '../assets/one.png'

const About = () => {
  return (
    <>
          <img src={one} alt="" className='w-[100%] h-[10%]' />
<div className=' flex flex-col gap-4 px-10'>
<div className="about-page-content flex flex-col gap-7">
        <h1 className='text-4xl font-bold '>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
    </div>
    <div className="about-page-cta px-10 bg-[#FFCC8D] py-9 w-[100%] rounded-md self-center flex flex-col gap-5 mb-5">
                <h2 className='font-bold text-2xl'>Your destination is waiting.<br />Your van is ready.</h2>
                <button className='bg-black w-36 h-10 rounded-lg'>
                <Link className="link-button  text-white font-medium " to="/vans">Explore our vans</Link>
                </button>
                
            </div>
       
    </div>
    
    </>
      

  )
}

export default About