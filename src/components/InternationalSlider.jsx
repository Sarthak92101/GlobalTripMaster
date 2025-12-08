import React, { useEffect, useRef, useState } from 'react'

const internationalTours = [
  {
    title: 'Singapore Tour Package',
    nights: '04 Nights / 05 Days',
    price: '₹ 24,999',
    image: 'https://www.travelindiatours.in/images/tours/international/singapore-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Malaysia Tour Package',
    nights: '04 Nights / 05 Days',
    price: '₹ 22,499',
    image: 'https://www.travelindiatours.in/images/tours/international/malaysia-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Thailand Tour Package',
    nights: '05 Nights / 06 Days',
    price: '₹ 18,999',
    image: 'https://www.travelindiatours.in/images/tours/international/thailand-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Indonesia Tour Package',
    nights: '05 Nights / 06 Days',
    price: '₹ 21,999',
    image: 'https://www.travelindiatours.in/images/tours/international/indonesia-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Maldives Tour Package',
    nights: '04 Nights / 05 Days',
    price: '₹ 34,999',
    image: 'https://www.travelindiatours.in/images/tours/international/maldives-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Dubai Tour Package',
    nights: '04 Nights / 05 Days',
    price: '₹ 19,999',
    image: 'https://www.travelindiatours.in/images/tours/international/dubai-tour.jpg',
    cta: 'Enquire Now',
  },
  {
    title: 'Nepal Tour Package',
    nights: '04 Nights / 05 Days',
    price: '₹ 15,999',
    image: 'https://www.travelindiatours.in/images/tours/international/nepal-tour.jpg',
    cta: 'Enquire Now',
  },
]

const InternationalSlider = () => {
  const scrollRef = useRef(null)
  const cardRefs = useRef([])
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(null)

  // Auto-slide every 2s
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % internationalTours.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  // Scroll to active card smoothly (horizontal only, avoid page jump)
  useEffect(() => {
    const cardEl = cardRefs.current[active]
    const container = scrollRef.current
    if (cardEl && container) {
      const offset = cardEl.offsetLeft - container.offsetLeft
      container.scrollTo({ left: offset, behavior: 'smooth' })
    }
  }, [active])

  const scrollByCard = (direction) => {
    setActive((prev) => {
      const next = prev + direction
      if (next < 0) return internationalTours.length - 1
      if (next >= internationalTours.length) return 0
      return next
    })
  }

  return (
    <section className="w-screen bg-gradient-to-b from-white to-gray-100 py-12 px-6 md:px-12 min-h-[90vh]">
      <style>{`
        [data-intl-slider]::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">Top International Tour Packages</h2>
          <p className="text-xl text-gray-600 mt-2">Amazing international holiday packages</p>
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
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2 px-1"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        data-intl-slider
      >
        {internationalTours.map((tour, idx) => {
          const isActive = idx === active
          const isHovered = hovered === idx
          const isColored = isActive || isHovered
          return (
            <article
              key={tour.title}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="snap-center relative rounded-3xl overflow-hidden shadow-lg bg-black"
              style={{
                minWidth: 'calc((100vw - 6rem) / 3)',
                maxWidth: 'calc((100vw - 6rem) / 3)',
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-[70vh] md:h-[75vh] lg:h-[80vh] w-full object-cover transition duration-500"
                loading="lazy"
                style={{ filter: isColored ? 'none' : 'grayscale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2 backdrop-blur-[2px]">
                <p className="text-sm font-semibold uppercase tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {tour.nights}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {tour.title}
                </h3>
                <p className="text-lg font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {tour.price} <span className="text-sm font-normal">per person</span>
                </p>
                <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-base font-semibold transition drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
                  {tour.cta}
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default InternationalSlider

