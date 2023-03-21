import React from "react";
import "./Banner.css";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";


const Banner = () => {
  return (
    <div className="hero bg-slate-100 text-black banner p-10 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="lg:w-2/5 sm:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
