import React from "react";

import { Typography, Button} from "@/ui";
import { ArrowRightOI } from "flowbite-react-icons";

interface IntroProps {
  introFxn: () => void;
}

const Introduction = ({ introFxn }: IntroProps) => {
  return (
    <div>
      <Typography
        variant="h1"
        align="left"
        color="white"
        font="gilroy"
        fontWeight="bold"
        customClassName="my-4"
      >
        Find Your Dream Job Easily
      </Typography>
      <Typography
        variant="base"
        align="left"
        color="white"
        font="gilroy"
        customClassName="my-4"
      >
        Gain a competitive edge of landing your dream job by creating a standout resume with ATS in mind.
      </Typography>
      <Button
        onClick = {introFxn}
        variant="default"
        label = {<div className="flex gap-2">Let's Get Started <ArrowRightOI/></div>}
      />
    </div>
  );
};

export default Introduction;
