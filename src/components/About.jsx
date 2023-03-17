import { React } from "react";
import {Images} from '../utlis/image';
// import {EarthCanvas} from '../components/canvas/earth';

export default function About() {
  return (
    
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light ">
            Hi, I'm Vivek.
          </h1>
          <div className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">A Full-Stack Developer & Design Enthusiast</div>
          <p className="mb-8 leading-relaxed text-ternary-dark dark:text-primary-light">
                I am a hard-working and detail-oriented problem solver who has completed several impressive projects.
                I know the importance of teamwork,communication, and decision-making under pressure. I believe my diverse set of technical skills and
                passion for software development makes me a strong candidate for your team.
          </p>
          <div className="flex justify-center">
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <EarthCanvas/> */}
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Images.about}
          />
          <div className="object-cover object-center rounded">
          </div>
        </div>
      </div>
    </section>
  );
}