import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
    const [currentVan] = useOutletContext()
  return (
    <div>
        <p> <span className='text-2xl'>${currentVan.price}</span>/day</p>
    </div>
  )
}

export default HostVanPricing