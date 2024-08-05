import React from "react";



const Card = (props) => {
  let background = ''
  if(props.category === 'simple' ){
    background = 'bg-[#E17654]'
  }else if(props.category === 'luxury'){
    background = 'bg-[#161616]'
  } else if(props.category === 'rugged'){
    background = 'bg-[#115E59]'
  } else{
    background = ''
  }
  
  return (
    <div className="rounded-lg flex flex-col gap-5">
      <img src={props.image} alt="" className="rounded-lg" />
      <div className="flex justify-between">
        <p className="font-bold">{props.name}</p>
        <p className="font-semibold">${props.price} /day</p>
      </div>
      <div
        className={`${background} w-[9rem] h-[2.7rem] rounded-md text-center py-2 text-white font-semibold`}
       
      >
        {`${props.category[0].toUpperCase()}${props.category.slice(1)}`}
      </div>
    </div>
  );
};

export default Card;
