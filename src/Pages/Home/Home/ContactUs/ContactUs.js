import React from 'react';
import bgImage from '../../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className="p-6 dark:text-gray-100 text-black bg-slate-200"
        style={{
            background: `url(${bgImage})`
        }}
        >
        <form novalidate="" className="bg-slate-200 my-10 container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
            <h2 className="w-full text-3xl font-bold leading-tight text-center">Contact Us</h2>
            <div>
                <label for="name" className="block mb-1 ml-1">Name</label>
                <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
            </div>
            <div>
                <label for="email" className="block mb-1 ml-1">Email</label>
                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
            </div>
            <div>
                <label for="message" className="block mb-1 ml-1">Message</label>
                <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
            </div>
            <div>
                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Submit</button>
            </div>
        </form>
    </section>
    );
};

export default ContactUs;