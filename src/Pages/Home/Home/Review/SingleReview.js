import React from "react";

const SingleReview = ({ singleReview }) => {
  const { name, review, img, bgClass, location } = singleReview;
  return (
    <div className={`card shadow-xl text-black ${bgClass}`}>
      <div className="card-body">
        <p>{review}</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
            </div>
          </div>
          <div>
                <h5 className="text-lg">{name}</h5>
                <p>{location}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
