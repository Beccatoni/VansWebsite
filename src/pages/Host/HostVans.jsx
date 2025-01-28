import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../Api";
import { requireAuth } from "../../utils";




export async function hostVanLoader({request}) {
  try {
    await requireAuth(request); // Assuming this handles authentication correctly
    const data = await getHostVans();
    return data || []; // Return data or an empty array if data is falsy
  } catch (error) {
    console.error("Error loading host vans:", error);
    throw error; // Rethrow the error to be caught by React Router or error boundaries
  }
}

const HostVans = () => {
  const hostVans = useLoaderData();

  if (!hostVans) {
    return <h2>Loading...</h2>; // Handle initial loading state
  }

  const hostVanEls = hostVans.map((van) => (
    <Link to={van.id} key={van.id}>
      <div className="flex items-center justify-between bg-white px-9 py-7 rounded-lg">
        <div className="flex gap-7">
          <img
            src={van.imageUrl}
            alt={`Photo of ${van.name}`}
            className="h-[6rem] rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-[1.3rem] font-semibold">{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
        <p>Edit</p>
      </div>
    </Link>
  ));

  return (
    <section className="flex flex-col gap-5 px-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Your listed hostVans</h1>
        <p>View all</p>
      </div>

      <div>
        {hostVans.length > 0 ? (
          <section className="flex flex-col gap-7">{hostVanEls}</section>
        ) : (
          <h2>No host vans found.</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
