import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../Api";
import { requireAuth } from "../../utils";


export async function loader({params}) {
  // await requireAuth();
  return getHostVans(params.id);
}

const HostVanDetail = () => {
  // const { id } = useParams();
  const currentVan = useLoaderData()
  // const [currentVan, setCurrentVan] = useState(null);
  

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans));
  // }, []);

  // if (!currentVan) {
  //   return <h1>Loading...</h1>;
  // }

  let backgroundde = "";
  if (currentVan.type === "simple") {
    backgroundde = "bg-[#E17654]";
  } else if (currentVan.type === "luxury") {
    backgroundde = "bg-[#161616]";
  } else if (currentVan.type === "rugged") {
    backgroundde = "bg-[#115E59]";
  } else {
    backgroundde = "";
  }

  return (
    <>
      <section className="px-6 flex flex-col gap-8">
        <Link to=".." relative="path" className="flex items-center gap-4 ">
          <FontAwesomeIcon icon={faArrowLeft} className="" />{" "}
          <span>Back to all vans</span>
        </Link>

        
          <div className=" bg-white px-6 py-4 flex flex-col gap-6 ">
            <div className="flex  gap-5 ">
            <img
              src={currentVan.imageUrl}
              alt=""
              width={150}
              className="rounded-lg"
            />
            <div className="flex flex-col font-bold items-center justify-center gap-2">
              <button
                className={`${backgroundde} w-[7rem] h-[2.3rem] rounded-md text-center py-2 text-white font-semibold`}
              >
                <p className="">{`${currentVan.type[0].toUpperCase()}${currentVan.type.slice(1)}`}</p>
              </button>
              <h2 className="font-bold text-2xl">{currentVan.name}</h2>
              <p>${currentVan.price}/day</p>
            </div>

            </div>
            

            <nav className="flex gap-10">
              <NavLink to="." end className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}>Details</NavLink>
              <NavLink  to="pricing"  className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}   >Pricing</NavLink>
              <NavLink to="Photos"  className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}   >Photos</NavLink>
            </nav>
            <Outlet context={[currentVan]}/>
          </div>
       
      </section>
    </>
  );
};

export default HostVanDetail;
