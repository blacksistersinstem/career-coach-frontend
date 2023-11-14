"use client";

import Introduction from "./introduction";
import CVSubmission from "./cv-submission";
import { useState } from "react";

const Success = () => {
  const [intro, setIntro] = useState<boolean>(false);

  const setFxn = () => {
    setIntro(true);
    console.log(true);
  };

  return (
    <div className="w-3/6 flex justify-center items-center mbl:w-full tab:w-[80%]">
      {!intro ? (
        <Introduction introFxn={setFxn} />
      ) : (
        <CVSubmission outroFxn={() => setIntro(false)} />
      )}
    </div>
  );
};

export default Success;
