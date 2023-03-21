import React from 'react';
import Banner from '../Banner/Banner';
import CareSection from '../CareSection/CareSection';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ContactUs from './ContactUs/ContactUs';
import Review from './Review/Review';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <CareSection></CareSection>
            <MakeAppointment></MakeAppointment>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;