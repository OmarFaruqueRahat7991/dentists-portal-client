import React from "react";
import img from '../../../assets/images/doctor.png';
import bgImage from '../../../assets/images/appointment.png';
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32"
    style={{
        background: `url(${bgImage})`,
        height: '476px'
    }}
    >
    <div className="hero rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="lg:w-1/2 rounded-lg  -mt-36 hidden lg:block"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold text-primary">Appointment</h1>
          <h1 className="text-5xl font-bold text-white">Book your visit online</h1>
          <p className="py-6 text-white">
          View available appointments and enjoy dentistry done right. +FREE teeth whitening for life.
          </p>
          <PrimaryButton>Set Appointment</PrimaryButton>
        </div>
      </div>
    </div>
    </section>
  );
};

export default MakeAppointment;
