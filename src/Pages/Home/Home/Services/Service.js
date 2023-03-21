import React from "react";

const Service = ({service}) => {
  const {name,description,icon,bgClass} = service;
  return (
    <div className={`card ${bgClass} shadow-xl`}>
      <figure className="px-10 pt-10">
        <img
          src={icon}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default Service;
