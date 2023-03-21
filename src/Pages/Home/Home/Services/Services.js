import React from 'react';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. Its been an essential oral health treatment for decades.',
            icon: cavity,
            bgClass: 'bg-gradient-to-r from-gray-300 to-white'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'A cavity filling is when the dentist fills the opening in your tooth with some kind of material.',
            icon: fluoride,
            bgClass: 'bg-gradient-to-r from-gray-300 to-white'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Best Teeth Whitening Around. We Utilize Worlds Most Advanced Teeth Whitening System.',
            icon: whitening,
            bgClass: 'bg-gradient-to-r from-gray-300 to-white'
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold text-primary'>Our Services</h3>
                <h2 className='text-5xl font-semibold text-black'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white mt-10'>
            {
                servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;