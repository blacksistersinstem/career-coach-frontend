'use client';

import Introduction from "./introduction";
import CVSubmission from "./cv-submission";
import { useState } from "react";


const Success = () => {
    const [intro, setIntro] = useState<boolean>(false)

    return (
        <div className="w-3/6 flex justify-center items-center">
            {!intro ? <Introduction introFxn = {() => setIntro(true)}/> :  <CVSubmission outroFxn={() => setIntro(false)}/>}
        </div>
    );
}
 
export default Success;