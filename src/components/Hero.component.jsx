import React from "react";
import DarkMood from "./DarkMood.component.jsx";

const HeroComponent = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center  bg-linear-[3deg] from-[#FF6F00]/95 from-10% to-white/90 to-45%  dark:to-black dark:to-35%">
      {/* NavBar */}
      <header className="nav fixed w-[1120px] h-[60px] mt-3 rounded-full flex justify-between px-4 items-center bg-[#FF6F01] dark:bg-[#FFE3C9]  top-0 z-50 transition-colors duration-700">
        {/* Logo img */}
        <div>
          <img
            className="w-[180px] h-[30px] dark:hidden transition-colors duration-700"
            src="/assets/chaicode-white.svg"
            alt="chaicode"
          />
          <img
            className="w-[180px] h-[30px] hidden dark:block transition-colors duration-700"
            src="/assets/chaicode-black.svg"
            alt="chaicode"
          />
        </div>
        {/* Nav menu */}
        <div className=" flex items-center justify-center gap-10 font-black text-xl text-white dark:text-black transition-colors duration-700">
          <a
            href="https://courses.chaicode.com/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cohort
          </a>
          <a
            href="https://courses.chaicode.com/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Udemy
          </a>
          <a
            href="https://courses.chaicode.com/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            href="https://courses.chaicode.com/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review
          </a>
        </div>
        {/* Dark mode btn */}
        <div>
          <DarkMood />
        </div>
        {/* Login btn */}
        <a
          href="https://courses.chaicode.com/learn/account/signin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium  dark:bg-gradient-to-r border-2  border-orange-200 cursor-pointer bg-linear-60 from-[#ffcc02] to-rose-500 dark:from-orange-500 dark:to-amber-500 hover:from-orange-600 hover:to-amber-600 dark:text-white m-4 px-7 py-[4px] h-auto text-lg rounded-xl shadow-lg shadow-orange-500/20 relative overflow-hidden transition-colors duration-700"
            type="button"
          >
            Login
          </button>
        </a>
      </header>

      <div className=" absolute left-80 top-8 w-[700px]">
        <img className="dark:hidden opacity-10 transition-colors duration-700" src="/assets/chai-white.svg" alt="Chai" />
        <img className="hidden dark:block opacity-8 transition-colors duration-700" src="/assets/chai-gray.svg" alt="Chai" />
      </div>

      {/* Hero Content */}
      <div className="container min-h-screen mx-auto px-4 py-20  relative z-10 {bg-amber-100} transition-colors duration-700">
        <div className="max-w-6xl mx-auto text-center mt-12 p-5 {bg-amber-700}">
          {/* Achievements */}
          <div className="mb-2">
            <span className="inline-flex items-center justify-center rounded-md text-shadow-md dark:text-white font-bold w-fit whitespace-nowrap shrink-0 px-4 py-1.5 bg-[#FF6F00]  transition-colors duration-700">
              Trusted by 1.5M Code Learners
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-[4.6vw]  font-bold mb-4 leading-tight bg-gradient-to-r from-[#FF6F00] to-[#FF0004] inline-block text-transparent bg-clip-text transition-colors duration-700">
            Consistency and Community
          </h1>
          {/* Sub-Heading */}
          <h2 className="text-2xl  font-bold mb-8 leading-tight dark:text-white transition-colors duration-700">
            An unmatched Learning Experience for coding courses.
          </h2>
          {/* HighLights */}
          <div className="dark:text-white flex flex-col gap-4 mb-10 transition-colors duration-700">
            <p className="text-md font-medium">
              Content is every where, we provide a learning experience that is
              unmatched
            </p>
            <div className="flex flex-wrap justify-center gap-3 transition-colors duration-700">
              <div className="flex items-center gap-2 bg-[#F5D6AA] backdrop-blur-sm text-black font-bold px-5 py-2 rounded-[10px] border-2 border-[#FF6F00]">
                <span className="text-sm">Bounties</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5D6AA] backdrop-blur-sm text-black font-bold px-5 py-2 rounded-[10px] border-2 border-[#FF6F00]">
                <span className="text-sm">Peer learning</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5D6AA] backdrop-blur-sm text-black font-bold px-5 py-2 rounded-[10px] border-2 border-[#FF6F00]">
                <span className="text-sm">Virtual hostel</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5D6AA] backdrop-blur-sm text-black font-bold px-5 py-2 rounded-[10px] border-2 border-[#FF6F00]">
                <span className="text-sm">Alumni Network</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5D6AA] backdrop-blur-sm text-black font-bold px-5 py-2 rounded-[10px] border-2 border-[#FF6F00]">
                <span className="text-sm">Doubt sessions</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5D6AA] backdrop-blur-sm text-black font-bold px-5 py-2 rounded-[10px] border-2 border-[#FF6F00]">
                <span className="text-sm">Peer code reviews</span>
              </div>
            </div>
            <p className="text-md font-medium">
              Group projects and so many other activities to keep you on track.
            </p>
          </div>
          {/* Call to Action */}
          <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 dark:text-white my-2 px-9 py-3 h-auto text-xl rounded-xl shadow-lg shadow-orange-500/20 relative overflow-hidden transition-colors duration-700"
            >
              Check all Live Cohorts
            </button>
          </a>
        </div>
        {/* Embeded Video  */}
        <div className="mt-16 max-w-3xl mx-auto relative transition-colors duration-700">
          <div className=" aspect-video absolute inset-0 bg-gradient-to-br border-[3px] border-amber-500 dark:border-[3px] dark:from-orange-500 dark:to-amber-500 rounded-2xl pointer-events-none transition-colors duration-700">
            <iframe
              class="w-full h-full rounded-2xl transition-colors duration-700"
              src="https://www.youtube.com/embed/VNb_LawBBWU?si=vVRslxXgcd4DckCN"
              title="ChaiCode Introduction"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
