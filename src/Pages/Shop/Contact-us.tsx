import React from "react";
import Header from "../../Components/Shop/Header";
import Footer from "../../Components/Shop/footer";

const ContactUs = () => {
  return (
    <React.Fragment>
      <title>Contact Us</title>
      <Header />
      <div className="p-5 flex justify-center">
        <div className="w-[1000px] h-[650px] flex  border-[3px] border-white shadow-xl shadow-gray-400">
          <div className="left w-96  bg-blue-900 rounded-xl pt-6">
            <h2 className="text-5xl font-extrabold  text-center">
              Get In <span className="text-cyan-500">Touch</span>
            </h2>
            <p className="text-xl mt-2 p-3 font-serif text-white">
              Hi! I'm Mehdi Mohammadzadeh, 21 years old, a passionate front-end
              developer. I work mainly with Angular, React, and Next.js, and I
              also have some experience with PHP. I love building interactive
              and user-friendly web applications and continuously improving my
              skills.I'm currently looking for front-end opportunities where I
              can contribute, learn, and grow. Feel free to reach out if you
              want to collaborate or just say hi
            </p>
            <div className="flex items-center">
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
              </svg>
              <span className="text-4xl font-bold text-white">Iran</span>
            </div>
            <div className="flex items-center mt-6">
              <svg
                className="w-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
              </svg>
              <span className="text-3xl font-bold text-white">
                <a href="tel:+98">+989148239288</a>
              </span>
            </div>
          </div>
          <div className="right bg-white ml-8 shadow-xl p-8">
            <form action="">
              <div className="flex justify-between items-center flex-row gap-16">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstname"
                    className="text-xl text-cyan-300 font-bold"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="border-2 p-1 pr-9 bg-gray-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lastname"
                    className="text-xl text-cyan-300 font-bold"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="border-2 p-1 pr-9 bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-11">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xl text-cyan-300 font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-2 p-2 pr-9 bg-gray-100"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="message"
                    className="mb-3 text-xl text-cyan-300 font-bold"
                  >
                    Your message:
                  </label>
                  <textarea
                    rows={10}
                    className="border-2 p-1 pr-9 bg-gray-100"
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between w-full px-3 mt-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
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
