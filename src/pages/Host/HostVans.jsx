import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  console.log(vans);

  const hostVanEls = vans.map((van) => (
    <Link to={van.id} key={van.id}>
      <div className="flex items-center justify-between bg-white px-9 py-7 rounded-lg ">
        <div className=" flex  gap-7">
          <img
            src={van.imageUrl}
            alt={`Photo of ${van.name}`}
            className="h-[6rem] rounded-lg "
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-[1.3rem] font-semibold">{van.name}</h3>
            <p className="">${van.price}/day</p>
          </div>
        </div>
        <p>Edit</p>
      </div>
    </Link>
  ));

  return (
    <section className=" flex flex-col gap-5 px-6 ">
        <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Your listed vans </h1>
        <p>View all</p>
        </div>
      
      <div>
        <div>
          {vans.length > 0 ? (
            <section className="flex flex-col gap-7">{hostVanEls}</section>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default HostVans;
