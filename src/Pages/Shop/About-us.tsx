import React from "react";
import Header from "../../Components/Shop/Header";
import Footer from "../../Components/Shop/footer";

const AboutUs = () => {
  return (
    <React.Fragment>
      <title>About Us</title>
      <Header />
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Me</span>
            </h2>
            <p className="text-gray-700">
              Hi! I'm Mehdi Mohammadzadeh, 21 years old, a passionate front-end
              developer. I work mainly with Angular, React, and Next.js, and I
              also have some experience with PHP. I love building interactive
              and user-friendly web applications and continuously improving my
              skills.I'm currently looking for front-end opportunities where I
              can contribute, learn, and grow. Feel free to reach out if you
              want to collaborate or just say hi
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
