import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, "PP");
    const { data:appointmentOptions = [] , refetch , isLoading} = useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn:  async() =>{
           const res = await fetch(`https://dentists-portal-server.vercel.app/v2/appointmentOptions?date=${date}`);
           const data = await  res.json();
           return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

   
    return (
        <section className='my-20'>
            <p className="text-center text-secondary text-xl font-bold">Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;