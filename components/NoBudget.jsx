import React from "react";

const NoBudget = () => {
  return (
      <div className="flex flex-col justify-center items-center">
        <img src="/images/bun.png"/>
        <p className="text-black font-semibold">Uh oh, looks like the budget for this project is not enough, only log out is working</p>
      </div>
    );
};

export default NoBudget;