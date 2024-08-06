import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
  const [currentVan, setCurrentVan] = useOutletContext()

  return (
    <>
    <div className='flex flex-col gap-4'>
      <p ><span className='font-bold'>Name: </span>{currentVan.name}</p>
      <p><span className='font-bold'>Category: </span>{currentVan.type}</p>
      <p><span className='font-bold'>Category: </span>{currentVan.description}</p>
      <p><span className='font-bold'>Visibility: </span>Public</p>
    </div>
    </>
    
  )
}

export default HostVanInfo