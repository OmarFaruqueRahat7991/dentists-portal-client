import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import SingleReview from './SingleReview';

const Review = () => {

    const reviewData = [
        {
            _id: 1,
            name: 'Omar F.',
            img: people1,
            review: 'Unlike other dentists around, Dentists Portal takes you where you’re at rather than chastising or shaming. I can’t recommend them highly enough. You will be well cared for!',
            location: 'Bahaddarhat,Chittagong',
            bgClass: 'bg-gradient-to-r from-slate-100 to-slate-200'
        },
        {
            _id: 2,
            name: ' Lisa J.',
            img: people2,
            review: 'It’s a pleasure to go to the dentist at Dentists Portal. The office is gorgeous, feels peaceful & clean. The staff has an upbeat attitude. Dr. Zervas is so kind & genuine.',
            location: 'Muradpur,Chittagong',
            bgClass: 'bg-gradient-to-r from-slate-100 to-slate-200'
        },
        {
            _id: 3,
            name: ' Sherryll K.',
            img: people3,
            review: 'Everything about this office is excellent! The staff is friendly and attentive. The assistants make you feel comfortable. Probably the best dentist I have ever seen. Wonderful place! Wonderful staff! Wonderful doctors!',
            location: 'CDA R/A,Chittagong',
            bgClass: 'bg-gradient-to-r from-slate-100 to-slate-200'
        },
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-primary text-3xl font-semibold">Reviews</h4>
                    <h4 className="text-black text-4xl font-semibold">Kind Words From <br /> Our Patients</h4>

                </div>
                <figure>
                    <img className='lg:w-40 w-20' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
            {
                reviewData.map(singleReview => <SingleReview
                key={singleReview._id}
                singleReview={singleReview}
                ></SingleReview>)
            }
        </div>
        </section>
    );
};

export default Review;