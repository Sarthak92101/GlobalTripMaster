import React, { useRef } from 'react'

const tours = [
  {
    title: 'Goa Tour Package',
    nights: '03 Nights / 04 Days',
    price: '₹ 7,999',
    image: 'https://www.travelindiatours.in/images/tours/domestic/goa-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Kashmir Tour Package',
    nights: '04 Nights / 05 Days',
    price: '₹ 18,999',
    image: 'https://www.travelindiatours.in/images/tours/domestic/kashmir-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'North East Tour Package',
    nights: '07 Nights / 08 Days',
    price: '₹ 33,999',
    image: 'https://www.travelindiatours.in/images/tours/domestic/north-east-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Rajasthan Tour Package',
    nights: '05 Nights / 06 Days',
    price: '₹ 5,499',
    image: 'https://www.travelindiatours.in/images/tours/domestic/rajasthan-tour.png',
    cta: 'Enquire Now',
  },
  {
    title: 'Kerala Tour Package',
    nights: '05 Nights / 06 Days',
    price: '₹ 14,999',
    image: 'https://www.travelindiatours.in/images/tours/domestic/kerala-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Golden Triangle Tour Package',
    nights: '04 Nights / 05 Days',
    price: '₹ 14,999',
    image: 'https://www.travelindiatours.in/images/tours/domestic/golden-triangle-tour.jpg',
    cta: 'Enquire Now',
  },
]

const TourSlider = () => {
  const scrollRef = useRef(null)
  const firstCardRef = useRef(null)

  const scrollByCard = (direction) => {
    const cardWidth = firstCardRef.current?.offsetWidth || 320
    const gap = 16 // gap-4
    const distance = direction * (cardWidth + gap)

    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-screen bg-gradient-to-b from-white to-gray-100 py-12 px-6 md:px-12 min-h-[90vh]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">Top Domestic Tour Packages</h2>
          <p className="text-xl text-gray-600 mt-2">Packages for best-selling destinations in India</p>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scrollByCard(-1)}
            className="h-10 w-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shadow hover:bg-pink-200 transition"
            aria-label="Scroll previous"
          >
            ←
          </button>
          <button
            onClick={() => scrollByCard(1)}
            className="h-10 w-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shadow hover:bg-pink-200 transition"
            aria-label="Scroll next"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
      >
        {tours.map((tour, idx) => (
          <article
            key={tour.title}
            ref={idx === 0 ? firstCardRef : null}
            className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-[calc((100vw-4rem)/3)] lg:max-w-[calc((100vw-4rem)/3)] snap-start relative rounded-3xl overflow-hidden shadow-lg bg-black"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="h-[70vh] md:h-[75vh] lg:h-[80vh] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide">{tour.nights}</p>
              <h3 className="text-2xl font-semibold leading-tight">{tour.title}</h3>
              <p className="text-lg font-semibold">{tour.price} <span className="text-sm font-normal">per person</span></p>
              <button className="mt-3 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                {tour.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TourSlider

