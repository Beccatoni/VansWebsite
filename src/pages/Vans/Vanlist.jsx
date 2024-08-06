import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "../../components/Card.jsx";

const Vanlist = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);
  const [vanData, setVanData] = useState([]);

  const navItems = ["Simple", "Luxury", "Rugged"];

  useEffect(() => {
    const vansList = async () => {
      const res = await fetch("/api/vans");
      const data = await res.json();

      setVanData(data.vans);
    };
    vansList();
  }, []);

  //
  // console.log('Here is the vans data:', vanData[0])

  const displayVans = typeFilter
    ? vanData.filter((van) => van.type === typeFilter)
    : vanData;

  const vans = displayVans.map((van) => {
    return (
      <div key={van.id}>
        <Link
          to={van.id}
          aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
        >
          <Card
            image={van.imageUrl}
            name={van.name}
            category={`${van.type}`}
            price={van.price}
          />
          {/* ${van.type[0].toUpperCase()}${van.type.slice(1)} */}
        </Link>
      </div>
    );
  });


  

  const navButtons = navItems.map((item, index) => {
    let background = ''
    if(item.toLowerCase() === 'simple' ){
      background = 'bg-[#E17654] text-white '
    }else if(item.toLowerCase() === 'luxury'){
      background = 'bg-[#161616] text-white'
    } else if(item.toLowerCase() === 'rugged'){
      background = 'bg-[#115E59] text-white'
    } else{
      background = ''
    }

    return (
      <button
        onClick={() => setSearchParams({ type: item.toLowerCase() })}
        key={index}
        className={`${typeFilter === item.toLowerCase()? background: 'bg-[#FFEAD0] ' } w-[9rem] h-[2.7rem] rounded-md text-center py-2`}
      >
        {item}
      </button>
    );
  });


 

  return (
    <div className="bg-[#FFF7ED] w-full h-screen px-7 flex flex-col gap-8">
      <h1 className="text-4xl font-bold ">Explore our van options</h1>
      <div className="flex gap-12 items-center">
        {navButtons}

        {typeFilter ? (
          <div className="w-[9rem] h-[2.7rem] py-2 ">
            <Link onClick={() => setSearchParams({})}>Clear filters</Link>
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-5">{vans}</div>
    </div>
  );
};

export default Vanlist;
