import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials(props) {
  let review = props.T;
  let numberOfData = props.size;
  let testimonialsChanger = props.changeT;

  function forwardHandler() {
    testimonialsChanger((currT) => {
      return (currT + 1) % numberOfData;
    });
  }

  function backwardHandler() {
    testimonialsChanger((currT) => {
      return (numberOfData + (currT - 1)) % numberOfData;
    });
  }

  function randomHandle() {
    testimonialsChanger(Math.floor(Math.random() * numberOfData));
  }

  return (
    <div className="w-[40%] px-10 pt-10 pb-7 flex flex-col justify-center items-center bg-white space-y-10 rounded-md hover:shadow-xl transition-all duration-500 relative">
      <div className="text-center">
        <div>
          <img
            src={review.image}
            className="block w-28 rounded-full absolute left-7 -top-12 z-[1]"
            alt={"Image not Found"}
          />
          <div className="h-28 w-28 rounded-full absolute left-9 -top-14 bg-purple-500"></div>
        </div>
        <h1 className=" text-xl font-bold">{review.name}</h1>
        <p className="text-purple-500">{review.job}</p>
      </div>
      <div className="text-center text-purple-500 text-3xl">
        <div>❝</div>
        <p className="text-black/[.9] text-base">{review.text}</p>
        <div className="mt-5">❞</div>
      </div>
      <div>
        <div className="flex justify-evenly items-center text-purple-500 mb-5 text-lg">
          <button onClick={backwardHandler}>
            <FiChevronLeft />
          </button>
          <button onClick={forwardHandler}>
            <FiChevronRight />
          </button>
        </div>
        <button
          className="text-white font-bold bg-purple-500 hover:bg-purple-600 px-6 py-1 rounded-[5px]"
          onClick={randomHandle}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
