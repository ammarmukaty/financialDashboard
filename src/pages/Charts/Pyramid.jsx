import React from "react";
import { Button } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import { earningData } from "../../data/dummy";

const Pyramid = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="flex w-full">
      <div className="columns-6 bg-red-600">1</div>
      <div className="columns-3 bg-yellow-600">2</div>
      <div className="columns-3 bg-green-600">3</div>
      <div className="columns-3 bg-blue-600">4</div>
    </div>
  );
};

export default Pyramid;
