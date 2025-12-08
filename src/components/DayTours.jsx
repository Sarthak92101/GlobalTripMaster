import React from 'react';

const dayTours = [
    { title: 'Agra Day Tour', image: 'https://www.travelindiatours.in/images/tours/day/agra-day.jpg' },
    { title: 'Bangalore Day Tour', image: 'https://www.travelindiatours.in/images/tours/day/bangalore-day.jpg' },
    { title: 'Delhi Day Tour', image: 'https://www.travelindiatours.in/images/tours/day/delhi-day.jpg' },
    { title: 'Goa Day Tour', image: 'https://www.travelindiatours.in/images/tours/day/goa-day.jpg' },
    { title: 'Jaipur Day Tour', image: 'https://www.travelindiatours.in/images/tours/day/jaipur-day.jpg' },
    { title: 'Kolkata Day Tour', image: 'https://www.travelindiatours.in/images/tours/day/kolkata-day.jpg' },
    { title: 'Mumbai Day Tour', image: 'https://www.travelindiatours.in/images/tours/day/mumbai-day.jpg' },
];

const DayToursGrid = () => {
    return (
        <section className='w-screen bg-gradient-to-b from-white to-gray-100 py-12 px-6 md:px-12 min-h-[90vh]'>
            <div className='max-w-6xl mx-auto text-center mb-10 space-y-2'>
                <h2 className="text-4xl font-semibold text-gray-800">India Day Tour Packages</h2>
                <p className="text-lg text-gray-600">
                    Plan your day with the most beautiful memories of your life.
                </p>
            </div>

            <div className='flex flex-wrap gap-6 justify-center'>
                {
                    dayTours.map((tour, idx) => {
                        const grayscale = idx % 2 == 1;
                        return(
                            <div key={tour.title} className='group w-full sm:w-[48%] lg:w-[30%] xl:w-[22%] rounded-3xl overflow-hidden border-2 border-pink-200 bg-white shadow-sm transition duration-300 hover-boredr-pink-500'>
                                <div className='relative w-full aspect-[3/4] overflow-hidden'>
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="w-full h-full object-cover transition duration-500"
                                        style={{ filter: grayscale ? 'grayscale(1)' : 'none' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.filter = 'none')}
                                        onMouseLeave={(e) => (e.currentTarget.style.filter = grayscale ? 'grayscale(1)' : 'none')}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                                        <p className="text-sm font-semibold">(0N / 1D)</p>
                                        <h3 className="text-xl font-semibold mt-1">{tour.title}</h3>
                                    </div>
                                </div>

                            </div>


                        )
                    })
                }
            </div>
        </section>
    )
};

export default DayToursGrid;


