import React, { useEffect, useState } from "react";

const DarkMood = () => {
  const [darkMood, setDarkMood] = useState(true);
  useEffect(() => {
    if (darkMood) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMood]);

  const toggleDarkMood = () => {
    setDarkMood(!darkMood);
  };
  return (
    <button
      onClick={toggleDarkMood}
      className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors z-10"
    >
      <i
        className={`bx bx-${darkMood ? "sun" : "moon"} text-lg lg:text-xl`}
      ></i>
    </button>
  );
};

export default DarkMood;
