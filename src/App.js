import React from "react";
import { useState } from "react";
import Testimonials from "./Components/Testimonials";
import reviews from "./data";

const App = () => {
  const [currT, setCurrT] = useState(1);

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center space-y-10">
      <div>
        <h2 className="text-3xl font-bold">Our Testimonials</h2>
        <div className="h-1 bg-purple-500 w-[50%] m-auto"></div>
      </div>
      <Testimonials
        T={reviews[currT]}
        changeT={setCurrT}
        size={reviews.length}
      />
    </div>
  );
};

export default App;
