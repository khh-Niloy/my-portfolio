import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ModernCard = () => {
  const [card, setcard] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setcard(data);
      });
  }, []);

  console.log(card);

  return (
    <div id="projects" className="flex justify-center p-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full max-w-[1200px]">
        {card.map((e) => (
          <div
            className="group relative flex flex-col h-full bg-black/90 shadow-2xl 
                  transition-all duration-700 ease-out hover:-translate-y-2
                  rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-gray-800/30 to-neutral-900/80
                        opacity-0 transition-all duration-700 group-hover:opacity-100"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] 
                        bg-[length:250%_250%] opacity-0 transition-all duration-700 
                        group-hover:opacity-100 group-hover:animate-shimmer"
            />
            <figure className="relative">
              <img
                src={e.image}
                className="w-full rounded-b-2xl transition-transform duration-500 group-hover:scale-105"
                alt="Shoes"
              />
            </figure>
            <div className="p-5 relative z-10 flex flex-col flex-grow">
              <h2
                className="card-title text-2xl font-bold text-white 
                     transition-colors duration-500 group-hover:text-transparent
                     group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                     from-zinc-100 via-white to-zinc-100"
              >
                {e.name}
              </h2>
              <p
                className="text-zinc-400 transition-colors duration-500 
                     group-hover:text-zinc-300 list-none flex flex-wrap text-[9px] gap-2 mt-2"
              >
                {e.tech.map((x) => (
                  <li className="px-2 py-1 rounded-lg border border-zinc-500/40">
                    <a>{x}</a>
                  </li>
                ))}
              </p>
              <div className="mt-auto pt-6 w-full">
                <Link className="block w-full" to={`/detailes/${e.id}`}>
                  <button
                    className="btn w-full rounded-lg bg-zinc-800 py-3 
                           text-white border border-zinc-700 transition-all duration-500 
                           hover:bg-zinc-900 hover:border-zinc-600 
                           group-hover:shadow-lg group-hover:shadow-black/20 active:scale-95"
                  >
                    <div className="flex items-center justify-center gap-2">
                      Project Detailes
                      <GoArrowUpRight className="text-[1.5rem] p-1 bg-white text-black rounded-full" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add shimmer animation
const styles = `
  @keyframes shimmer {
    0% { background-position: -100% -100%; }
    100% { background-position: 100% 100%; }
  }
  .animate-shimmer {
    animation: shimmer 8s linear infinite;
  }
`;

// Add style tag to head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default ModernCard;
