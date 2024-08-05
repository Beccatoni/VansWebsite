import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'



// 

const Vandetail = () => {
    const params = useParams()
    const [ourVan, setOurVan] = useState(null)
    
    console.log(params)

    useEffect(()=>{
        const getVan = async() => {
            const response = await fetch(`/api/vans/${params.id}`)
            const vandata = await response.json()
            setOurVan(vandata.vans)
        }
        getVan()
    }, [params.id])

    console.log(ourVan)

  return (
    <div className='bg-[#FFF7ED] px-10 flex flex-col gap-9 py-16'> 
    <div className='flex gap-3 items-center'>
    <FontAwesomeIcon icon={faArrowLeft} />
        <Link>Back to all vans</Link>
        </div>
        {
            ourVan? (
                <div className=' flex flex-col gap-8'>
                    <img src={ourVan.imageUrl} alt="" className="rounded-lg"/>
                    <div className='' >
                        <div className={`bg-[${ourVan.type === 'simple'? '#E17654': ourVan.type === 'luxury'? '#000000': ourVan.type === 'rugged'? '#115E59':''}] w-[9rem] h-[2.7rem] rounded-md text-center py-2`} >
                        {`${ourVan.type[0].toUpperCase()}${ourVan.type.slice(1)}`}
                        </div>
                        <p>{ourVan.name}</p>
                        <p><span>${ourVan.price}</span>/day</p>
                        <p>{ourVan.description}</p>
                        <div className='bg-[#E17654] w-full h-[2.7rem]  rounded-md flex items-center justify-center text-white font-bold'>Return this van</div>
                       
                    </div>
                </div>
            ):
            <h2>Loading...</h2>
        }
    </div>
  )
}

export default Vandetail