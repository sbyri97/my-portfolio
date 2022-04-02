import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="about-container">
            <div className="about-div">
              <h1 className="about-txt">
                Hi, I'm Reed.
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
              </h1>
              <p className="about-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
              </p>
              <div className="about-contact-div">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="about-img-container">
              <img
                className="about-img"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}
