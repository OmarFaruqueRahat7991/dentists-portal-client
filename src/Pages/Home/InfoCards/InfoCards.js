import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: '9.00 am to 10.00m pm everyday.',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-cyan-300 to-blue-600'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Bahaddarhat,Chittagong',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '0987654321',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-cyan-300 to-blue-600'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white'>
            {
                cardData.map(card => <InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;