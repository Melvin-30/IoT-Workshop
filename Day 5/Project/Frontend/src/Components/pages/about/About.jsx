import React from "react";

function About() {
  return (
    <>
      <div className="min-h-dvh h-auto bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>

          <p className="text-gray-800 text-lg text-justify max-w-3xl mx-auto mb-6">
            I’m a third-year B.E. Computer Engineering student, and I’m
            developing this project as part of my React internship to gain
            practical experience in modern web development.
          </p>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto text-justify">
            The project focuses on learning and applying React concepts such as
            reusable components, React Router, responsive design, and Tailwind
            CSS while building a simple and user-friendly web application.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
