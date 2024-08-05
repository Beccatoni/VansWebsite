import React from "react";
import { Link } from "react-router-dom";
import home from '../assets/home.png'

const Home = () => {
  return (
    <div className="bg-[#FFF7ED] w-full h-screen relative flex items-center justify-center">
      
      <div className="absolute w-full px-24 text-white flex flex-col gap-12 ">
     <div className="flex flex-col gap-4">
     <h1 className="font-bold text-4xl">You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. <br /> Rent the
        perfect van to make your perfect road trip.
      </p>
     </div>
      <button className="bg-[#E17654] w-full h-[2.7rem] rounded-lg">Find your van</button>
      </div>
      
      {/* <Link to="/vans">Find your van</Link> */}
 
       <img src={home} alt="" className="h-full  " />
    </div>
  );
};

export default Home;
