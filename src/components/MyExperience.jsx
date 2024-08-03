import React, { useState } from 'react';

const MyExperience = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="relative bg-[#151030] p-6 border rounded-xl mb-4">
      <div 
        className="lg:text-2xl md:text-xl text-sm mb-4 font-semibold text-head flex flex-row justify-between cursor-pointer"
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <h3>Freelance, Full Stack Software Engineer </h3>
        <h3>Jan 2023 - Present</h3>
        <p className="mt-2 lg:text-lg md:text-sm text-xs">
            Technologies: Python, JavaScript, TypeScript, React, Node.js, Tailwind CSS
          </p>
      </div>
      {isOpen1 && (
        <>
        
          <div className="mt-5">
            <p className="lg:text-lg md:text-sm text-xs">
              Parkinson Ai - Full Stack Web development
            </p>
            <p className="lg:text-lg md:text-sm text-xs">
              Technologies: Frontend: HTML5, CSS3, Bootstrap, JavaScript (ES6), Backend: Python, Django, Database: SQL, Speech Recognition: Web Speech API or voice, RESTful APIs: for communication between frontend and backend, Authentication: Web Tokens Authentication for secure access
            </p>
            <ul className="space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs">
              <li>Developed an innovative web application named "PARKINSON" that uses voice input through a RESTful API to detect symptoms of neurological diseases.</li>
              <li>Implemented RESTful APIs for interaction with AI models for capturing and processing voice samples from users.</li>
              <li>Created a backend using Python with Django to handle voice data, analyze symptoms, and provide diagnostic feedback.</li>
            </ul>
            <p className="mt-8 lg:text-lg md:text-sm text-xs">
              Cleaning Services Solution - Full Stack Web development
            </p>
            <p className="lg:text-lg md:text-sm text-xs">
              Backend Framework: Django (Python), Frontend: HTML5, CSS3, JavaScript (ES6), Frontend Framework: Bootstrap, Database: PostgreSQL (or any other supported by Django)
            </p>
            <ul className="space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs">
              <li>Developed "Omi Serve," an innovative web application for ordering general services online.</li>
              <li>Implemented a backend using Django, facilitating service order management and user interaction.</li>
              <li>Designed a frontend with HTML, CSS, JavaScript, and Bootstrap to create a responsive and user-friendly interface for service ordering.</li>
            </ul>
            <p className="mt-10 lg:text-lg md:text-sm text-xs">Omni Group</p>
            <p className="lg:text-lg md:text-sm text-xs">
              Frontend: HTML5, CSS3, JavaScript (ES6), Frontend Framework: Bootstrap for responsive design, Mapping: Google Maps API for property location visualization, Backend: Python (Django framework)
            </p>
            <p className="lg:text-lg md:text-sm text-xs">
              Database: PostgreSQL for data storage
            </p>
            <ul className="space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs">
              <li>Developed an innovative web application named "Omni Group" for a construction company specializing in apartment and land sales.</li>
              <li>Implemented a frontend using HTML, CSS, JavaScript, and Bootstrap to showcase available properties with detailed descriptions, images, and pricing.</li>
              <li>Built a backend system with Django to manage property data, including integration with Google Maps API for location mapping and displaying building plans.</li>
            </ul>
          </div>
          <div className="md:flex flex-row gap-4 mt-8">
            <div className="relative">
              <img src="path_to_first_image" alt="project0" className="w-full md:w-auto h-[152px] md:h-[80px] mt-4" />
              <img src="path_to_link_image" alt="project0" className="w-14 md:w-7 h-10 md:h-5 absolute right-0 bottom-0" />
            </div>
            <img src="path_to_second_image" alt="project0" className="w-full md:w-auto h-full mt-4" />
            <img src="path_to_third_image" alt="project0" className="w-full md:w-auto h-full mt-4" />
          </div>
        </>
      )}

      <div 
        className="lg:text-2xl md:text-xl text-sm mb-4 font-semibold text-head flex flex-row justify-between cursor-pointer"
        onClick={() => setIsOpen2(!isOpen2)}
      >
        <h3>Another Experience</h3>
        <h3>Jan 2022 - Dec 2022</h3>
      </div>
      {isOpen2 && (
        <>
          {/* Add details for the second experience */}
        </>
      )}

      <div 
        className="lg:text-2xl md:text-xl text-sm mb-4 font-semibold text-head flex flex-row justify-between cursor-pointer"
        onClick={() => setIsOpen3(!isOpen3)}
      >
        <h3>Another Experience</h3>
        <h3>Jan 2021 - Dec 2021</h3>
      </div>
      {isOpen3 && (
        <>
          {/* Add details for the third experience */}
        </>
      )}
    </div>
  );
};

export default MyExperience;
