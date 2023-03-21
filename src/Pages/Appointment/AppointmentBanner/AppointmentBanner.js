import React  from "react";
import chair from '../../../assets/images/chair.png';
import '../../Home/Banner/Banner.css';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
  return (
    <header>
      <div className="hero min-h-screen rounded-xl bg-slate-100 banner text-black">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
          <DayPicker 
           mode="single"
           selected={selectedDate}
           onSelect={setSelectedDate}
          />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
