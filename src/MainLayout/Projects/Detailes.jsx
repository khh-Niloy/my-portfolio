import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detailes = () => {
  const [card, setcard] = useState([]);

  useEffect(() => {
    fetch("../project.json")
      .then((res) => res.json())
      .then((data) => {
        setcard(data);
      });
  }, []);

  const { id } = useParams();
  const detailes = card.filter((e) => e.id === parseInt(id))[0];
  const image = "../" + detailes?.image;

  return (
    <div className="w-[85%] mx-auto">
      <div className="pt-10 pb-20">
        <div className="food-details-container flex flex-col-reverse lg:w-full w-[90%] mx-auto">
          <div className="">
            <img
              src={image}
              className="food-image object-cover rounded-xl border border-black/10 shadow-xl"
            />
          </div>
          <div className={`text-black`}>
            <h2 className="food-name text-4xl font-bold">{detailes?.name}</h2>
            <p className="mt-3">Tech Stack: MERN</p>
            <p className="flex gap-4">
              <a
                href={detailes?.live}
                target="_blank"
                className="text-black hover:underline hover:text-black/60 duration-300"
              >
                <p className="">Live Link</p>
              </a>
              <p className="-translate-x-2">-</p>
              <a
                href={detailes?.github}
                target="_blank"
                className="text-black hover:underline hover:text-black/60 duration-300"
              >
                <p className="-translate-x-4">GitHub Link</p>
              </a>
            </p>
            <p className="food-description mt-5">{detailes?.description}</p>
            <div className="mt-6 mb-10">
              <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detailes?.features?.map((feature, index) => (
                  <div
                    key={index}
                    className=""
                  >
                    <li className="text-black text-sm">{feature}</li>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailes;
