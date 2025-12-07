import React from 'react'

const QuestionHero = () => {
  return (
    <>
      <div className='w-screen h-screen   bg-gray-300'>
        <div className=' h-[15%] w-full flex flex-col justify-center items-center '>
          <h1 className='text-black text-4xl mt-15'>Question</h1>
          <h3 className='text-black text-1xl '>Find the answers of the most asked questions</h3>
        </div>

        <div className='h-[85%] w-screen p-10  flex  flex-wrap justify-evenly gap-5 items-center '>
          {/* 1 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>How do I book a train ticket? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>You can book a train ticket by selecting your departure and destination stations, choosing your travel date, and confirming your seat preference. </p>
          </div>


          {/* 2 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>Can I cancel or modify my booking? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>Yes, you can cancel or modify your booking through your account dashboard. Please note that cancellation fees and modification policies may apply depending on the provider. </p>
          </div>

          {/* 3 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>What payment methods do you accept?</p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>We accept various payment methods, including credit/debit cards, net banking, and popular digital wallets. All transactions are secure and encrypted. </p>
          </div>

          {/* 4 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>How do I choose the best hotel for my stay? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>You can filter hotels based on location, price range, amenities, and guest ratings. We provide detailed reviews and ratings to help you make an informed decision. </p>
          </div>

          {/* 5 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>Are there any discounts or offers available? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>Yes, we regularly offer discounts, seasonal promotions, and special deals. Be sure to check our Offers section for the latest updates. </p>
          </div>

          {/* 6 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>How do I book a cab? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>To book a cab, enter your pickup location and destination, select the type of cab, and confirm your booking. You’ll get real-time updates on your ride. </p>
          </div>

          {/* 7 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>Is my personal information secure? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>Absolutely! We prioritize your privacy and use advanced encryption protocols to keep your data safe. </p>
          </div>

          {/* 8 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>Can I book multiple services in one go? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>Yes, you can bundle services such as flights, hotels, and cabs into a single booking for convenience and potential savings. </p>
          </div>

          {/* 9 */}
          <div className='h-[27%] w-1/4 border border-gray-400 rounded-2xl '>
            <div className='flex justify-between'>
              <p className='text-black ml-2 mt-2 font-bold'>What should I do if I face an issue with my booking? </p>
              <a href="" className='text-black font-bold text-2xl  mr-5'>+</a>
            </div>
            <p className='text-black p-2'>If you encounter any issues, you can reach out to our customer support team through live chat, email, or phone. We’re here to help you 24/7. </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default QuestionHero
