import { React } from "react";
import { services,technologies } from "../assets/file/Data";
// import { BallCanvas } from "./canvas/ball";

const ServiceCard = ({index, title, icon}) => (
 
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  {/* <img className="max-w-full rounded-t-lg" src={icon} alt="skill" /> */}
    <div className="p-5">
      <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
    </div>
</div>

);
export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed  mx-auto text-ternary-dark dark:text-primary-light">
            I am a driven full stack developer with experience in software architecture, database design, web
            development, and object-oriented programming. I am proud to have supported company-wide business and
            technology projects, exceeding quality expectations by gathering requirements, identifying user stories,
            and developing applications, functionalities, and graphical user interfaces.
          </p>
        </div>
        <div className='grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        
        <div className='flex flex-row flex-wrap justify-center gap-10 p-8'>
          {technologies.map((technology) => (
            <div className='p-[1px] rounded-[20px] shadow-card' key={technology.name}>
              {/* <BallCanvas icon={technology.icon} /> */}
              <img
                  src={technology.icon}
                  alt='web-development'
                  className='object-cover h-20'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}