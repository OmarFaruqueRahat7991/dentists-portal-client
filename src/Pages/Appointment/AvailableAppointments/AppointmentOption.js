import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots , price } = appointmentOption;
  return (
    <div className="card shadow-xl">
       <div className="card-body text-center">
      <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
        <p className="text-black">{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p className="text-black">{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        <p className="text-black">Fee: {price} Taka</p>
        <div className="card-actions justify-center">
          <label
           disabled={slots.length === 0}
           htmlFor="booking-modal"
            className="btn btn-primary"
            onClick={() => setTreatment(appointmentOption)}
            >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
