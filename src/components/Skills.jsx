import { React } from "react";
import { skills } from "../assets/file/Data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-ternary-dark dark:text-primary-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill,index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-opacity-10 p-8 shadow-lg hover:shadow-xl cursor-pointerbg-secondary-light dark:bg-ternary-dark rounded items-center">
                <span className="title-font font-medium text-ternary-dark dark:text-ternary-light">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}