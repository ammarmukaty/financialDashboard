import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentColor, currentMode, setThemeSetting } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen bg-white dark:text-gray-200 dark:[#484b52] w-400">
        <div className="flex justify-between items-center p-4 ml-4 ">
          <p className="font-semibold capitalize text-xl">settings</p>
          <button
            type="button"
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            onClick={() => {
              setThemeSetting(false);
            }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col p-4 ml-4 border-t-1 border-color">
          <p className="font-semibold capitalize text-lg">theme settings</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              value="light"
              className="cursor-pointer"
              name="theme"
              onChange={setMode}
              checked={currentMode === "light"}
            />
            <label htmlFor="light" className="cursor-pointer ml-2 text-md">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              value="dark"
              className="cursor-pointer"
              name="theme"
              onChange={setMode}
              checked={currentMode === "dark"}
            />
            <label htmlFor="dark" className="cursor-pointer ml-2 text-md">
              dark
            </label>
          </div>
        </div>
        <div className="flex-col p-4 ml-4 border-t-1 border-color">
          <p className="font-semibold capitalize text-lg">theme colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="flex relative cursor-pointer items-center gap-5 mt-2 justify-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer items-center hover:shadow-lg justify-center"
                    style={{ background: item.color }}
                    onClick={() => {
                      setColor(item.color);
                    }}
                  >
                    <BsCheck
                      className={`justify-center ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
