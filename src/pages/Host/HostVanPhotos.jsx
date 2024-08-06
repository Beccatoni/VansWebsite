import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
  const [currentVan, setCurrentVan] = useOutletContext()
  
  return (
    <div>
      <img
              src={currentVan.imageUrl}
              alt=""
              width={150}
              className="rounded-lg"
            />
    </div>
  )
}

export default HostVanPhotos