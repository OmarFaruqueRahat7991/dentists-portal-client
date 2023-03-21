import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;
    
    return (
        <div className='m-20'>
        <h3 className="text-3xl text-center text-black">Payment for {treatment}</h3>
        <p className="text-xl text-center text-black">Please pay <strong>{price} Taka</strong> for your appointment on {appointmentDate} at {slot}</p>
        <div className='w-96 my-12 text-black ml-28'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;