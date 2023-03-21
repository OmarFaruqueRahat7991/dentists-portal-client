import React from "react";
import img from "../../../assets/images/treatment.png";

const CareSection = () => {
  return (
    <div className="mt-20">
      <section className="bg-slate-100 text-black rounded-xl p-16">
        <div className="container flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={img} alt="" className="lg:w-1/2" />
          </div>
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <button className="w-[150px] btn btn-primary bg-gradient-to-r from-cyan-300 to-blue-700">
            Get Started
          </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareSection;
