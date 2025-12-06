import React from "react";

const ContactUs = () => {
  return (
    <div className="h-screen px-10 flex items-center  justify-center gap-30">

     
      <div className="relative w-[40%] h-[85%] flex justify-center items-center">
        <img
          className="h-full w-full rounded-2xl object-cover"
          src="/images/CU4.jpg"
          alt="Contact"
        />

        {/* <h1 className="absolute bottom-8 left-8 text-white text-5xl font-bold drop-shadow-lg">
          Get in Touch
        </h1> */}
      </div>


      <div className="flex flex-col items-center justify-center p-4 w-[40%] bg-white rounded-xl shadow-lg">
        <h2 className="text-black text-3xl font-semibold mb-6">
          Contact Us
        </h2>

        <form className="flex flex-col gap-4 w-full max-w-md text-black">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
