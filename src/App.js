import { BossClock } from "./countdown";
import { React, useEffect, useState } from "react";
const App = () => {
  return (
    <div className="flex">
      <div className="relative">
        <img src="./pico.png" className="min-w-min relative" alt="" />
        <button className="absolute top-[200px] left-[325px] ">
          <BossClock time={30} boss={"green"} />
        </button>
        <button className="absolute top-[270px] left-[120px]">
          <BossClock time={30} boss={"green"} />
        </button>
        <button className="absolute top-[430px] left-[200px]">
          <BossClock time={30} boss={"green"} />
        </button>
        <button className="absolute top-[540px] left-[590px]">
          <BossClock time={30} boss={"green"} />
        </button>

        <button className="absolute top-[450px] left-[110px]">
          <BossClock time={60} boss={"yellow"} />
        </button>
        <button className="absolute top-[260px] left-[610px]">
          <BossClock time={60} boss={"yellow"} />
        </button>

        <button className="absolute top-[570px] left-[150px]">
          <BossClock time={360} boss={"red"} />
        </button>
        <button className="absolute top-[110px] left-[620px]">
          <BossClock time={360} boss={"red"} />
        </button>
        <button className="absolute top-[330px] left-[340px]">
          <BossClock time={60} boss={"pedra"} />
        </button>
      </div>
    <h3 className="text-black text-lg">Developed by <a href="https://www.linkedin.com/in/weri-oliveira-81054a197/">Weri Oliveira</a></h3>
    </div>
  
  );
};
export default App;
