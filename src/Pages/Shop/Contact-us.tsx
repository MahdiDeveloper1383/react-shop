import React from "react";
import Header from "../../Components/Shop/Header";
import Footer from "../../Components/Shop/footer";

const ContactUs = () => {
  return (
    <React.Fragment>
      <title>Contact Us</title>
      <Header />
   <div className="p-5 flex justify-center">
  <div className="flex flex-col md:flex-row justify-center mr-auto ml-auto items-center border-[3px] border-white shadow-xl shadow-gray-400 w-full max-w-6xl min-h-[650px] rounded-2xl overflow-hidden">
    
    <div className="left w-full md:w-1/3 bg-blue-900 p-6 rounded-2xl">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white">
        Get In <span className="text-cyan-500">Touch</span>
      </h2>
      <p className="text-base md:text-xl mt-2 p-3 font-serif text-white">
        Hi! I'm Mehdi Mohammadzadeh, 21 years old, a passionate front-end
              developer. I work mainly with Angular, React, and Next.js, and I
              also have some experience with PHP. I love building interactive
              and user-friendly web applications and continuously improving my
              skills.I'm currently looking for front-end opportunities where I
              can contribute, learn, and grow. Feel free to reach out if you
              want to collaborate or just say hi
      </p>
      <div className="flex items-center mt-4">

        <span className="text-2xl md:text-4xl font-bold text-white ml-2">Iran</span>
      </div>
      <div className="flex items-center mt-6">
        <span className="text-xl md:text-3xl font-bold text-white ml-2">
          <a href="tel:+98">+989148239288</a>
        </span>
      </div>
    </div>

    <div className="right w-full md:w-2/3 bg-white md:ml-8 shadow-xl p-8">
      <form action="">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-16">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="firstname" className="text-xl text-cyan-300 font-bold">
              First Name:
            </label>
            <input type="text" className="border-2 p-1 pr-9 bg-gray-100" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
            <label htmlFor="lastname" className="text-xl text-cyan-300 font-bold">
              Last Name:
            </label>
            <input type="text" className="border-2 p-1 pr-9 bg-gray-100" />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <label htmlFor="email" className="text-xl text-cyan-300 font-bold">
            Email
          </label>
          <input type="email" className="border-2 p-2 pr-9 bg-gray-100" />
          <label htmlFor="message" className="mb-3 mt-4 text-xl text-cyan-300 font-bold">
            Your message:
          </label>
          <textarea rows={6} className="border-2 p-1 pr-9 bg-gray-100"></textarea>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full px-3 mt-3">
          <label className="block text-gray-500 font-bold mb-2 md:mb-0">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
          <button
            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded mt-2 md:mt-0"
            type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>

  </div>
</div>

      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
