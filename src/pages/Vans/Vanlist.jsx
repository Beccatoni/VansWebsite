import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card.jsx'

const Vanlist = () => {

    const [vanData, setVanData] = useState([])
    const navItems = [
        'Simple',
        'Luxury',
        'Rugged'
    ]


    useEffect(()=>{
        const vansList = async () =>{
            const res = await fetch("/api/vans")
            const data = await res.json()

            setVanData(data.vans)
        } 
     vansList()
    }, [])

    console.log('Here is the vans data:', vanData[0])

    const vans = vanData.map((van) => {
        return (
            <div key={van.id}>
                <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}>
                <Card   image={van.imageUrl
                 } name={van.name} category={`${van.type}`} price={van.price}  />
                 {/* ${van.type[0].toUpperCase()}${van.type.slice(1)} */}
                </Link>
                
            </div>
                 
        )
    })
    const navButtons = navItems.map((item, index)=>{
        return (
            <div key={index} className='bg-[#FFEAD0] w-[9rem] h-[2.7rem] rounded-md text-center py-2' >{item}</div>
        )
    })



  return (
    <div className='bg-[#FFF7ED] w-full h-screen px-7 flex flex-col gap-8'>
        <h1 className='text-4xl font-bold '>Explore our van options</h1>
        <div className='flex gap-12 items-center'>
            {navButtons}
            <div className='w-[9rem] h-[2.7rem] py-2 '>
                <Link>Clear filters</Link>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            {vans}
        </div>
    </div>
  )
}

export default Vanlist