import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const HostVanDetail = () => {
    const {id} = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(()=> {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    }, [])
  return (
    <>
      <div>
      HostVanDetail</div>
    </>
  
  )
}

export default HostVanDetail