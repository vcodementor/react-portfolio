import { React } from "react";
import { testimonials } from "../assets/file/Data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full" key={testimonial.id}>
              <div className="h-full bg-opacity-10 p-8 shadow-lg hover:shadow-xl cursor-point bg-secondary-light dark:bg-ternary-dark">
                <p className="leading-relaxed mb-6 text-ternary-dark dark:text-ternary-light">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-ternary-dark dark:text-ternary-light">
                      {testimonial.name}
                    </span>
                    <span className="text-sm uppercase text-ternary-dark dark:text-ternary-light">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}