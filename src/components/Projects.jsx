import { React } from "react";
import { projects } from "../assets/file/Data";

export default function Projects() {
  return (
    <section id="projects" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-ternary-dark dark:text-ternary-light">
            Projects portfolio
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-ternary-dark dark:text-ternary-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer bg-secondary-light dark:bg-ternary-dark text-ternary-dark dark:text-ternary-light">
                  <h2 className="text-lg title-font font-large mb-1">
                    {project.title}
                  </h2>
                  <h1 className="title-font text-sm font-medium mb-3">
                    {project.subtitle}
                  </h1>
                  <p className="leading-relaxe">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}