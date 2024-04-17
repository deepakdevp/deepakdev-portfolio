import React from 'react';

const Home = () => {
  return (
    <section id="home" className="flex flex-col gap-12 justify-center items-center w-full h-[100vh]">
      <div className="flex  items-center justify-center gap-10 relative">
        <div className="hero-img basis-1/2" />
        <div className="">
          <h1 className="text-5xl font-black leading-12 my-4">Fullstack Developer</h1>
          <p className="my-4 text-base font-medium text-slate-600">
            Hi, I'm Deepak Dev. A passionate Fullstack Developer based in Delhi, India. 📍
          </p>
          <span className="flex gap-4">
            <a
              aria-label="linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/stefan-topalovic-dev/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-linkedin"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/stefvndev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="w-full flex gap-12 items-center justify-center">
        <p className="font-mullish text-base flex items-center">Tech Stack</p>
        <div className="border-l border-gray-400"></div>
        <div className=" ">
          <ul className="flex gap-6">
            <li>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src="https://skillicons.dev/icons?i=py,js,ts"
                alt="skill-icon"
              />
            </li>

            <li>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src="https://skillicons.dev/icons?i=react,next"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src="https://skillicons.dev/icons?i=django,nodejs"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src="https://skillicons.dev/icons?i=docker,redis"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src="https://skillicons.dev/icons?i=mongodb,postgres"
                alt="skill-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
